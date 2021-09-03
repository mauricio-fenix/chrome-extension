let extensionStatus = 'ON';
const defaults = {
  height: {
    value: 400
  }
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ extensionStatus });
  console.log(`extension status: ${extensionStatus}`);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log("onUpdated disparado ...")
  if(tab.url && tab.url.match('[\S]*\.pinterest\.com').length !== 0){
    const height = defaults.height;
    console.log("estou no pinterest ...");

    if(changeInfo.status == "loading"){

      chrome.scripting.insertCSS({
        target: { tabId: tabs.id },
        files: ["inject.css"]
      }); //editing this

    } else if(changeInfo.status == "complete"){
        //chrome.tabs.reload(tab.id);
    }
  }
})