const stanHorrorMovies = ["The Hunt", "The Belko Experiment", "Horns", "Freddy vs Jason", "Blade: Trinity", "Hansel & Gretel: Witch Gunters", "Dracula 2000",
"The Haunting in Connecticur","The Haunting in Connecticut 2: Ghost of Georgia","The Gravedancers","The Faculty","The Disappointments Room",
"The Descent","The Cannibal Club","The Awakening","The Autopsy of Jane Doe","The Amityville Horror","The Final Destination",
"Suspiria(1977)","Stigmata","Stake Land","Species","Species II","Species III","Sinister","Silent Hill: Revelation","Sheitan","Sharknado 3",
"Sharknado 2", "Scream", "Scream 3", "Scream 2", "Queen of the Damned", "Poltergeist III", "Poltergeist II", "Poltergeist", "Piranha 3DD", "Piranha", 
"Pathology", "Paranormal Activity", "Needful Things", "Monster Mash", "Monster Family", "Mom and Dad", "Misery", "Mimic", "Marrowbone", "Manhunter",
"Lost Highway", "Let the Right one in", "Let Me in","Killing Ground","Kill List","Kalifornia","Jeeper Creepers II","Intruders","Insidious","Hit and Run","High Tension","Halloween H20: 20 Years Later","Good Manners","For Dusk Till Dawn","Final Destination 3",
"Exorcist: The Beginning(2004)","Evil Dead(2013)","Erotic Ghost Stori","Erotic Ghost Story II","Epidemic","Eden Lake",
"Dumplings", "Cooties","Cockneys vs Zombies","Clown","Child's Play","Carrie(1976)","Candyman II: Farewell to the Flesh","Blair Witch","Asylum","Army of Darkness",
"Amityville: The Awakening","30 Days of Night","Wrong Turn", "Wolf Creek 2: Director's Cut","Wolf Creek","The Woods","The Woman in Black","The town that dreaded Sundown",
"The Texas Chainsaw Massacre: The Beginning","The Stroller in the Attic","The silence of the Lambs","The Reaping","The Rage - Carrie 2","The Poughkeepsie Tapes","The Others","The neon Demon","The Last house on the Left(1972)"]


const netflixHorrorMovies = ['The Perfection','Await Further Instructions','Meet the Blacks','Hereditary','The Purge','Get Out',
'Pitch Black','The Shining','The Conjuring','Clown','Quarantine','The conjuring 2','Dark Shadows','Sinister II','13 Cameras',
'Dawn of the Dead','Carrie','Jennifers Body','Annabelle','The Ritual','The Boy','Winchester','Final Destination 5','The Invitation',
'The Exorcist','Terrifier','Train to Busan','Hush','The Silence','Resident Evil Retribution','The Vault','Death Note','The taking of Deborah Logan',
'The Babysitter','Christine','Apostle','The Bye Bye Man','The Strangers: Prey at night','MaleVolent','Oculuis','IT','Rogue','Doom',
'Anacondas: The hung for the Blood Orchid','Geralds Game','The Rite','Legion','The Open House','Priest','Cargo','The Neon Demon','Veronica',
'Errementari: The Blacksmith and the devil','The Wailer','Rampant','The Presence','Shutter','Dont Kill it','Wyrmwood: Road of the dead','Teenage Space Vampires',
'Gremlins','Creep','Creep 2','Murder Party','Backcountry','Here Alone','He Never Died','Ravenous','Under the Shadow','Happy Hunting','The Forest',
'One Missed Call','Hes out There','The Rezort','What Lies Beneath','Clinical','Wolves at the Door','Febuary','American Poltergeist','Our House','Final Girl',
'American Poltergiest 2','Paranomal Activity 4','The Life Changer','Little Evil','Rupture','I am the pretty thing that lives in the house','Incarnate','Holidays',
'The Lodgers','The Nightmare','The Hose of the Dissapeared','May the Devil take you','Target','Animas','Cube','Zombeavers','Dont Hang Up','Family Blood',
'Horror Story','The House Next Door','Rings','Jigsaw','American Horror Story','A Nightmare on Elm Street','The Haunting of Hill House','Day of the Dead Bloodline',
'First Born','The Basement','Bird Box','CAM','The Stepfather','PET','A Cure for Wellness','The Roommate','Haunted','Scream(TV show)','The Glass House',
'Slasher(TV show)','The Shallows','Black Summer(TV show)','My Teacher, My Obsession','Lavender','Chambers','Deadly Switch','Viral','Dismissed','Twinsanity',
'You Get Me','Kidnap','The Mist','Z Nation(TV show)','I Am Legend','Trust','The Babysitters Seduction','Circle','Shutter','XX','Into the Storm','Hold the Dark',
'Taking Lives','Mercy','Contagion','The Cloverfield Paradox','From Dusk till Dawn(TV show)','Nightmare on Elm Street4: The Dream Master','The Presence']
const randHorrors = []
// Finds random element inside array
const netflixHorrorMovie = () => {

  let movie = netflixHorrorMovies[Math.floor(Math.random()*netflixHorrorMovies.length)]
  let container = document.querySelector(".netflixContainer");
  let movieTitle = document.createElement("p");

  if(randHorrors.length === 0) {
    movieTitle.innerText = movie
    container.appendChild(movieTitle)
    randHorrors.push(movieTitle)
  } else {
    document.querySelector("p").remove()
    randHorrors.pop()
    movieTitle.innerText = movie
    container.appendChild(movieTitle)
    randHorrors.push(movieTitle)
  }
}

const stanRandHorrors = []
const stanHorrorMovie = () => {
  
  let stanMovie = stanHorrorMovies[Math.floor(Math.random()*stanHorrorMovies.length)]
  let stanContainer = document.querySelector(".stanContainer");
  let stanMovieTitle = document.createElement("p");
  stanMovieTitle.className = "stanTitle"

  if(stanRandHorrors.length === 0) {
    stanMovieTitle.innerText = stanMovie
    stanContainer.appendChild(stanMovieTitle)
    stanRandHorrors.push(stanMovieTitle)
  } else {
    document.querySelector(".stanTitle").remove()
    stanRandHorrors.pop();
    stanMovieTitle.innerText = stanMovie
    stanContainer.appendChild(stanMovieTitle)
    stanRandHorrors.push(stanMovieTitle)
  }
}
