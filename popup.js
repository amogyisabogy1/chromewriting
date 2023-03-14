document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
      chrome.runtime.sendMessage({text: selectedText});
      var popup = window.open('popup.html', 'My Extension Popup', 'width=200,height=200');
    }
  });
