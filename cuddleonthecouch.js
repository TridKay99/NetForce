const netRomArr = []

const stanRomArr = ["Yes Man","When Harry met Sally", "Wedding Daze", "Wedding Crashers", "View From the Top", "Uptown Girls", "Up for Love", "Two Weeks Notice", "Three Wise Cousins", "The Woman in Red", "She's All That", "Pretty Woman", "Playing it Cool", "Paperback Hero", "Overbord", "Mystic Pizza", "Laws of Attraction", "Killers", "Kiki, Love to Love", "French Kiss", "Four Weddings and a Funeral","Everything You Always Wanted to Know About Sex (But Were Afraid to Ask)","Eagle vs Shark - Trid's Approval", "Annie Hall",
"America's Sweethearts", "A Guy THing", "A Few Best Men", "What Women Want", "Mannequin", "Kate & Leopold", "Your Sister's Sister", "You're Killing me Susana", "UnIndian", "Tiny Furniture", "The Wedding Part", "The Switch", "The Rules of Attraction", "The Proposal", "The Hollars", "The Cake Eaters", "The Big Wedding", "The Big sick", "Shall We Dance?", "Seeking a Friend For The End of the World","Scene of a Sexual Nature", "Ruben Guthrie","Return to me","Punch Drunk Love(Adam Sandler) - Trid's Approval","Pawno","My Best Friends Wedding","Man of the Year","Maid in Manhatten","Life is Beautiful","Learning to Drive",
"LOL","Joss Whedon's Much Ado About Nothing","Jersey Girl","Hope Springs","Garden State","Easy A","Desperately Seeking Susan","Chasing Amy","Blue State","Bigger than the Sky","Before We Go","10 things I Hate About You",
"Wuthering Heights","Wet Woman in the Wind","Three Times","The Yards","The Vow","The Space Between Us","The Railway Man","The Next Three Days","The Legend of Tarzan","The Libertine","The Lucky one","The Hollars","Slumdog Millionaire","Shall We Dance?","Return To me",
"Passengers","Nicholas Nickleby","My Best Friend's Wedding","Me Before You","Married Life","Love","Learning to Drive","Lars and the Real Girl","Kids in Love","Hope Springs","Everything, Everything","Cruel Intentions","Collateral Beauty","Chocolat","Big Eyes","Becoming Jane","Tulip Fever","Cold Mountain","The Pinano","Song to Song","Little Voice","Coyote Ugly"]

const randStanRom =[]

const stanRomMovie = () => {
  let movie = stanRomArr[Math.floor(Math.random()*stanRomArr.length)]
  let container = document.querySelector(".stanContainer");
  let movieTitle = document.createElement("p");

  if(randStanRom.length === 0) {
    movieTitle.innerText = movie
    container.appendChild(movieTitle)
    randStanRom.push(movieTitle)
  } else {
    document.querySelector("p").remove()
    randStanRom.pop()
    movieTitle.innerText = movie
    container.appendChild(movieTitle)
    randStanRom.push(movieTitle)
  }
}