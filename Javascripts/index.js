//**Global Variables *//
// const baseURL = json link
// an emtpy array possibly

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
// const displayBox = callToAPItoGetJSON

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

submitButton.addEventListener('click', function(event){
    if(! ((dropDown2.value == '0' || dropDown3.value =='0' || dropDown1.value == '0'))){   
        console.log("Good") 

        allTheAnimes = fetch("localhost:3000")
        animeToDisplay = allTheAnimes.value.filter("morning")
        anime.style.display = "inject animeToDisplay";
        // filter through all the animes and display
    } else {
        alert("You must complete all three Questions To Get Your Anime!");
    }
})    


// dropDown1.addEventListener('click', function handleClick(){
//     console.log("hello world")
// }); 
//**Event Handlers *//
//**Requests *//
//**Node Creators *//
//**MISC *//
// const toggleVisiblity = () => {
//     if(dropDown2().style.display === 'block')
//         dropDown2().style.displau === 'none';
//     else 
//         dropDown1().style.display = 'block'
// }

// toggleVisiblity(); 


