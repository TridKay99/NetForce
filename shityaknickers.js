const horrorMovies = ['The Perfection','Await Further Instructions','Meet the Blacks','Hereditary','The Purge','Get Out',
'Pitch Black','The Shining','The Conjuring','Clown','Quarantine','The conjuring 2','Dark Shadows','Sinister II','13 Cameras',
'Dawn of the Dead','Carrie','Jennifers Body','Annabelle','The Ritual','The Boy','Winchester','Final Destination 5','The Invitation',
'The Exorcist','Terrifier','Train to Busan','Hush','The Silence','Resident Evil Retribution','The Vault','Death Note','The taking of Deborah Logan',
'The Babysitter','Christine','Apostle','The Bye Bye Man','The Strangers: Prey at night','MaleVolent','Oculuis','IT','Rogue','Doom',
'Anacondas: The hung for the Blood Orchid','Geralds Game','The Rite','Legion','The Open House','Priest','Cargo','The Neon Demon','Veronica',
'Errementari: The Blacksmith and the devil','The Wailer','Rampant','The Presence','Shutter','Dont Kill it','Wyrmwood: Road of the dead','Teenage Space Vampires',
'Gremlins','Creep','Creep 2','Murder Party','Backcountry','Here Alone','He Never Died','Ravenous','Under the Shadow','Happy Hunting','The Forest','Satanic',
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
const displayRandomMovie = () => {

  let movie = horrorMovies[Math.floor(Math.random()*horrorMovies.length)]
  let container = document.querySelector(".container");
  let movieTitle = document.createElement("p");

  if(randHorrors.length === 0) {
    // movieTitle.innerText = movie
    // container.appendChild(movieTitle)
    // randHorrors.push(movieTitle)
    alert("virgin");
  } else {
    document.querySelector("p").remove()
    randHorrors.pop()
    movieTitle.innerText = movie
    container.appendChild(movieTitle)
    randHorrors.push(movieTitle)
  }
}