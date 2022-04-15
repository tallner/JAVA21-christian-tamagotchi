import {GenerateTama} from './modules/GenerateNewTama.js'

document.querySelector('#addTama').addEventListener('click', addTama);

function addTama(){
    GenerateTama();
}