function removeGrid() {
  $('#hdm-grid-container').remove();
}

function drawGrid(colNum, step, gap, margin){
  // remove the old grid
  removeGrid();

  colNum = colNum || 12;
  var gridStep = step || 60;
  var gridGap = gap || 20;
  var gridMargin = margin || 10;
  var gridWidth = colNum * gridStep + (colNum - 1) * gridGap + gridMargin;

  var docHeight = $(document).height();
  var docWidth = $(document).width();

  var buildGrid = function(num, step, gap, leftmargin) {

    var grid = $('<div>');

    var pos = leftmargin;
    for (var i = 0; i < num; i++) {
      var pos = leftmargin + (step + gap) * i;
      var col = $('<div>');
      $(col).width(step);
      $(col).height(docHeight);
      $(col).css('position', 'absolute');
      $(col).css('left', pos);
      $(col).css('top', 0);
      $(col).css('background-color', '#FFE5E5');
      $(grid).append($(col));
    }

    return grid;
  }

  var grid = buildGrid(colNum, gridStep, gridGap, gridMargin);

  $(grid).css('position', 'absolute');
  $(grid).css('top', '0');
  $(grid).css('left', docWidth / 2 - gridWidth / 2);
  $(grid).css('z-index', 10000);
  $(grid).css('opacity', 0.7);
  $(grid).addClass('hdm-ignore');
  $(grid).attr('id', 'hdm-grid-container');

  $('body').append(grid);
}
