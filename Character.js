const Character = class {
  constructor({name, imgUrl="./images/snow.svg"}){
    this.imgUrl = imgUrl;
    this.name = name;
    this._satiety = 100;
    this._fatigue = 100;
    this._cleanliness = 100;
    this._created();
  }
  _created(){
   console.log('created');
    this._render()
  }
  _render(){
    const char = document.createElement('img')
    console.log(this.imgUrl)
    char.setAttribute('src', this.imgUrl)
    char.setAttribute('class', 'deer')
    document.querySelector('.backgroundImg').appendChild(char)
  }
  move(){
  console.log('created');
  }
  eat(){
  console.log('created');
  }
  sleep(){
  console.log('created');
  }
  poop(){
    console.log('created');
  }
}
const createCharacter = ()=>{
  const char = new Character({name: 'name'})
  console.log('test',char)
 
}

console.dir(window)
console.log(window.$_created)
window.addEventListener('load', ()=>{
  const created = window.location.search.split('=')[1]
  console.log(created)
  if(created==='true'){
    createCharacter();
  }
})

