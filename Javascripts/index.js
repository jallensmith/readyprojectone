// Global Variables
const digiAPI = `https://digimon-api.vercel.app/api/digimon`;
let allDigimon = [];
let currentDigimon = '';
let digimonStorage = [];
 
// Node Getters
const digiDisplay = document.getElementById('digi-main');
const digiHolder = document.getElementById('digi-container');
const digiTeam = document.getElementById('digi-loads');
const searchBox = document.getElementById('mon-name');
const addDigi = document.getElementById('add-bttn');
const deleteDigi = document.getElementById('delete-bttn');
const searchBttn = document.getElementById('search-bttn')
 
 
async function loadDigi(userInput) {
    const response = await fetch(digiAPI);
    const data = await response.json();
    allDigimons = data;
 
    for (const digimon of allDigimons) {
 
        if(digimon.name.toUpperCase() === userInput.toUpperCase()){
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
        }
    }
 
};
 
// document.addEventListener('DOMContentLoaded', function () {
//     loadDigi();
// });
 
searchBttn.addEventListener('click', e => {
    e.preventDefault
    //parameter below is what user has typed in searchbox
    loadDigi(searchBox.value);
    // form.rest();
})
 
addDigi.addEventListener('click', e => {
    e.preventDefault
    //parameter below is what user has typed in searchbox
    addDigiToTeam(currentDigimon);
    form.rest();
})
 
deleteDigi.addEventListener('click', e => {
    e.preventDefault
    console.log(digimonStorage);
    removeDigiFromTeam(digimonStorage.pop());
    // form.rest();
})
 
function removeDigiFromTeam(digimonToBeDeleted){
    console.log('hello world')
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
