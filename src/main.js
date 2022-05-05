import {GenerateTama} from './modules/GenerateNewTama.js'


document.querySelector('#addTama').addEventListener('click', addTama);
let name = document.querySelector('#nameOfTama');
document.querySelector('#reset').addEventListener('click', reset);

function addTama(e){
    e.preventDefault();
    console.log("add");
    GenerateTama(name.value);
    //console.log(name.value);
}

function reset(){
    location.reload();
}