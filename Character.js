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
      opacity -=0.003;
      if(opacity>0){
        requestAnimationFrame(eatingBob);
      }
      else this.setFullSeti();
    }
    eatingBob();
  }
  sleep(){
    console.log('created');
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
        opacity -=0.01;
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
    console.log('die')
  }

}

const eatBtn = document.querySelector('#eat')

window.addEventListener('load', ()=>{
  const deer = new Character();
  eatBtn.addEventListener('click', ()=>deer.eat())
  const Broom = document.querySelector('#cleanSheet');
  Broom.addEventListener('click', () => {
    deer.cleaningStatus = true;
    let html = document.querySelector('html')
    html.style.cursor = "url('./images/cursor.cur'), auto"
  })
})



