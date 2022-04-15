import {GenerateTama} from './modules/GenerateNewTama.js'


document.querySelector('#addTama').addEventListener('click', addTama);
document.querySelector('#reset').addEventListener('click', reset);

function addTama(){
    console.log("add");
    GenerateTama();
}

function reset(){
    location.reload();
}