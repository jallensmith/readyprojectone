const baseURL = 'https://digimon-api.vercel.app/api/digimon'
let digiTeam = []

const mainContainer = document.getElementById('digi-main')
const teamContainer = document.getElementById('digi-container')
const loadOne = document.getElementById('load1');
const loadTwo = document.getElementById('load2');
const loadThree = document.getElementById('load3');

const addBttn = document.getElementById('add-bttn')
const form = document.querySelector('form')

const logo = document.getElementById('logo')
const div = document.createElement('div')
const h2 = document.createElement('h2')
const img = document.createElement('img')
const p = document.createElement('p')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let userInput = event.target[0].value
    renderDigi(userInput)
    form.reset()
})

addBttn.addEventListener('click', () => {

    for (const member of digiTeam) {
        let member = digiTeam[digiTeam.length - 1]

        const card = document.createElement('div')

        const teamH2 = document.createElement('h2')
        const teamImg = document.createElement('img')
        const teamDescription = document.createElement('p')
        const deleteButton = document.createElement('button')

        deleteButton.innerText = 'Delete from Team'
        teamImg.src = member.img
        teamH2.innerText = member.name
        teamH2.style.color = 'red'
        teamDescription.innerText = member.level

        deleteButton.addEventListener('click', () => {
            if (loadOne.innerHTML) {
                return loadOne.innerHTML = ''
            } else if (loadTwo.innerHTML) {
                return loadTwo.innerHTML = ''
            } else if (loadThree.innerHTML) {
                return loadThree.innerHTML = ''
            }
        })

        card.append(teamH2, teamImg, teamDescription, deleteButton)

        if (!loadOne.innerHTML) {
            return loadOne.append(card)
        } else if (!loadTwo.innerHTML) {
            return loadTwo.append(card)
        } else if (!loadThree.innerHTML) {
            return loadThree.append(card)
        }

    }
})

logo.addEventListener('dblclick', () => {
    const themeSong = new Audio('./Music/theme_Song.mp3')
    themeSong.play()
})

const renderDigi = (search) => {
    fetch(baseURL)
        .then(resp => resp.json())
        .then(allDigimons => allDigimons.forEach(digimon => {
            if (digimon.name.toUpperCase() === search.toUpperCase()) {
                digiTeam.push(digimon)
                mainContainer.innerHTML = ""

                displayMon(digimon)
                div.append(h2, img, p)

                img.addEventListener('mouseover', () => {
                    img.style.height = '500px'
                    img.style.width = '500px'
                })

                mainContainer.append(div)
            }

        }))
}

const displayMon = (digimon) => {
    h2.innerText = digimon.name
    h2.style.color = 'yellow'
    img.src = digimon.img
    p.innerText = `Level: ${digimon.level}`
}
