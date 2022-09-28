// Global Variables
const digiAPI = `https://digimon-api.vercel.app/api/digimon`;
let currentTeam = []

// Node Getters
const digiSearchContainer = document.getElementById('digi-main')
const digiTeam = document.getElementById('digi-container')
const digiForm = document.querySelector("form")

const loadOne = document.getElementById('load1')
const loadTwo = document.getElementById('load2')
const loadThree = document.getElementById('load3')

const addDigi = document.getElementById('add-bttn');
const newDiv = document.createElement('div')
const div = document.createElement('div')

const button = document.createElement('button')
button.innerText = 'Delete Download'

// Fetch Requests
form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchDigi(event.target[0].value)
    form.reset()
})

const fetchDigi = (search) => {
    fetch(digiAPI)
    .then(response => response.json())
    .then(allDigimonsArray => {
        
        allDigimonsArray.forEach(digimon => {
            
            if(digimon.name.toUpperCase() === search.toUpperCase()) {
                digiSearchContainer.innerHTML = ''
                div.innerHTML = ''

                const h2 = document.createElement('h2')
                const img = document.createElement('img')
                const h3 = document.createElement('h3')
                
                h2.innerText = digimon.name
                img.src = digimon.img
                h3.innerText = `Level: ${digimon.level}`
                
                div.append(h2, img, h3)
                digiSearchContainer.appendChild(div)               
                newDiv.append(h2, img, h3)
            }            
            addDigi.addEventListener('click', () => {
                if (!loadOne.innerHTML) {
                    loadOne.append(newDiv)
                    
        
                } else if (!loadTwo.innerHTML) {
                    loadTwo.append(newDiv)
                    
        
                } else if (!loadThree.innerHTML) {
                    loadThree.append(newDiv)
                    
                }
                
                
                
                
                // if (loadThree.innerHTML) {
                //     alert('Only Three Digimon Loads at a Time!')
                // }
            
                // switch ("") {
                //     case loadOne.innerHTML:
                //         loadOne.append(newDiv, button)
                //         digiTeam.append(loadOne)
                //         break
            
                //     case loadTwo.innerHTML:                   
                //         loadTwo.append(newDiv, button)
                //         digiTeam.append(loadTwo)
                //         break
            
                //     case loadThree.innerHTML:
                //         loadThree.append(newDiv, button)
                //         digiTeam.append(loadThree)
                //         break
                //     default:
                // }
            })
        })
        
    })
}


button.addEventListener('click', () => {
    if(loadOne.innerHTML) {
        loadOne.innerHTML = ''
    } else if (loadTwo.innerHTML){
        loadTwo.innerHTML = ''
    } else if (loadThree.innerHTML) {
        loadThree.innerHTML = ''
    }
})

// Event Listeners


