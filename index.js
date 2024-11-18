[
  {
    "id": 0,
    "name": "Aatrox",
    "speciality": "The world ender",
    "image": "./bilder/Aatrox.jpg"
  },
  {
    "id": 1,
    "name": "Mundo",
    "speciality": "The tank.",
    "image": "./bilder/Mundo.jpg"
  },
  {
    "id": 2,
    "name": "Braum",
    "speciality": "The protector",
    "image": "./bilder/Braum.jpg"
  },
  {
    "id": 3,
    "name": "Vi",
    "speciality": "The fighter",
    "image": "./bilder/Vi.webp"
  },
  {
    "id": 4,
    "name": "Jinx",
    "speciality": "The explosives expert",
    "image": "./bilder/Jinx.jpg"
  },
  {
    "id": 5,
    "name": "Xerath",
    "speciality": "The spell caster",
    "image": "./bilder/Xerath.jpg"
  },
  {
    "id": 6,
    "name": "Singed",
    "speciality": "The mad scientist",
    "image": "./bilder/Singed.webp"
  },
  {
    "id": 7,
    "name": "Zed",
    "speciality": "The assasin",
    "image": "./bilder/Zed.webp"

  },
  {
      "id": 8,
      "name": "Nami",
      "speciality": "The support",
      "image": "./bilder/Nami.jpg"

  }
]

const champions = [
  { "id": 0, "name": "Aatrox", "speciality": "The world ender", "image": "./bilder/Aatrox.jpg" },
  { "id": 1, "name": "Mundo", "speciality": "The tank", "image": "./bilder/Mundo.jpg" },
  { "id": 2, "name": "Braum", "speciality": "The protector", "image": "./bilder/Braum.jpg" },
  { "id": 3, "name": "Vi", "speciality": "The fighter", "image": "./bilder/Vi.webp" },
  { "id": 4, "name": "Jinx", "speciality": "The explosives expert", "image": "./bilder/Jinx.jpg" },
  { "id": 5, "name": "Xerath", "speciality": "The spell caster", "image": "./bilder/Xerath.jpg" },
  { "id": 6, "name": "Singed", "speciality": "The mad scientist", "image": "./bilder/Singed.webp" },
  { "id": 7, "name": "Zed", "speciality": "The assasin", "image": "./bilder/Zed.webp" },
  { "id": 8, "name": "Nami", "speciality": "The support", "image": "./bilder/Nami.jpg" }
];

  // Ladda tidigare sparat team från LocalStorage
  let team = JSON.parse(localStorage.getItem('team')) || [];
  const teamList = document.getElementById('team-list');
  
  // Funktion för att visa champions
  function displayChampions() {
    const catalog = document.getElementById('champion-catalog');
    catalog.innerHTML = '';
    
    champions.forEach(champion => {
      const championCard = document.createElement('div');
      championCard.classList.add('champion-card');
      
      championCard.innerHTML = `
        <img src="${champion.image}" alt="${champion.name}">
        <h3>${champion.name}</h3>
        <p>${champion.speciality}</p>
        <button onclick="addToTeam(${champion.id})">Add to Team</button>
      `;
      
      catalog.appendChild(championCard);
    });
  }
  
  // Funktion för att lägga till en champion i teamet
  function addToTeam(championId) {
    if (team.length >= 4) {
      alert("Your team can only have 4 champions.");
      return;
    }
  
    if (team.some(champion => champion.id === championId)) {
      alert("Champion is already in your team!");
      return;
    }
  
    const selectedChampion = champions.find(champ => champ.id === championId);
    team.push(selectedChampion);
    updateTeamDisplay();
    saveTeam();
  }
  
  // Funktion för att visa teamet
  function updateTeamDisplay() {
    teamList.innerHTML = '';
    team.forEach(champion => {
      const listItem = document.createElement('li');
      listItem.textContent = champion.name;
      teamList.appendChild(listItem);
    });
  }
  
  // Funktion för att spara team i LocalStorage
  function saveTeam() {
    localStorage.setItem('team', JSON.stringify(team));
  }
  
  // Funktion för att återställa teamet
  function resetTeam() {
    team = [];
    updateTeamDisplay();
    localStorage.removeItem('team');
  }
  
  // Koppla återställningsknapp till funktionen
  document.getElementById('reset-team').addEventListener('click', resetTeam);
  
  // Visa champions och teamet vid sidladdning
  displayChampions();
  updateTeamDisplay();