// Global Variables
const digiAPI = `https://digimon-api.vercel.app/api/digimon`;
let allDigimons = [];
let currentDigimon = '';
let digimonStorage = [];

// Node Getters
const digiDisplay = document.getElementById('digi-main');
const digiHolder = document.getElementById('digi-container');
const digiTeam = document.getElementById('digi-loads');
const searchBox = document.getElementById('mon-name');
const addDigi = document.getElementById('add-bttn');
const deleteDigi = document.getElementById('delete-bttn');
const searchBttn = document.getElementById('search-bttn');

async function loadDigi(userInput) {
    const response = await fetch(digiAPI);
    const data = await response.json();
    allDigimons = data;

    for (const digimon of allDigimons) {

        if (digimon.name.toUpperCase() === userInput.toUpperCase()) {
            console.log(digimon);
            const previewBox = document.createElement('div');
            const digiModel = document.createElement('img');
            const digiName = document.createElement('h1');
            const digiLevel = document.createElement('h3');

            digiName.innerText = digimon.name;
            digiModel.src = digimon.img;
            digiLevel.innerText = digimon.level;

            digiDisplay.append(previewBox);

            previewBox.append(digiName);
            // document.createElement('br');
            previewBox.append(digiModel);
            // document.createElement('br');
            previewBox.append(digiLevel);

            console.log(digimon.name);
            console.log(digimon.level);

            currentDigimon = digimon;
            digimonStorage.push(digimon.name);
        } else { 
            searchErrorDisplay = () => {
                const previewBox = document.createElement('div');
                const error = document.getElementById('nonlocate-message')
                error.display.append(previewBox); 
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    loadDigi();
});

searchBttn.addEventListener('click', e => {
    loadDigi(searchBox.value);
    // How do clear input field and clear DIV after form reset?
    searchBttn.addEventListener('submit', function(){
        loadDigi(digimon.name)
        form.reset()
    })
})

addDigi.addEventListener('click', e => {
    addDigiToTeam(currentDigimon);

})

deleteDigi.addEventListener('click', e => {
    // console.log(digimonStorage);
    removeDigiFromTeam(digimonStorage.pop());
})


function removeDigiFromTeam(digimonToBeDeleted) {
    console.log(digimonToBeDeleted)

    document.getElementById(digimonToBeDeleted.toUpperCase()).remove();
};

function addDigiToTeam(digimonToBeAdded) {
    const previewBox = document.createElement('div');
    previewBox.id = digimonToBeAdded.name.toUpperCase();

    const digiModel = document.createElement('img');
    const digiName = document.createElement('h1');
    const digiLevel = document.createElement('h3');

    digiName.innerText = digimonToBeAdded.name;
    digiModel.src = digimonToBeAdded.img;
    digiLevel.innerText = digimonToBeAdded.level;

    digiHolder.append(previewBox);

    previewBox.append(digiName);
    // document.createElement('br');
    previewBox.append(digiModel);
    // document.createElement('br');
    previewBox.append(digiLevel);
    previewBox.append(deleteDigi);
};

