import logo from './logo.svg';
import ls from 'local-storage'
import './App.css';

const pokemonNames = ["#pokemon1Name", "#pokemon2Name", "#pokemon3Name", "#pokemon4Name", "#pokemon5Name", "#pokemon6Name"]
const pokemonImages = ["#pokemon1Url", "#pokemon2Url", "#pokemon3Url", "#pokemon4Url", "#pokemon5Url", "#pokemon6Url"]
let pokemonTeam = []
let pokemonUrls = []
let allPokemon = []

fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(res => res.json())
  .then(result => {
    result.results.forEach(x => {
      allPokemon.push(x.name)
    })
    allPokemon = allPokemon.sort()
    const tPokemon = allPokemon.filter(p => p[0] == 't')
    console.log(tPokemon)
    localStorage.setItem('allPokemon', allPokemon)    
  })
  .catch(error => console.error('error', error))


function MakeTeam(callback) {
  pokemonTeam = []
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
  .then(res => res.json())
  .then(result => {
    console.log(result)
    pokemonNames.forEach(name => {
      let x = Math.floor(Math.random() * 1154)
      pokemonTeam.push(result.results[x].name)
      let capitalPokemon = capitalizeFirstLetter(result.results[x].name)
      document.querySelector(`${name}`).innerText = capitalPokemon
    })
    callback()
  })
  .catch(error => console.error('error', error))
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function click(){
  MakeTeam(makeImages)
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

function makeImages(){
  getImage1()
  getImage2()
  getImage3()
  getImage4()
  getImage5()
  getImage6()
}



function App() {
  return (
    <div id='pageContainer' className="flex flex-col items-center mt-6">
      <h1 className='text-5xl font-bold underline'>Make a pokemon team at random</h1>
      <button className='makeTeam'
        onClick={click}
      >
        Make Team
      </button>
      
      <div id='pokemonWrapper' className='grid grid-cols-3 mt-6'>
        <div id="pokemon1" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon1Name">Pokemon Name</h2>
          <img id="pokemon1Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
        
        <div id="pokemon2" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon2Name">Pokemon Name</h2>
          <img id="pokemon2Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
        
        <div id="pokemon3" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon3Name">Pokemon Name</h2>
          <img id="pokemon3Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
        
        <div id="pokemon4" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon4Name">Pokemon Name</h2>
          <img id="pokemon4Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
        
        <div id="pokemon5" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon5Name">Pokemon Name</h2>
          <img id="pokemon5Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
        
        <div id="pokemon6" className='pokemonCard flex flex-col items-center'>
          <h2 id="pokemon6Name">Pokemon Name</h2>
          <img id="pokemon6Url" className ='' src="https://freepngimg.com/thumb/categories/493.png" alt='pokemon'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
