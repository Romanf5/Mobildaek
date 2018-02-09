$(document).ready(function() {
  //UI Vars
  var tabContent = $('.tab-content');
  var tabControls = $('.tab-control');


  initial();

  //Initial function
  function initial() {
    tabControls.on('click', tabHandler);
  }

  //Tab logik
  function tabHandler(event) {
    event.preventDefault();
    var targetItem = $(event.target);
    var targetItemDataTab = $(event.target).attr('data-tab-control');
    tabContent.removeClass('active-content');
    targetItem.addClass('active-tab');
    tabControls.not(this).removeClass('active-tab');

    tabContent.each(function (index, element) {
      var elementItem = $(element);
      console.log(elementItem);
      if(targetItemDataTab === elementItem.attr('data-tab-index')){
        console.log(elementItem.attr('data-tab-index'));
      }
    })
  }

});
