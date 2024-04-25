//https://developer.chrome.com/docs/extensions/develop/concepts/activeTab

//capture click event in content js

chrome.tabs.addEventListener("click", () => {
    console.log("click");
});
// document.addEventListener("click", () => {
//     chrome.scripting.executeScript({
//         files: ['content.js']
//     })
//     console.log("click");
// });

