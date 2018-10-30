'use strict'

/*Retrieving all animals from server*/
function getAnimals(fun) {
  let request = new XMLHttpRequest()
  request.open('GET', '/animals', true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let resp = request.responseText
      console.log(resp)
      return fun(JSON.parse(resp))
    } else {
      return fun([])
    }
  }

  request.onerror = function() {
    return fun([])
  }

  request.send()
}

/*Retrieving specified animal by index from server*/
function getAnimal(index,fun) {
  let request = new XMLHttpRequest()
  request.open('GET', '/animals/'+index, true)

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      let resp = request.responseText
      console.log(resp)
      return fun(JSON.parse(resp))
    } else {
      return fun({})
    }
  }

  request.onerror = function() {
    return fun({})
  }

  request.send()
}

/*Dropdown event handler function*/
function selectChanged() {
  let sel = document.getElementById("animalDropdown")
  let selectedOption = sel.options.item(sel.selectedIndex)
  let val = selectedOption.value

  console.log(val)

  let animal = getAnimal(val, function(animal) {
    let p = document.getElementById("description")

    if(val == -1) {
      p.innerHTML = ""
    } else {
      p.innerHTML = animal.description
    }
  })
}

/*Dynamically creates div with selection options 1 - 10*/
function dynLoad() {
  let animals = getAnimals(function(animals) {
    console.log(animals)

    let div = document.createElement("div")
    div.id = "dynDiv"

    let selection = document.createElement("select")
    selection.onchange = selectChanged
    selection.id = "animalDropdown"

    /*Default selection option 0*/
    let option = document.createElement("option")
    option.value = -1
    option.innerHTML = "--- Select ---"
    selection.add(option)

    /*Animal selection options 1 - 10*/
    for (let i = 0; i < animals.length; i++) {
      option = document.createElement("option")
      option.value = i
      option.innerHTML = animals[i].name
      selection.add(option)
    }

    let desc = document.createElement("span")
    desc.id = "description"
    desc.style = "text-align:center"

    div.appendChild(selection)
    div.appendChild(desc)

    let b = document.getElementById("main")
    b.appendChild(div)
  })
}
