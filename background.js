chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action == "highlight") {
    chrome.windows.create({
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 400,
      height: 250,
      left: screen.width - 450,
      top: screen.height - 300
    }, function(window) {
      sendResponse({result: "success"});
    });
  }
});
