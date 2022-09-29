const digiAPI = `https://digimon-api.vercel.app/api/digimon`;

const mainDisplay = document.getElementById('digi-main');
const addDigiBttn = document.getElementById('add-bttn');

const digiTeamDisplay = document.getElementById('digi-container');
const div = document.createElement('div')
const loadOne = document.getElementById('load1');
const loadTwo = document.getElementById('load2');
const loadThree = document.getElementById('load3'); 

const fetchDigimon = (search) => {
    fetch(digiAPI)
        .then(res => res.json())
        .then(digimons => {
            
            digimons.forEach(digimon => {
                if (digimon.name.toUpperCase() === search.toUpperCase()) {
                    mainDisplay.innerHTML = ''
                    div.innerHTML = ''
                    
                    const h2 = document.createElement('h2')
                    const img = document.createElement('img')
                    const h3 = document.createElement('h3')

                    h2.innerText = digimon.name
                    img.src = digimon.img
                    h3.innerText = `Level: ${digimon.level}`

                    div.append(h2, img, h3)
                    mainDisplay.append(div)

                    addDigiBttn.addEventListener('click', () => {
                        switch ("") {
                                    case loadOne.innerHTML:
                                        loadOne.appendChild(div)
                                        break
                            
                                    case loadTwo.innerHTML:
                                        loadTwo.appendChild(div)
                                        break
                            
                                    case loadThree.innerHTML:
                                        loadThree.appendChild(div)
                                        break
                                    default:
                                }
                    })                
                } 
            })
        })
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    fetchDigimon(event.target[0].value)
    form.reset()
})

// function addDigiData() {
//     if (loadThree.innerHTML) {
//         alert('Only Three Digimon Loads at a Time!')
//     }

//     switch ("") {
//         case loadOne.innerHTML:
//             loadOne.appendChild(div)
//             break

//         case loadTwo.innerHTML:
//             loadTwo.appendChild(div)
//             break

//         case loadThree.innerHTML:
//             loadThree.appendChild(div)
//             break
//         default:
//     }
// }



