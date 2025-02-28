window.onload = function() {
  const extractedText = document.body.innerText;
  console.log(extractedText);
  chrome.runtime.sendMessage({ text: extractedText });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.highlights && message.highlights.length > 0) {
    console.log(message.highlights);
    highlightText(message.highlights);
  }
});

// Highlight only the word
function highlightText(highlights) {
  highlights.forEach(([entity, category]) => {
    const regex = new RegExp(`\\b${escapeRegExp(entity)}\\b`, 'gi');
    walk(document.body, node => {
      if (node.nodeType === 3) { // Node.TEXT_NODE
        const content = node.textContent;
        const replaced = content.replace(regex, matched => {
          const span = document.createElement('span');
          span.style.backgroundColor = getCategoryColor(category);
          span.appendChild(document.createTextNode(matched));
          return span.outerHTML;
        });
        if (replaced !== content) {
          const spanWrapper = document.createElement('span');
          spanWrapper.innerHTML = replaced;
          node.parentNode.replaceChild(spanWrapper, node);
        }
      }
    });
  });
}

function walk(node, callback) {
  callback(node);
  node = node.firstChild;
  while (node) {
    walk(node, callback);
    node = node.nextSibling;
  }
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getCategoryColor(category) {
  switch (category) {
    case 'PERSON':
      return 'yellow';
    case 'LOC':
      return 'red';
    case 'ORG':
      return 'purple';
    case 'WORK_OF_ART':
      return 'brown';
    case 'NORP':
      return 'green';
    case 'FAC':
      return 'lightblue';
    case 'GPE':
      return 'khaki';
    case 'PRODUCT':
      return 'pink';
    case 'EVENT':
      return 'gray';
    case 'LAW':
      return 'silver';
    case 'LANGUAGE':
      return 'gold';
    case 'DATE':
      return 'navy';
    case 'TIME':
      return 'cyan';
    case 'PERCENT':
      return 'skyblue';
    case 'MONEY':
      return 'crimson';
    case 'QUANTITY':
      return 'steelblue';
    case 'ORDINAL':
      return 'lightcoral';
    case 'CARDINAL':
      return 'fuchisa';
    default:
      return 'transparent';
  }
}
