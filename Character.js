const Character = class {
  constructor(){
    this.satiety = 100;
    this.happy = 100;
    this.clean = 100;
    this.deerEl = document.querySelector('.deer')
    this.cleaningStatus = false;
    this.startTimer();
    this.move();
    this.timerIDList = [];
  }
  decreaseSatiety(){
  
    const satisEl = document.querySelector('#satiety')
    const satisTimerID =setInterval(()=>{
      this.satiety -=30;
        const staisfies = this.satiety < 0 ? 0 : this.satiety
      satisEl.style.width = `${staisfies}%`;
       if(staisfies<=0) this.die()
       this.timerIDList.push(satisTimerID)
   }, 10000) 
   
  }
  decreaseHappy(){
    const happyEl = document.querySelector('#happy')
     const happyTimerID= setInterval(()=>{
      this.happy -= 2;
      const happiness = this.happy < 0 ? 0 : this.happy
      happyEl.style.width = `${happiness}%`;
      if(happiness<=0) this.die()
       this.timerIDList.push(happyTimerID)
   }, 1000) 
  
  }
  startTimer(){
    
    this.decreaseSatiety();
    this.decreaseHappy();
    this.poop();
  }
  move(){
    console.log(this.deerEl)
    this.deerEl.classList.add('move')
    console.log('created');
  }
  eat(){
    console.log('eat');
    const bob = document.createElement('img')
    bob.setAttribute('src', './images/eat.png')
    bob.setAttribute('class', 'bob')
    document.body.appendChild(bob)
    bob.style.right = `${Math.random()*10}rem`;
    this.eating(bob)
  }
  setFullSeti(){
    console.log('full')
    this.satiety = 100;
    const satisEl = document.querySelector('#satiety');
    satisEl.style.width = `${this.satiety}%`;
  }
  eating(bob){
    let opacity = 1;
    const eatingBob = ()=>{
      bob.style.opacity = opacity;
      opacity -=0.03;
      if(opacity>0){
        requestAnimationFrame(eatingBob);
      }
      else this.setFullSeti();
    }
    eatingBob();
  }
  sleep(){
    console.log('created');
    playgroundCopy.classList.add("sleep");

    setTimeout(()=>{
      this.happy = 100;
      happyEl.style.width = `${this.happy}%`;
      playgroundCopy.classList.remove("sleep");
    }, 2000); 
  }
  poop(){
    const cleanSheet = document.querySelector('#cleanSheet');
    const poopTimerID = setInterval(()=>{
      this.makeShit();
      this.decreaseClean();
      this.timerIDList.push(poopTimerID);
    }, 10000) 
  }
  makeShit(){
    const shit = document.createElement('img');
    const right = Math.random() * 10;
    shit.setAttribute('src', './images/shit.png');
    shit.setAttribute('class', 'shit');
    shit.setAttribute('style', `right: ${right}rem`);
    document.body.appendChild(shit);
    shit.addEventListener("click",() => this.cleaning(shit));
  }
  decreaseClean(){
    this.clean -=50;
    const cleanEl = document.querySelector('#clean')
    cleanEl.style.width = `${this.clean}%`;
    if(this.clean<=0)this.die()
  }
  setFullClean(){
    this.clean = 100;
    const cleanEl = document.querySelector('#clean');
    cleanEl.style.width = `${this.clean}%`;
  }
  cleaning(shit){
    if(this.cleaningStatus){
      let opacity = 1;
      const cleaningShit = ()=>{
        shit.style.opacity = opacity;
        opacity -=0.1;
        if(opacity>0){
          requestAnimationFrame(cleaningShit);
        }
        else this.setFullClean();
      }
      this.cleaningStatus = false;
      let html = document.querySelector('html')
      html.style.cursor = "default";
      cleaningShit();
      
    }
  }
  die(){
    this.timerIDList.forEach(timerId=>clearInterval(timerId))
    document.querySelector('html').innerHTML = "Game over";
    document.querySelector('html').style.fontSize = "3rem";
    document.querySelector('html').style.fontWeight = "bold";
    document.querySelector('html').style.color = "#fff";
    document.querySelector('html').style.backgroundColor = "#000";
    document.querySelector('html').style.width = "20rem";
    document.querySelector('html').style.height = "25rem";
    document.querySelector('html').style.lineHeight = "25rem";
    document.querySelector('html').style.textAlign = "center";

  }

}

const eatBtn = document.querySelector('#eat')
const playgroundCopy = document.querySelector(".playgroundCopy");
const happyEl = document.querySelector('#happy');
window.addEventListener('load', ()=>{
  const deer = new Character();
  const sleepBtn = document.querySelector("#sleep");
  
  eatBtn.addEventListener('click', ()=>deer.eat())
  const Broom = document.querySelector('#cleanSheet');
  Broom.addEventListener('click', () => {
    deer.cleaningStatus = true;
    let html = document.querySelector('html')
    html.style.cursor = "url('./images/cursor.cur'), auto"
  })
  sleepBtn.addEventListener("click", () => deer.sleep());
  
});

