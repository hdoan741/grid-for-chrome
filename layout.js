function removeLayout() {
  $('#hdm-layout-container').remove();
}

function drawLayout() {
  // remove the old draw if presented
  removeLayout();

  var layoutBody = $('<div>');

  function buildLayout(el) {
    // get this box margin, width, height & padding
    if (!$(el).hasClass('hdm-ignore') && $(el).is(':visible')) {
      var marginLeft = parseInt($(el).css('margin-left'), 10);
      var marginRight = parseInt($(el).css('margin-right'), 10);
      var marginTop = parseInt($(el).css('margin-top'), 10);
      var marginBottom = parseInt($(el).css('margin-bottom'), 10);

      var paddingLeft = parseInt($(el).css('padding-left'), 10);
      var paddingRight = parseInt($(el).css('padding-right'), 10);
      var paddingTop = parseInt($(el).css('padding-top'), 10);
      var paddingBottom = parseInt($(el).css('padding-bottom'), 10);

      var borderLeft = parseInt($(el).css('border-left'), 10);
      var borderRight = parseInt($(el).css('border-right'), 10);
      var borderTop = parseInt($(el).css('border-top'), 10);
      var borderBottom = parseInt($(el).css('border-bottom'), 10);

      var width = $(el).width();
      var height = $(el).height();
      var leftPos = $(el).offset().left;
      var topPos = $(el).offset().top;

      if (width > 0 && height > 0) {
        var layoutEl = $('<div>');
        layoutEl.css('width', width);
        layoutEl.css('height', height);
        layoutEl.css('position', 'absolute');
        layoutEl.css('left', leftPos + paddingLeft);
        layoutEl.css('top', topPos + paddingTop);
        // layoutEl.css('background-color', '#066ecf');
        layoutEl.css('opacity', 0.6);
        layoutEl.css('border', "solid 1px #d61d00");
        layoutEl.css('z-index', 10000);

        $(layoutBody).append(layoutEl);
      }

      $(el).children().each(function(index, child) {
        var layoutChild = buildLayout(child);
        // $(layout).append(layoutChild);
      });

    }
    // return layoutEl;
  }

  buildLayout($('body'));

  layoutBody.css('z-index', 10000);
  layoutBody.css('overflow', 'visbile');
  layoutBody.addClass('hdm-ignore');
  layoutBody.attr('id', 'hdm-layout-container');

  $('body').append(layoutBody);
}
