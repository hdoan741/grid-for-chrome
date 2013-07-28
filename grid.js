function removeGrid() {
  $('#hdm-grid-container').remove();
}

function drawGrid(width, step, gap, leftmargin){
  // remove the old grid
  removeGrid();

  var gridWidth = width || 960;
  var gridStep = step || 60;
  var gridGap = gap || 20;
  var gridMargin = leftmargin || 10;

  var docHeight = $(document).height();
  var docWidth = $(document).width();

  var buildGrid = function(width, step, gap, leftmargin) {

    var grid = $('<div>');

    for (var pos = leftmargin; pos + step < width; pos += step + gap ) {
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

  var grid = buildGrid(gridWidth, gridStep, gridGap, gridMargin);

  console.log(docWidth);

  $(grid).css('position', 'absolute');
  $(grid).css('top', '0');
  $(grid).css('left', docWidth / 2 - gridWidth / 2);
  $(grid).css('z-index', 10000);
  $(grid).css('opacity', 0.7);
  $(grid).addClass('hdm-ignore');
  $(grid).attr('id', 'hdm-grid-container');

  $('body').append(grid);
}
