
  // chrome.runtime.onMessage.addListener(
  //   function(message, callback) {
  //     if (message == “runContentScript”){
  //       chrome.tabs.executeScript({
  //         file: 'contentScript.js'
  //       });
  //     }
  //  });


// chrome.
window.addEventListener('load', (e)=>{
  console.log('loaded')
	const charBtn = document.getElementById('choseCharacter')
  // charBtn.addEventListener('click', (e)=>{
  //    window.open(`default.html?char=${true}`);
	// 	});    
 charBtn.addEventListener('click', (e)=>{
	  const val = 'character'
    chrome.storage.sync.set({key: val}, function() {
			console.log('Value is set to ' + val);
        });
		});  

 

})

 
$('.tabular.menu .item').tab();


