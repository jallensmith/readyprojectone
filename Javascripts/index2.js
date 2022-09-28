const digiAPI = `https://digimon-api.vercel.app/api/digimon`

let DigiStorage = [];
let currentDigimon = []; 

const form = document.getElementById('form')
const digiTeam = document.getElementById('digi-loads');
const addDigi = document.getElementById('add-bttn');
const button = document.createElement('button')

document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault()
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        fetchDigimon(event.target[0].value)
        form.reset()
    })
})

const fetchDigimon = (search) => {
    fetch(digiAPI)
        .then(res => res.json())
        .then(digimons => {
            digimons.forEach(digimon => {

                if (digimon.name.toUpperCase() === search.toUpperCase()) {
                    const digiDisplay = document.getElementById('digi-main')
                    digiDisplay.innerHTML = ''

                    const h2 = document.createElement('h2')
                    const img = document.createElement('img')
                    const h3 = document.createElement('h3')
                    const div = document.createElement('div')

                    h2.innerText = digimon.name
                    img.src = digimon.img
                    h3.innerText = `Level: ${digimon.level}`

                    div.append(h2, img, h3)
                    digiDisplay.append(div)
                }
            })
        })
}

addDigi.addEventListener('click', (event) => {
    event.preventDefault()
    
    console.log(newDigiStorage)
    
    newDigiStorage.forEach(digimon => {
        
        newDigiStorage.push(digimon)
        
        const digiModel = document.createElement('img');
        const digiName = document.createElement('h1');
        const digiLevel = document.createElement('h3');


        digiName.innerText = digimon.name;
        digiModel.src = digimon.img;
        digiLevel.innerText = digimon.level;
        button.innerText = 'Delete from Downloads'

        const loadOne = document.getElementById('load1');
        const loadTwo = document.getElementById('load2');
        const loadThree = document.getElementById('load3');
        loadOne.id = 1
        loadTwo.id = 2
        loadThree.id = 3

        if (loadThree.innerHTML) {
            alert('Only Three Digimon Loads at a Time!')
        }

        switch ("") {
            case loadOne.innerHTML:
                loadOne.append(digiName, digiModel, digiLevel, button)
                digiTeam.append(loadOne)
                break

            case loadTwo.innerHTML:
                // button2.innerText = 'Delete from Downloads'
                loadTwo.append(digiName, digiModel, digiLevel, button)
                digiTeam.append(loadTwo)
                break

            case loadThree.innerHTML:
                // button3.innerText = 'Delete from Downloads'
                loadThree.append(digiName, digiModel, digiLevel, button)
                digiTeam.append(loadThree)
                break
            default:
        }
    })

})

const button2 = document.createElement('button2')
const button3 = document.createElement('button2')


button.addEventListener('click', (event) => {
    event.preventDefault()

    newDigiStorage.map(digimon => {
        const loadOne = document.getElementById('load1');
        const loadTwo = document.getElementById('load2');
        const loadThree = document.getElementById('load3');

        if (loadThree.innerHTML) {
            loadThree.innerHTML = ''
            digimonStorage.slice(digimon, 1)

        } else if (loadTwo.innerHTML) {
            loadTwo.innerHTML = ''
            digimonStorage.slice(digimon, 1)

        } else if (loadOne.innerHTML) {
            loadOne.innerHTML = ''
            digimonStorage.slice(digimon, 1)
        }
    })
})

// button2.addEventListener('click', (event) => {
//     event.preventDefault()

//     newDigiStorage.filter(digimon => {
//         const loadOne = document.getElementById('load1');
//         const loadTwo = document.getElementById('load2');
//         const loadThree = document.getElementById('load3');

//         if (loadThree.innerHTML) {
//             loadThree.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)

//         } else if (loadTwo.innerHTML) {
//             loadTwo.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)

//         } else if (loadOne.innerHTML) {
//             loadOne.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)
//         }
//     })
// })

// button3.addEventListener('click', (event) => {
//     event.preventDefault()

//     newDigiStorage.filter(digimon => {
//         const loadOne = document.getElementById('load1');
//         const loadTwo = document.getElementById('load2');
//         const loadThree = document.getElementById('load3');

//         if (loadThree.innerHTML) {
//             loadThree.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)

//         } else if (loadTwo.innerHTML) {
//             loadTwo.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)

//         } else if (loadOne.innerHTML) {
//             loadOne.innerHTML = ''
//             // digimonStorage.slice(digimon, 1)
//         }
//     })
// })

// // function deleteDigi() {
// //     button.parentNode.innerHTML = ''
// //     digimonStorage.pop()
// // }

// // stop adding after three
// // delete chosen one