//files will be loaded inside the web page that is open in the browser
//to alter behavior of a web page with your extension, this is the file you update

//information sent from background.js
function addFlower()
{
    const img = document.createElement('img');
    img.src = chrome.runtime.getURL('images/dandelion.png');
    img.style.setProperty('width', '5%', '');
    img.className = 'flowers'
    const newX = Math.random() * (window.innerWidth );
    const newY = Math.random() * (window.innerHeight);
    const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
    img.style.left = newX + 'px';
    img.style.top = newY + 'px';
    img.style.zIndex = newZ_index;
    // document.getElementById('flower-field').appendChild(img);
    document.body.append(img);
    console.log("flower added");
}
chrome.pageAction.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func : addFlower,
    });
});

// chrome.scripting.executeScript({
//     target : { tabId : addFlower()},
//     func : addFlower,
// })
// .then(() => console.log("injected flower"));


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     // if (request.type == "click_event") {
//         console.log("click event");

//         console.log("hello world!")
//         // generate ascii flowers around the webpage
        // let img = document.createElement('img');
        // img.src = chrome.runtime.getURL('images/dandelion.png');
        // img.style.setProperty('width', '5%', '');
        // img.className = 'flowers'
        // const newX = Math.random() * (window.innerWidth );
        // const newY = Math.random() * (window.innerHeight);
        // const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
        // img.style.left = newX + 'px';
        // img.style.top = newY + 'px';
        // img.style.zIndex = newZ_index;
        // document.getElementById('flower-field').appendChild(img);
        // console.log("flower added");
//     // }
// })
// function add_flower(){
//     console.log("hello world!")
//     // generate ascii flowers around the webpage
//     let img = document.createElement('img');
//     img.src = 'images/dandelion.png';
//     img.style.setProperty('width', '5%', '');
//     img.className = 'flowers'
//     const newX = Math.random() * (window.innerWidth );
//     const newY = Math.random() * (window.innerHeight);
//     const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
//     img.style.left = newX + 'px';
//     img.style.top = newY + 'px';
//     img.style.zIndex = newZ_index;
//     document.getElementById('flower-field').appendChild(img);
//     console.log("flower added");
// }

// const btn = document.getElementById("mybutton");
// btn.addEventListener(
//     "click", function() {
//         console.log("hello world!")
//         const response = chrome.tabs.sendMessage(tab.id, {action: "addflower"})

//         // generate ascii flowers around the webpage
//         let img = document.createElement('img');
//         img.src = 'images/dandelion.png';
//         img.style.setProperty('width', '5%', '');
//         img.className = 'flowers'
//         const newX = Math.random() * (window.innerWidth );
//         const newY = Math.random() * (window.innerHeight);
//         const newZ_index = parseInt(Math.random() * 10); // z-index from 1-10
//         img.style.left = newX + 'px';
//         img.style.top = newY + 'px';
//         img.style.zIndex = newZ_index;
//         document.getElementById('flower-field').appendChild(img);
//         console.log("flower added");
//     } 
// );
