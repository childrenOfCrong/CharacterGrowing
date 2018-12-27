const Character = class {
  constructor(){
    this.satiety = 100;
    this.happy = 100;
    this.clean = 100;
    this.deerEl = document.querySelector('.deer')
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
  }
  sleep(){
  console.log('created');
  }
  poop(){
    const poopTimerID = setInterval(()=>{
      const shit = document.createElement('img')
      shit.setAttribute('src', '')
     document.body.appendChild(shit)
     this.decreasClean()
     this.timerIDList.push(poopTimerID)
   }, 10000) 
  }
  decreasClean(){
    this.clean -=50;
   const cleanEl = document.querySelector('#clean')
   cleanEl.style.width = `${this.clean}%`;
     if(this.clean<=0)this.die()
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
})



