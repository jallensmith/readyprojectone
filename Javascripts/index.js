//**Global Variables *//
const baseURL = 'http://localhost:3000/animes'
let allTheAnimes = [];

//**Node Getters *//
const dropDown1 = document.getElementById ('inputGroupSelect01'); 
const dropDown2 = document.getElementById ('inputGroupSelect02'); 
const dropDown3 = document.getElementById ('inputGroupSelect03'); 

const questionTwo = document.getElementById ('question-block-b');
const questionThree = document.getElementById ('question-block-c');

const submitButton = document.getElementById('submit');

const displayBox = document.getElementById('display-panel');

//**Start-Up*//
questionTwo.style.display = 'none';  
questionThree.style.display = 'none';

//**Event Listeners  *//
// document.addEventListener('DOMContentLoaded', function(){
//     loadAnime();
// })

dropDown1.addEventListener('click', function(event){
    console.log(dropDown1.value)    
    if(! (dropDown1.value == '0')){
        questionTwo.style.display = 'block';    
    }
});

dropDown2.addEventListener('click', function(event){
    if(! (dropDown2.value == '0')){
        questionThree.style.display = 'block'; 
    }
});


document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault(); 
submitButton.addEventListener('click', function(event){
    if(! ((dropDown2.value == '0' || dropDown3.value =='0' || dropDown1.value == '0'))){   
        console.log("Good")        
        // animeToDisplay = allTheAnimes.value.filter("morning")
        // anime.style.display = "inject animeToDisplay";
        // filter through all the animes and display
    } else {
        alert("You must complete all three Questions To Get Your Anime!");
    }
});
getAnime(); 
});

 
//**Event Handlers *//
// const loadAnime = event => {
//     event.preventDefault()

//     animes.forEach(anime => {
        
//     });
// }

function showAnime(anime) { 
    const div = document.createElement('div');
    div.classList.add("card")
    const h2 = document.createElement('h2');
    h2.textContent = anime.title
    const h3 = document.createElement('h3');
    h3.textContent = anime.description

    const img = document.createElement('img')
    img.src = anime.poster
    img.classList.add("anime-avatar")

    // const button = document.createElement('button')
    // button.className.add("add-anime");
    // button.id = anime.id

    div.append(h2, h3, img)
    displayBox.append(div)
}; 


//**Requests *//
// const allTheAnimes = () => {
//     fetch(baseURL + "./animes")
//         .then(resp => resp.json())
//         .then(data => {
//             console.log('data', data)
//             anime = data
//         })
// }; 

// function getAnime() {
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(data =>{
//       console.log("data", data)
//     })
//   }; 
//         data.forEach(anime => showAnime(anime)))
//   }; 

async function getAnime(anime) {
    const response = await fetch(baseURL)
    const data = await response.json();
    allTheAnimes = data; 
}; 


 
//**Node Creators *//
//**MISC *//



// unused Code
// const toggleVisiblity = () => {
//     if(dropDown2().style.display === 'block')
//         dropDown2().style.displau === 'none';
//     else 
//         dropDown1().style.display = 'block'
// }

// toggleVisiblity(); 

// dropDown1.addEventListener('click', function handleClick(){
//     console.log("hello world")
// }); 