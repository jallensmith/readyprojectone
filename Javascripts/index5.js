const digiAPI = `https://digimon-api.vercel.app/api/digimon`
const form = document.querySelector("form")
const mainDisplay = document.getElementById('digi-main');
const addDigi = document.getElementById('add-bttn');
const div = document.createElement('div')
let digiArray = []
let teamArray = []

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault()
    fetchDigimon()
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    fetchDigimon(event.target[0].value)
    console.log(event)
})

addDigi.addEventListener("click", () => {
    
})

const fetchDigimon = (search) => {
    fetch(digiAPI)
    .then(resp => resp.json())
    .then(allDigimons => {
        allDigimons.forEach(digimon => {
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
                addDigi.addEventListener("click", () => {
                    
                    teamArray.push(digimon)
                })
    }})
})}


