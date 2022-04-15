import {Tamagotchi} from './Tamagotchi.js';
let tamaIndex = 0;

export function GenerateTama(){
    

    console.log(tamaIndex);
    let sw = [];
    sw[tamaIndex] = new Tamagotchi(tamaIndex);

    const div = document.createElement('div');
    const status = document.createElement('h1');
    const happiness = document.createElement('h2');
    const hunger = document.createElement('h2');
    const gameTimer = document.createElement('p');
    const happyTimer = document.createElement('p');
    const hungerTimer = document.createElement('p');
    const btnStart = document.createElement('button');
    const btnPlay = document.createElement('button');
    const btnFeed = document.createElement('button');
    const img = document.createElement('img');

    div.style.border = "thick solid #0000FF";

    status.id = "life-status-"+tamaIndex;
    status.innerText = "TamaStatus";
    
    happiness.id = "life-status-"+tamaIndex;
    happiness.innerText = "Happiness";

    hunger.id = "life-status-"+tamaIndex;
    hunger.innerText = "Hunger";


    gameTimer.id = "start-timer-"+tamaIndex;
    gameTimer.innerText = "0";

    happyTimer.id = "happiness-value-"+tamaIndex;
    happyTimer.innerText = "5";

    hungerTimer.id = "hunger-value-"+tamaIndex;
    hungerTimer.innerText = "5";


    btnStart.id = "start-"+tamaIndex;
    btnStart.innerText = "Start";

    btnPlay.id = "play-"+tamaIndex;
    btnPlay.innerText = "Play";

    btnFeed.id = "feed-"+tamaIndex
    btnFeed.innerText = "Feed";

    img.id = "tama-"+tamaIndex;

    div.append(status,gameTimer,btnStart,happiness,happyTimer,btnPlay,hunger,hungerTimer,btnFeed,img);

    document.body.append(div);

    

    console.log(sw);

    for (let index = 0; index < sw.length; index++) {
        document.querySelector('#start-'+index).addEventListener('click', playTimer);
        document.querySelector('#play-'+index).addEventListener('click', play);
        document.querySelector('#feed-'+index).addEventListener('click', feed);

        function playTimer(){
            if(sw[index].isRunning()){
                sw[index].stop();
            }
            else{
                sw[index].start();
            }
        }
        
        function play(){
            sw[index].play()
        }
        
        function feed(){
            sw[index].feed()
        }
        
        
    }

    

    tamaIndex++;
    
}

