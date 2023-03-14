chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.text) {
      console.log(message.text)
    }
  });
