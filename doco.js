
const stanDocos = [
  {
    name: "Zero Days",
    genre:  "Documentary"
  },
  {
    name: "Whitney",
    genre: ["Biography","Music"]
  },
  {
    name: "When Louis Met Paul and Debbie",
    genre: "Documentary"
  },
  {
    name: "Wayne",
    genre: "Biography"
  },
  {
    name: "Walk with Me",
    genre: "Documentary"
  },
  {
    name: "Urine Aid",
    genre: "Documentary"
  },
  {
    name: "Trumped: Inside the Greated Political Upset of All Time",
    genre: "Documentary"
  },
  {
    name: "The Valkyrie Legacy",
    genre: "Documentary"
  },
  {
    name: "The Swell Season",
    genre: "Music"
  },
  {
    name: "The Summit",
    genre: "Adventure"
  },
  {
    name: "The September Issue",
    genre: "Documentary"
  },
  {
    name: "The Meaning of Vanlife",
    genre: "Documentary"
  },{
    name: "The Last Waltz",
    genre: "Music"
  },
  {
    name: "The Imposter",
    genre: ["Biography","Crime"]
  },
  {
    name: "The Hunting Ground",
    genre: "Documentary"
  },
  {
    name: "The Bond Cocktail",
    genre: "Documentary"
  },
  {
    name: "The Sugar Film",
    genre:"Documentary"
  },
  {
    name: "Stories We Tell",
    genre: "Documentary"
  },
  {
    name: "Searching For Sugar Man",
    genre: ["Biography","Music"]
  },
  {
    name: "Scientology: The Ex Files",
    genre: "Documentary"
  },
  {
    name: "Paul Kelly: Stories of Me",
    genre: "Music"
  },
  {
    name: "Party Pensioners: Sex, Drugs & Bingo",
    genre: ["Documentary","Reality"]
  },
  {
    name: "Oasis",
    genre: ["Biography","Music"]
  },
  {
    name: "My Transgender Summer Camp",
    genre: "Documentary"
  },
  {
    name: "My Mum's Hotter Than Me!",
    genre: "Reality"
  },
  {
    name:"Midnight Oil: 1984",
    genre: "Music"
  },
  {
    name:"Mandela",
    genre: "Biography"
  },
  {
    name:"Love, Marilyn",
    genre: "Biography"
  },
  {
    name: "Watch aLouis Theroux Doco's",
    genre: "Documentary"
  },
  {
    name: "Little Divas:Tantrums & Tiaras",
    genre: "Reality"
  },
  {
    name: "Life Off Grid",
    genre: "Documentary"
  },
  {
    name: "LENNONYC",
    genre: "Biography"
  },
  {
    name: "Jesus Camp",
    genre: "Documentary"
  },
  {
    name:"How to Make Money Selling Drugs",
    genre: "Crime"
  },
  {
    name: "Hoop Dreams",
    genre: "Documentary"
  },
  {
    name:"Gold Digger and Proud",
    genre: "Reality"
  },
  {
    name:"Girl to Men",
    genre: "Reality"
  },
  {
    name:"Freakonomics",
    genre: "Documentary"
  },
  {
    name:"Everything and Nothing: The Untol Story of 007",
    genre: "Documentary"
  },
  {
    name:"Dirty Wars",
    genre: "Crime"
  },
  {
    name:"David Lynch: The Art of Life",
    genre: "Biography"
  },
  {
    name:"David Beckham: Into the Unknown",
    genre: "Biography"
  },
  {
    name:"David Attenborough's Natural History Museum",
    genre: "David Attenborough"
  },
  {
    name:"Chopper: In His Own Words",
    genre: "Biography"
  },
  {
    name:"Chasing Asylum",
    genre: "Documentary"
  },
  {
    name:"Bond Girls are Forever",
    genre: "Documentary"
  },
  {
    name:"Bombshell: The Hedy Lamarr Story",
    genre: "Documentary"
  },
  {
    name:"Body Freaks: Old Face, New Face",
    genre: "Reality"
  },
  {
    name:"Body Freaks: Make Me a Perfect 10",
    genre: "Reality"
  },
  {
    name:"Blackfish",
    genre: "Documentary"
  },
  {
    name:"Banksy Does New york",
    genre: "Reality"
  },
  {
    name:"Attenborough's Lift that Glows",
    genre: "David Attenborough"
  },
  {
    name:"Attenborough and the Giant Egg",
    genre: "David Attenborough"
  },
  {
    name:"Attenborough at 90: Behind the lens",
    genre: "David Attenborough"
  },
  {
    name:"Attenborough and the Empire of the Ants",
    genre: "David Attenborough"
  },
  {
    name: "And the Word Was Bond",
    genre: "Documentary"
  },
  {
    name: "All Governments Lie",
    genre: "Documentary"
  },
  {
    name: "All for one",
    genre: "Biography"
  },
  {
    name: "A complete History of My Sexual Failures",
    genre: "Documentary"
  }
]


// const StanPrint = () => {


//   stanDocos.forEach((elem) => {
//   let movieName = document.createElement("p")
//   movieName.innerText = elem.name;
//   container.appendChild(movieName)
//   })
// }
// StanPrint()



const docoMusic = []


const docoMusic2 = []


const docoDoco = []
const docoBio = []
const docoCrime = []
const docoReality = []
const docoDavid = []


let container = document.querySelector(".stanContainer")
let randDocoMusic = docoMusic[Math.floor(Math.random()*docoMusic.length)]
let music = document.createElement("p");


const stanMusic = () => {
  stanDocos.forEach((elem) => {
  if(elem.genre === "Music")
  docoMusic.push(elem.name)
  })
  if(docoMusic2 === 0) {
    docoMusic2.push(randDocoMusic)

    music.innerText = randDocoMusic;
    container.appendChild(music)
  } else {
    document.querySelector("p").remove()
    docoMusic2.pop()
    music.innerText = randDocoMusic;
    container.appendChild(music)
  }
}