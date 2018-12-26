const imgUrlList = ['./images/bg01.jpg','./images/bg02.png','./images/bg03.png','./images/bg04.jpg','./images/bg05.png']
  const backgroundImgEl = document.querySelector('.backgroundImg')
  
  const getRandomIdx = num=>Math.floor(num*Math.random())

  backgroundImgEl.setAttribute('src',imgUrlList[getRandomIdx(imgUrlList.length)]); 