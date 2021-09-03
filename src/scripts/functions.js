

function changeStatus(){
  let extensionStatus = chrome.storage.sync.get('extensionStatus');
  if(extensionStatus){
    extensionStatus = (extensionStatus === 'ON') ? 'OFF' : 'ON';
    chrome.storage.sync.set({ extensionStatus })
  }
}

