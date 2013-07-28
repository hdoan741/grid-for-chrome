var gridWidth = 960;

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

var grid = buildGrid(gridWidth, 60, 20, 10);

$(grid).css('position', 'absolute');
$(grid).css('top', '0');
$(grid).css('left', docWidth / 2 - gridWidth / 2);
$(grid).css('z-index', 10000);
$(grid).css('opacity', 0.7);
$(grid).addClass('hdm-ignore');

$('body').append(grid);
