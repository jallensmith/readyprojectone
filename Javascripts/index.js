// Global Variables
const digiAPI = `https://digimon-api.vercel.app/api/digimon`;
let allDigimons = [];
let digimonStorage = [];
// let currentDigimon = '';

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
    
    for (const digimon of allDigimons) {
        
        if (digimon.name.toUpperCase() === userInput.toUpperCase()) {
            // console.log(digimon);
            const previewBox = document.createElement('div');
            const digiModel = document.createElement('img');
            const digiName = document.createElement('h1');
            const digiLevel = document.createElement('h3');
            
            digiName.innerText = digimon.name;
            digiModel.src = digimon.img;
            digiLevel.innerText = digimon.level;
            
            digiDisplay.innerHTML = '';

            digiDisplay.append(previewBox);
            
            previewBox.append(digiName);
            // document.createElement('br');
            previewBox.append(digiModel);
            // document.createElement('br');
            previewBox.append(digiLevel);
            
            // console.log(digimon.name);
            // console.log(digimon.level);
            
            // currentDigimon = digimon;
            digimonStorage.push(digimon);
            console.log(digimonStorage);
        } 
    }
}
// };

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    loadDigi();
    addButton(); 
    deleteBttn(); 
});

searchBttn.addEventListener('click', e => {
    loadDigi(searchBox.value);
    searchBox.value = '';
    document.addEventListener('submit', function(){
        loadDigi(digimon.name)
        form.reset()
    })
}); 

const addButton = () => addDigi.addEventListener('click', e => {
    // const currentDigimon = digimonStorage.length-1
    // addDigiToTeam(currentDigimon);
    // console.log(currentDigimon)
    addDigiToTeam(digimonStorage);
    console.log(digimonStorage);
});

const deleteBttn = () =>deleteDigi.addEventListener('click', e => { 
    deleteDigiFromTeam();
    console.log(digimonStorage);  
})


// Event Handler 
function addDigiToTeam(){
    let member = digimonStorage[digimonStorage.length-1]
    
    const digiModel = document.createElement('img');
    const digiName = document.createElement('h1');
    const digiLevel = document.createElement('h3');
    const removeBtn = document.createElement('button');
    
    // removeBtn.addEventListener("click", (e) =>removeMember(e.target))
    // removeBtn.innerText = "Delete from Memory"
    
    digiName.innerText = member.name;
    digiModel.src = member.img;
    digiLevel.innerText = member.level;
    
    const loadOne = document.getElementById('load1');
    const loadTwo = document.getElementById('load2');
    const loadThree = document.getElementById('load3');
    
    switch(""){
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

function deleteDigiFromTeam(){

const loadOne = document.getElementById('load1');
const loadTwo = document.getElementById('load2');
const loadThree = document.getElementById('load3');   

console.log(loadThree.innerHTML)
console.log(loadTwo.innerHTML)
console.log(loadOne.innerHTML)

if (loadThree.innerHTML){ 
    loadThree.replaceChildren();
    digimonStorage.pop();
    console.log('check three')

} else if(loadTwo.innerHTML ){ 
    loadTwo.replaceChildren();
    digimonStorage.pop();
    console.log('check three')

} else if(loadOne.innerHTML ){ 
    loadOne.replaceChildren();
    digimonStorage.pop();
    console.log('check three')
}

    // switch(""){
    //     case loadThree.innerHTML:
    //         loadThree.innerHTML = " "
    //         digimonStorage.pop();
    //         break
        
    //     case loadTwo.innerHTML:
    //         loadTwo.innerHTML = " "
    //         digimonStorage.pop();
    //         break
        
    //     case loadOne.innerHTML:
    //             loadOne.innerHTML = " "
    //             digimonStorage.pop();
    //             break
    //     default:
    // } 
};

function showError(){

};

function limitMessage(){

}; 


// function addDigiToTeam(digimonToBeAdded) {
//     loadDigi(digimonToBeAdded);
    
//     digimonStorage.id = digimonToBeAdded;
    
//     const previewBox = document.createElement('div');
    
//     const digiModel = document.createElement('img');
//     const digiName = document.createElement('h1');
//     const digiLevel = document.createElement('h3');

//     digiName.innerText = digimonToBeAdded.name;
//     digiModel.src = digimonToBeAdded.img;
//     digiLevel.innerText = digimonToBeAdded.level;

//     digiHolder.append(previewBox);

//     previewBox.append(digiName);
//     previewBox.append(digiModel);
//     previewBox.append(digiLevel);
//     previewBox.append(deleteDigi);
// };

// function removeDigiFromTeam(digimonToBeDeleted) {
//     console.log(digimonToBeDeleted)
//     document.getElementById(digimonToBeDeleted.toUpperCase()).remove();
// };