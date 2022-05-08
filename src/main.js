import {GenerateTama} from './modules/GenerateNewTama.js'


document.querySelector('#addTama').addEventListener('click', addTama);
let name = document.querySelector('#nameOfTama');
let type = document.querySelector('#typeTama');
document.querySelector('#reset').addEventListener('click', reset);

function addTama(e){
    e.preventDefault();
    //console.log("add");
    console.log(type.value);
    GenerateTama(name.value, type.value);
    //console.log(name.value);
}

function reset(){
    location.reload();
}