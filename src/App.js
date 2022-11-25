import { title, question } from './assets';
import './App.css';

const headerArray = ["#pokemon1Name", "#pokemon2Name", "#pokemon3Name", "#pokemon4Name", "#pokemon5Name", "#pokemon6Name"]
const pokemonImages = ["#pokemon1Url", "#pokemon2Url", "#pokemon3Url", "#pokemon4Url", "#pokemon5Url", "#pokemon6Url"]
let pokemonTeam = []
let allPokemon = []


fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(res => res.json())
  .then(result => {
    result.results.forEach(x => {
      allPokemon.push(x.name)
    })
    allPokemon = allPokemon.sort()
    localStorage.setItem('allPokemon', allPokemon)    
  })
  .catch(error => console.error('error', error))


function getUserInput(){
  let i = document.querySelector('#nameInput').value
  return i;
}

function convertUserInput(input){
  input = input.split(' ').join('')
  input = input.toLowerCase();
  input = input.slice(0, 6)
  input = input.split('')
  return input
}

function makeTeamFromName(){
  pokemonTeam = []
  
  let input = getUserInput()
  input = convertUserInput(input)

  input.forEach(letter => {
    const filteredPokemon = allPokemon.filter(p => p[0] == letter)
    let x = Math.floor(Math.random() * filteredPokemon.length)
    pokemonTeam.push(filteredPokemon[x])
  })
  for(let i = 0; i<6; i++){
    let pokemonName = capitalizeFirstLetter(pokemonTeam[i])
    document.querySelector(`${headerArray[i]}`).innerText = pokemonName
  }
  makeImages()
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function click(){
  if (validateInput() == true) makeTeamFromName()
}

function validateInput() {
  if (document.querySelector('#nameInput').value == "") {
      alert("Enter a name");
      document.querySelector('#nameInput').focus();
      return false;
  }
  if (!/^[a-zA-Z\s]*$/g.test(document.querySelector('#nameInput').value)) {
      alert("Invalid characters. Your name input should only have spaces and letters.");
      document.querySelector('#nameInput').focus();
      return false;
  }
  if ((document.querySelector('#nameInput').value.length < 6)) {
    alert("Name is too short. Need a minimum of six letters");
    document.querySelector('#nameInput').focus();
    return false;
}
  return true;
}


function App() {
  return (
    <div id='pageContainer' className="flex flex-col items-center mt-6">
      <div>
        <img src={title}></img>
      </div>
      
      <div className='flex flex-col justify-center align-center p-4 bg-red-500 mt-12 rounded-xl'>
        <div id='nameForm' className='flex flex-col justify-center align-center bg-red-500' onSubmit="return false;">
          <label className='bg-red-500 text-white'>Enter your name:</label>
          <input id='nameInput' type='text' 
          className='bg-white input[type=text] rounded-md border-gray-300 shadow-sm pl-3 py-2
          focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'>
          </input>
        </div>
      </div>
      
      <button className='makeTeam bg-red-500 drop-shadow-xl hoverBiggen'
        onClick={click}
      >
        Make Team
      </button>
      
      <div id='pokemonWrapper' className='grid grid-cols-3 m-6 gap-6'>
        <div id="pokemon1" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon1Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
          <img id="pokemon1Url" className ='p-2 drop-shadow-xl' src={question} alt='pokemon'></img>
          <p id="pokemon1Desc" className=''></p>  
        </div>
        
        <div id="pokemon2" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon2Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
          <img id="pokemon2Url" className ='p-2' src={question} alt='pokemon'></img>
          <p id="pokemon2Desc" className=''></p>  
        </div>
        
        <div id="pokemon3" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon3Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
          <img id="pokemon3Url" className ='p-2 drop-shadow-xl' src={question} alt='pokemon'></img>
          <p id="pokemon3Desc" className=''></p>  
        </div>
        
        <div id="pokemon4" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon4Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
          <img id="pokemon4Url" className ='p-2 drop-shadow-xl' src={question} alt='pokemon'></img>
          <p id="pokemon4Desc" className=''></p>  
        </div>
        
        <div id="pokemon5" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon5Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
          <img id="pokemon5Url" className ='p-2 drop-shadow-xl' src={question} alt='pokemon'></img>
          <p id="pokemon5Desc" className=''></p>  
        </div>
        
        <div id="pokemon6" className='pokemonCard flex flex-col items-center bg-white rounded-2xl drop-shadow-md hoverBiggen'>
          <div className='bg-red-500 w-full flex text-center justify-center text-white rounded-t-2xl'>
            <h2 id="pokemon6Name" className='px-2'>Who's That Pokemon?</h2>
          </div>
            <img id="pokemon6Url" className ='p-2 drop-shadow-xl' src={question} alt='pokemon'></img>
            <p id="pokemon6Desc" className=''></p>        
          </div>
        </div>

    </div>
  );
}

function makeImages(){
  getImage1()
  getImage2()
  getImage3()
  getImage4()
  getImage5()
  getImage6()
}

function getImage1(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[0].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon1Url').src = result.sprites.front_default
  })
}

function getImage2(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[1].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon2Url').src = result.sprites.front_default
  })
}

function getImage3(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[2].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon3Url').src = result.sprites.front_default
  })
}

function getImage4(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[3].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon4Url').src = result.sprites.front_default
  })
}

function getImage5(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[4].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon5Url').src = result.sprites.front_default
  })
}

function getImage6(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonTeam[5].toLowerCase()}`)
  .then(res => res.json())
  .then(result => {
    document.querySelector('#pokemon6Url').src = result.sprites.front_default
  })
}

export default App;
