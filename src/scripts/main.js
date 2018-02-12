$(document).ready(function () {
  //UI Vars
  var tabContent = $('.tab-content');
  var tabControls = $('.tab-control');
  var playBtn = $('#lightbox');
  var itemMenu = $('.main-nav>li>a');

  initial();

  //Initial function
  function initial() {
    tabControls.on('click', tabHandler);
    activeMenuHandler(itemMenu);

    //LightBox Video
    playBtn.poptrox({
      overlayColor: '#002d4e',
      overlayOpacity: 0.77,
      popupWidth: 800,
      popupHeight: 400
    });
  }

  //Tab logik
  function tabHandler(event) {

    var targetItem = $(event.target);
    var targetItemDataTab = $(event.target).attr('data-tab-control');

    if (!$(this).hasClass('active-tab')) {
      tabContent.fadeOut(300);
      targetItem.addClass('active-tab');
      tabControls.not(this).removeClass('active-tab');

      tabContent.each(function (index, element) {
        var elementItem = $(element);
        if (targetItemDataTab === elementItem.attr('data-tab-index')) {
          elementItem.delay(300).fadeIn(300);
        }
      });
      event.preventDefault();
    }
  };

  //Active item menu
  function activeMenuHandler(items) {
    items.each(function (index, item) {
      var itemElement = $(item);
      console.log(itemElement.attr('href'));
      console.log(itemElement.prop('href'))
      if(itemElement.prop('href') === window.location.href){
        itemElement.addClass('current-page');
      }
    })
  }
});
