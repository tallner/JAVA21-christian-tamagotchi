export class Tamagotchi{
    #time = 0;
    #running = false;
    #intervalIDgame;
    #intervalIDhappy;
    #intervalIDhungry;
    #happiness;
    #hunger;

    constructor(tamaIndex,type){
        this.#happiness = 5;
        this.#hunger = 5;
        this.tamaIndex = tamaIndex;
        this.type = type;
        //this.#setPicture(this.#happiness,this.#hunger,this.type);
    }

    #setPicture(happiness,hunger,type){
        const img = document.querySelector('#tama-'+this.tamaIndex);

        let tamaLink = '../img/tamaHappy'+type+'.png';

        if((happiness<=0)||(hunger>=10)){
            tamaLink = '../img/tamaDead'+type+'.png';
        } 
        else if ((happiness<5)||(hunger>5)){
            tamaLink = '../img/tamaSad'+type+'.png';
        }
        //tamaImgUrl = new URL(tamaLink, import.meta.url);
        //img.src = tamaImgUrl.href;
        img.src = new URL(tamaLink, import.meta.url);
    }

    play(){
        (this.#happiness>=10) ? 10 : this.#happiness++;
        this.#setPicture(this.#happiness,this.#hunger,this.type);
        document.querySelector('#happiness-value-'+this.tamaIndex).innerText = this.#happiness;
    }
    feed(){
        (this.#hunger<=0) ? 0 : this.#hunger--;
        this.#setPicture(this.#happiness,this.#hunger,this.type);
        document.querySelector('#hunger-value-'+this.tamaIndex).innerText = this.#hunger;
    }
    #dead(){
        document.querySelector('#life-status-'+this.tamaIndex).innerText = 'Dead';
        this.stop();
    }

    isRunning(){
        return this.#running;
    }
    start(){
        this.#time = 0;
        this.#happiness = 5;
        this.#hunger = 5;

        this.#setPicture(this.#happiness,this.#hunger,this.type);

        document.querySelector('#start-'+this.tamaIndex).innerText = 'Stop';

        document.querySelector('#life-status-'+this.tamaIndex).innerText = 'Still alive';

        document.querySelector('#start-timer-'+this.tamaIndex).innerText = this.#time;
        document.querySelector('#happiness-value-'+this.tamaIndex).innerText = this.#happiness;
        document.querySelector('#hunger-value-'+this.tamaIndex).innerText = this.#hunger;

        this.#intervalIDgame = setInterval(this.#updateGameTimer.bind(this), 1000);
        this.#intervalIDhappy = setInterval(this.#updateHappyTimer.bind(this), 5000);
        this.#intervalIDhungry = setInterval(this.#updateHungerTimer.bind(this), 5000);
        
        this.#running = true;
    }
    stop(){
        clearInterval(this.#intervalIDgame);
        clearInterval(this.#intervalIDhappy);
        clearInterval(this.#intervalIDhungry);
        this.#running = false;
        document.querySelector('#start-'+this.tamaIndex).innerText = 'Start';
    }

    #updateGameTimer(){
        this.#time++;
        document.querySelector('#start-timer-'+this.tamaIndex).innerText = this.#time;

        //check life status every second
        if ((this.#happiness<=0)||(this.#hunger>=10)){
            this.#setPicture(this.#happiness,this.#hunger,this.type);
            this.#dead();
        }
    }
    #updateHappyTimer(){
        (this.#happiness<=0) ? 0 : this.#happiness--;
        this.#setPicture(this.#happiness,this.#hunger,this.type);
        document.querySelector('#happiness-value-'+this.tamaIndex).innerText = this.#happiness;
    }
    #updateHungerTimer(){
        (this.#hunger>=10) ? 10 : this.#hunger++;
        this.#setPicture(this.#happiness,this.#hunger,this.type);
        document.querySelector('#hunger-value-'+this.tamaIndex).innerText = this.#hunger;
    }
}