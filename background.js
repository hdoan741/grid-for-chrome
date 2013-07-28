chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, { file: "jquery.js" });
  chrome.tabs.executeScript(null, { file: "layout.js", runAt: "document_end" });
//  chrome.tabs.executeScript(null, { file: "grid.js" });
});

