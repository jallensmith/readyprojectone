// Global Variables
const digiAPI = `https://digimon-api.vercel.app/api/digimon`;
let allDigimons = [];
let digimonStorage = [];
let currentDigimon = '';

// Node Getters
const digiDisplay = document.getElementById('digi-main');

const searchBox = document.getElementById('mon-name');
const searchBttn = document.getElementById('search-bttn');

const addDigi = document.getElementById('add-bttn');
const deleteDigi = document.getElementById('delete-bttn');

const digiHolder = document.getElementById('digi-container');
const digiTeam = document.getElementById('digi-loads');

// Fetch Requests
async function loadDigi(userInput) {
    const response = await fetch(digiAPI);
    const data = await response.json();
    allDigimons = data;
    let digimonFound = false

    for (const digimon of allDigimons) {

        if (digimon.name.toUpperCase() === userInput.toUpperCase()) {
            const previewBox = document.createElement('div');
            const digiModel = document.createElement('img');
            const digiName = document.createElement('h1');
            const digiLevel = document.createElement('h3');

            digiName.innerText = digimon.name;
            digiModel.src = digimon.img;
            digiLevel.innerText = 'Level: ' + digimon.level;

            digiDisplay.innerHTML = '';

            digiDisplay.append(previewBox);

            previewBox.append(digiName);
            previewBox.append(digiModel);
            previewBox.append(digiLevel);

            currentDigimon = digimon;
            digimonFound = true;
            // console.log(currentDigimon);
        }
    }

    if (!digimonFound) {
        alert('We were unable to find that Digimon at this time or our server made an issue. :(')
    }
};

// Event Listeners

searchBttn.addEventListener('click', e => {
    loadDigi(searchBox.value);
    searchBox.value = '';
});

searchBox.addEventListener('keypress', function (event) {

    if (event.key === "Enter") {
        event.preventDefault();
        searchBttn.click();
    }

});

const addButton = () => addDigi.addEventListener('click', e => {
    addDigiToTeam(digimonStorage);
});

const deleteBttn = () => deleteDigi.addEventListener('click', e => {
    deleteDigiFromTeam();
})

document.addEventListener('DOMContentLoaded', function () {
    loadDigi();
    addButton();
    deleteBttn();
});
// dblclick EL 


// Event Handler 
function addDigiToTeam() {
    digimonStorage.push(currentDigimon);
    // console.log(currentDigimon);

    let member = digimonStorage[digimonStorage.length - 1]

    const digiModel = document.createElement('img');
    const digiName = document.createElement('h1');
    const digiLevel = document.createElement('h3');


    digiName.innerText = member.name;
    digiModel.src = member.img;
    digiLevel.innerText = member.level;

    const loadOne = document.getElementById('load1');
    const loadTwo = document.getElementById('load2');
    const loadThree = document.getElementById('load3');

    if (loadThree.innerHTML) {
        alert('Only Three Digimon Loads at a Time!')
    }

      switch ("") {
        case loadOne.innerHTML:
            loadOne.appendChild(digiName)
            loadOne.appendChild(digiModel)
            break

        case loadTwo.innerHTML:
            loadTwo.appendChild(digiName)
            loadTwo.appendChild(digiModel)
            break

        case loadThree.innerHTML:
            loadThree.appendChild(digiName)
            loadThree.appendChild(digiModel)
            break
        default:
    }
};

function deleteDigiFromTeam() {

    const loadOne = document.getElementById('load1');
    const loadTwo = document.getElementById('load2');
    const loadThree = document.getElementById('load3');

    console.log(loadThree.innerHTML)
    console.log(loadTwo.innerHTML)
    console.log(loadOne.innerHTML)

    if (loadThree.innerHTML) {
        loadThree.innerHTML = '';
        digimonStorage.pop();

    } else if (loadTwo.innerHTML) {
        loadTwo.innerHTML = '';
        digimonStorage.pop();

    } else if (loadOne.innerHTML) {
        loadOne.innerHTML = '';
        digimonStorage.pop();
    }
};