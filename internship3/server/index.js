'use strict'

let animals = [{name:"baboon",description:"Baboons are monkeys.",index:0},{name:"cheetah",description:"Cheetahs are cats.",index:1},
{name:"chimpanzee",description:"Chimpanzees are monkeys.",index:2},{name:"elephant",description:"Elephants are mammals.",index:3},
{name:"giraffe",description:"Giraffes are mammals.",index:4},{name:"hippopotamus",description:"Hippos are mammals.",index:5},
{name:"hyena",description:"Hyenas are dogs.",index:6},{name:"lion",description:"Lions are cats.",index:7},
{name:"rhinoceros",description:"Rhinos are mammals.",index:8},{name:"zebra",description:"Zebras are horses.",index:9}]

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

console.log("this is my dirname"+__dirname)
app.use( '/' , express.static(path.join(__dirname ,'..' ,'public')))

/*Connecting to database*/
let mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/african-wildlife')

let animalSchema = new mongoose.Schema({
  index:Number,
  name:String,
  description:String
})
let Animal = mongoose.model('Animal', animalSchema)

let db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  /*Initializing database*/
  console.log("Initializing database.")

  for(let i = 0; i < animals.length; i++) {
    let unique = true
    let newAnimal = new Animal(animals[i])

    /*Ensures the database contains only uniquely indexed items*/
    Animal.find(function(err,a){
      for(let j = 0; j < a.length; j++) {
        if(a[j].index == newAnimal.index) {
          unique = false
        }
      }

      if(unique) {
        newAnimal.save(function (err,animal) {
          if(err) {
            return console.error(err)
          }
          console.log(animal.name)
        })
      } else {
        console.log("Attempted to add duplicate.")
      }
    })
  }
})

app.get('/index', (req,res) => {
  res.sendFile(path.join(__dirname,'..', '/public/index.html'), function(err) {
    if(err) {
      return res.status(404).send("Could not find \/index")
    }
    console.log("Sent index.html")
  })
})

app.get('/animals', (req,res) => {
  Animal.find(function(err,a) {
    if(err) {
      return res.status(404).send("Could not find value \/animals")
    }
    return res.send(a)
  })
})

app.get('/animals/:value', (req,res) => {
  let index = parseInt(req.params.value)
  if(Number.isInteger(index)) {
    Animal.find(function(err,a){
      for(let i = 0; i < a.length; i++) {
        if(a[i].index == index) {
          return res.send(a[i])
        }
      }
      return res.status(404).send("Could not find value: "+req.params.value)
    })
  } else {
    return res.status(404).send("Could not find value: "+req.params.value)
  }
})

app.listen(port, () => console.log("Listening on port 3000."))
