// background.js
var ner_text = [];
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.text) {
    fetch('http://127.0.0.1:8000/test_app/take_text/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: message.text }),
    })
      .then(response => response.json())
      .then(data => {
        ner_text = data.result;
        console.log('Response from Django:', data);
        console.log('Extracted data:', data.result); // Check the structure of the received data
        // Send a message to the active tab once the data is available
      // Send a message to the active tab if there is one
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs && tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, { highlights: ner_text });
        } else {
          console.error('No active tab found.');
        }
      });
    })
  }
});

