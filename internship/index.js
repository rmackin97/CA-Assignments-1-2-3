'use strict'

let animals = [
  {name:"1 - Baboon",description:
  "<div><p><b>Where do baboons live?</b><br>"+
  "They are found in surprisingly varied habitats and are extremely adaptable."+
  "These monkeys prefer semi-arid habitats, like savannas and bushlands, but "+
  "some live in tropical forests and mountains. The major requirements for any "+
  "habitat appear to be abundant water sources and safe sleeping places - either "+
  "in tall trees or on cliff faces.</p>"+
  "<p><b>Weight</b><br>"+
  "9 to 31 kilograms (20 to 70 pounds)</p>"+
  "<p><b>Size</b><br>"+
  "50 to 76 centimeters at the shoulder (20 to 30 inches)</p>"+
  "<p><b>Life Span</b><br>"+
  "20 to 40 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Savannas and woodlands</p>"+
  "<p><b>Diet</b><br>"+
  "Omnivorous</p></div>"},
  {name:"2 - Cheetah",description:
  "<div><p><b>Where do cheetahs live?</b><br>"+
  "The historic distribution of this species is very wide. But in the 1970s, "+
  "European settlers saw these big cats as vermin to be eradicated, and "+
  "populations were widely reduced. Currently, they only inhabit about 10 percent "+
  "of their historic range. Their range occurs widely but is extremely sparse and "+
  "fragmented in the regions they still inhabit. Southern and Eastern Africa are "+
  "strongholds for cheetah populations.</p>"+
  "<p><b>Weight</b><br>"+
  "20 to 72 kilograms (45 to 160 pounds)</p>"+
  "<p><b>Size</b><br>"+
  "1 to 1.5 meters in length (45 to 60 inches) 76 centimeters at the shoulder (30 inches)</p>"+
  "<p><b>Life Span</b><br>"+
  "Maximum recording of a female living 14 years and 5 months in the wild and "+
  "about 10 years for a males.</p>"+
  "<p><b>Habitat</b><br>"+
  "Wide range of habitats - from dry forests and thick scrubs through grasslands "+
  "and Sahara deserts.</p>"+
  "<p><b>Diet</b><br>"+
  "Carnivores</p></div>"},
  {name:"3 - Chimpanzee",description:
  "<div><p><b>Where do chimpanzees live?</b><br>"+
  "Chimpanzees can be found from Southern Senegal across the forested belt north "+
  "of the Congo River to Western Uganda and Western Tanzania. Gombe National Park "+
  "in Tanzania is the first park in Africa specifically created for chimpanzees.</p>"+
  "<p><b>Weight</b><br>"+
  "55 to 110 lb.</p>"+
  "<p><b>Size</b><br>"+
  "About 4 ft. tall</p>"+
  "<p><b>Life Span</b><br>"+
  "Up to 50 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Forest</p>"+
  "<p><b>Diet</b><br>"+
  "Omnivorous</p></div>"},
  {name:"4 - Elephant",description:
  "<div><p><b>Where do elephants live?</b><br>"+
  "They will live in almost any habitat that provides plentiful food and water. "+
  "Their populations are scattered throughout the savannas of sub-Saharan Africa. "+
  "About 70 percent of their range exists in protected land.</p>"+
  "<p><b>Weight</b><br>"+
  "2,000 to 6,100 kilograms (about 2 to 7 tons)</p>"+
  "<p><b>Size</b><br>"+
  "Up to 4 meters (13 feet)</p>"+
  "<p><b>Life Span</b><br>"+
  "60 to 70 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Open and closed savanna, grasslands, and arid deserts</p>"+
  "<p><b>Diet</b><br>"+
  "Herbivorous</p></div>"},
  {name:"5 - Giraffe",description:
  "<div><p><b>Where do giraffes live?</b><br>"+
  "They have adapted to a variety of habitats and can be found in desert landscapes "+
  "to woodland and savanna environments south of the Sahara, wherever trees occur.</p>"+
  "<p><b>Weight</b><br>"+
  "Males: 1,930 kilograms (4,254 pounds) Females: 1,180 kilograms (2,601 pounds)</p>"+
  "<p><b>Size</b><br>"+
  "5.7 meters tall from the ground to their horns (18.7 feet)</p>"+
  "<p><b>Life Span</b><br>"+
  "Average 10 to 15 years in the wild; recorded a maximum of 30 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Dense forest to open plains</p>"+
  "<p><b>Diet</b><br>"+
  "Herbivorous</p></div>"},
  {name:"6 - Hippopotamus",description:
  "<div><p><b>Where do hippopotamuses live?</b><br>"+
  "Two hippo species are found in Africa. The large hippo, found in East Africa, "+
  "occurs south of the Sahara. The other, much smaller (440 to 605 pounds) "+
  "species of hippo is the pygmy hippopotamus. Limited to very restricted ranges "+
  "in West Africa, it is a shy, solitary forest dweller and is now rare.</p>"+
  "<p><b>Weight</b><br>"+
  "Up to 3.5 tn.</p>"+
  "<p><b>Size</b><br>"+
  "13-ft. long and 5-ft. tall</p>"+
  "<p><b>Life Span</b><br>"+
  "50 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Rivers and swamps</p>"+
  "<p><b>Diet</b><br>"+
  "Herbivorous</p></div>"},
  {name:"7 - Hyena",description:
  "<div><p><b>Where do hyenas live?</b><br>"+
  "Hyenas are widespread and found in most habitats. Spotted hyenas are found "+
  "in all habitats, including savannas, grasslands, woodlands, forest edges, "+
  "subdeserts, and even mountains up to 13,000 ft.</p>"+
  "<p><b>Weight</b><br>"+
  "90 to 190 lb.</p>"+
  "<p><b>Size</b><br>"+
  "28 to 35 in. tall</p>"+
  "<p><b>Life Span</b><br>"+
  "Up to 25 years in captivity</p>"+
  "<p><b>Habitat</b><br>"+
  "Savannas, grasslands, woodlands, forest edges, subdeserts, and mountains up to 13,000 ft.</p>"+
  "<p><b>Diet</b><br>"+
  "Carnivorous</p></div>"},
  {name:"8 - Lion",description:
  "<div><p><b>Where do lions live?</b><br>"+
  "Lions can be found in savannas, plains, grasslands, dense bush, and woodlands.<p>"+
  "<p><b>Weight</b><br>"+
  "125 to 272 kilograms (277 to 600 pounds)</p>"+
  "<p><b>Size</b><br>"+
  "1.2 meters at the shoulder (48 inches) and about 2 to 3.3 meters in length (7 to 11 feet)</p>"+
  "<p><b>Life Span</b><br>"+
  "10 to 18 years in the wild. Up to 30 years in captivity.</p>"+
  "<p><b>Habitat</b><br>"+
  "Grassy plains and open woodlands</p>"+
  "<p><b>Diet</b><br>"+
  "Carnivorous</p></div>"},
  {name:"9 - Rhinoceros",description:
  "<div><p><b>Where do rhinos live?</b><br>"+
  "The African rhino is divided into two species, the black rhino and the white "+
  "rhino. White rhinos mainly live in South Africa, but they have also been "+
  "reintroduced to Botswana, Namibia, Swaziland, and Zimbabwe. Southern white "+
  "rhinos have been introduced to Kenya, Zambia, and Cote d'Ivoire. The majority "+
  "of the black rhino population - 98% - is concentrated in four countries: South "+
  "Africa, Namibia, Zimbabwe, and Kenya. South Africa houses 40% of the total "+
  "black rhino population. There are some black rhinos in the region spread "+
  "between Cameroon and Kenya.<p>"+
  "<p><b>Weight</b><br>"+
  "Black: 1 to 1.5 tn. (2,000 to 3,000 lb.), White: More than 2 tn. (4,000+ lb.)</p>"+
  "<p><b>Size</b><br>"+
  "About 60 in. at the shoulder</p>"+
  "<p><b>Life Span</b><br>"+
  "35 to 40 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Grassland and open savanna</p>"+
  "<p><b>Diet</b><br>"+
  "Herbivorous</p></div>"},
  {name:"10 - Zebra",description:
  "<div><p><b>Where do rhinos live?</b><br>"+
  "Plains zebras have a wide range in east and southern Africa. They usually "+
  "live in treeless grasslands and savanna woodlands and are absent from "+
  "deserts, rainforests, and wetlands. This species' habitat is shrinking, "+
  "however, and plains zebras are now extinct in Burundi and Lesotho. <p>"+
  "<p><b>Weight</b><br>"+
  "Up to 770 lbs.</p>"+
  "<p><b>Size</b><br>"+
  "3.6 - 4.8 ft. at the shoulder</p>"+
  "<p><b>Life Span</b><br>"+
  "20 years</p>"+
  "<p><b>Habitat</b><br>"+
  "Grasslands and savannas</p>"+
  "<p><b>Diet</b><br>"+
  "Herbivorous</p></div>"},
]

/*Dropdown event handler function*/
function selectChanged() {
  let sel = document.getElementById("animalDropdown")
  let selectedOption = sel.options.item(sel.selectedIndex)
  let val = selectedOption.value

  let p = document.getElementById("description")

  if(val == -1) {
    p.innerHTML = ""
  } else {
    p.innerHTML = animals[val].description
  }
}

/*Dynamically creates div with selection options 1 - 10*/
function dynLoad() {
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
}
