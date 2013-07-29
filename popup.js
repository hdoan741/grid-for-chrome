function loadOptions() {
  $('#checkbox-layout').prop('checked', localStorage['enableLayout'] == 1 ? true : false);
  $('#checkbox-grid').prop('checked', localStorage['enableGrid'] == 1 ? true : false);
  $('#input-col-num').val(localStorage['colNum'] || 12);
  $('#input-col-width').val(localStorage['colWidth'] || 60);
  $('#input-col-dist').val(localStorage['colDist'] || 10);
  $('#input-offset').val(localStorage['offset'] || 20);
}

function saveOptions() {
  var enableLayout = $('#checkbox-layout').is(":checked");
  var enableGrid = $('#checkbox-grid').is(":checked");
  var colNum = parseInt($('#input-col-num').val(), 10);
  var colWidth = parseInt($('#input-col-width').val(), 10);
  var colDist = parseInt($('#input-col-dist').val(), 10);
  var offset = parseInt($('#input-offset').val(), 10);

  localStorage['enableLayout'] = enableLayout ? 1 : 0;
  localStorage['enableGrid'] = enableGrid ? 1 : 0;;
  localStorage['colNum'] = colNum;
  localStorage['colWidth'] = colWidth;
  localStorage['colDist'] = colDist;
  localStorage['offset'] = offset;
}

function resetOptions() {
  console.log(localStorage);
  localStorage['enableLayout'] = 0;
  localStorage['enableGrid'] = 1;
  localStorage['colNum'] = 12;
  localStorage['colWidth'] = 60;
  localStorage['colDist'] = 20;
  localStorage['offset'] = 10;
  loadOptions();
}

function draw() {
  saveOptions();

  chrome.tabs.executeScript(null, { code: "removeLayout();" });
  chrome.tabs.executeScript(null, { code: "removeGrid();" });

  if ($('#checkbox-grid').is(":checked")) {
    var colNum = parseInt($('#input-col-num').val(), 10);
    var colWidth = parseInt($('#input-col-width').val(), 10);
    var colDist = parseInt($('#input-col-dist').val(), 10);
    var offset = parseInt($('#input-offset').val(), 10);
    var execCode = "drawGrid(" + colNum + ", " + colWidth + ", " + colDist + ", " + offset + ");";
    chrome.tabs.executeScript(null, { code: execCode });
  }

  if ($('#checkbox-layout').is(":checked")) {
    chrome.tabs.executeScript(null, { code: "drawLayout();" });
  }
}

$(document).ready(function() {
  chrome.tabs.executeScript(null, { file: "jquery.js" });
  chrome.tabs.executeScript(null, { file: "layout.js" });
  chrome.tabs.executeScript(null, { file: "grid.js" });

  loadOptions();

  $('.reset-btn').click(function(evt) {
    evt.preventDefault();
    resetOptions();
  });

  $('.draw-btn').click(draw);
});
