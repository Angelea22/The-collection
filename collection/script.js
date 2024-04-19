var titlearray = [
  "TLOU",
  "BG3",
  "GOW",
  "MW2",
  "MW3",
  "BO",
  "RE7",
  "RE4",
  "Minecraft",
  "GTAV",
];
var descriptionarray = [
  {
    name: "The Last Of Us",
    developers: "Naughty Dog",
    directors: "Neil Druckmann and Bruce Straley",
    releaseYear: 2013,
    programmers: "Travis McIntosh and Jason Gregory",
  },

  {
    name: "Baldur's Gate 3",
    developers: "Larian Studios",
    directors: "Swen Vincke",
    releaseYear: 2023,
    programmers: "Bert Van Semmertier and Blake Maltby",
  },
  {
    name: "God Of War Ragnarok",
    developers: "Santa Monica Studios",
    directors: "Eric Williams and Cory Barlog",
    releaseYear: 2022,
    programmers: "Josh Hobson",
  },

  {
    name: "Call Of Duty MW2",
    developers: "Infinity Ward and Beenox",
    publishers: "Activision",
    directors: "Jason West",
    releaseYear: 2009,
  },

  {
    name: "Call Of Duty MW3",
    developers: "Infinity Ward",
    publishers: "Activision",
    directors: "Bret Robbins and Glen Schofield",
    releaseYear: 2011,
  },

  {
    name: "Call Of Duty Black Ops",
    developers: "Treyarch",
    directors: "Dave Anthony and Corky Lehmkuhl",
    releaseYear: 2010,
    programmers: "David King",
  },

  {
    name: "Resident Evil 7 Biohazard",
    developers: "Capcom",
    directors: "Koshi Nakanishi",
    releaseYear: 2017,
    programmers: "Yosuke Noro and Tomofumi Ishida",
  },
  {
    name: "Resident Evil 4 Remake",
    developers: "Capcom",
    directors: "Yasuhiro Anpo and Kazunori Kadoi",
    releaseYear: 2022,
    programmers: "Masatoshi Fukazawa",
  },
  {
    name: "Minecraft",
    developers: "Mojang Studios",
    publishers:
      "Mojang Studios, Xbox Game Studios, Sony Interactive Entertainment",
    releaseYear: 2011,
    genre: "Sandbox, survival",
  },
  {
    name: "Grand Theft Auto V",
    developers: "Rockstar North",
    publishers: "Rockstar Games",
    releaseYear: 2013,
    programmers: "Adam Fowler",
  },
];

var dynamic = document.querySelector(".container");
for (var i = 0; i < titlearray.length; i++) {
  var game = descriptionarray[i];
  var cardHTML = `

    <div id="cards${i}" class="boxes">
       <div class="box-content">
         <h2>${titlearray[i]}</h2>
        <p>
           <strong>Name:</strong> ${game.name}<br>
          <strong>Developers:</strong> ${game.developers}<br>
          <strong>Directors:</strong> ${game.directors}<br>
          <strong>Release Year:</strong> ${game.releaseYear}<br>
          <strong>Programmers:</strong> ${game.programmers}<br>
        </p>
         <a class="showmore" href="#">Read More</a>
      </div>
     </div>
    
  `;

  dynamic.innerHTML += cardHTML;
  var bgimg = document.getElementById(`cards${i}`);
  bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
}
