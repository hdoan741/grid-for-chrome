$(document).ready(function(){
  chrome.tabs.executeScript(null, { file: "jquery.js" });
  chrome.tabs.executeScript(null, { file: "layout.js" });
  chrome.tabs.executeScript(null, { file: "grid.js" });

  $('.draw-btn').click(function() {
    chrome.tabs.executeScript(null, { code: "removeLayout();" });
    chrome.tabs.executeScript(null, { code: "removeGrid();" });

    if ($('#checkbox-grid').is(":checked")) {
      var pageWidth = parseInt($('#input-page-width').val(), 10);
      var colWidth = parseInt($('#input-col-width').val(), 10);
      var colDist = parseInt($('#input-col-dist').val(), 10);
      var offset = parseInt($('#input-offset').val(), 10);
      var execCode = "drawGrid(" + pageWidth + ", " + colWidth + ", " + colDist + ", " + offset + ");";
      chrome.tabs.executeScript(null, { code: execCode });
    }

    if ($('#checkbox-layout').is(":checked")) {
      chrome.tabs.executeScript(null, { code: "drawLayout();" });
    }
  });
});
