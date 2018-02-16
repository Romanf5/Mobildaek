$(document).ready(function () {
  //UI Vars
  var tabContent = $('.tab-content');
  var tabControls = $('.tab-control');
  var playBtn = $('#lightbox');
  var itemMenu = $('.main-nav>li>a');
  var widthSelect = $('#width-col');
  var profileSelect = $('#profile-col');
  var emptySelect = $('#empty-col');
  var seasonSelect = $('#season-col');
  var brandSelect = $('#brand-col');
  var loadSelect = $('#load-col');
  var speedSelect = $('#speed-col');
  var sortSelect = $('#sort');
  var counterInput = $('#counter');
  var deliveRadio = $('#delover_1');
  var delive2Radio = $('#delover_2');
  var selectbooking = $('.select-booking');
  var secondAddressChecek = $('#second_address');
  var nextStepBtn = $('.js-nextStrep');

  initial();


  //Initial function
  function initial() {
    tabControls.on('click', tabHandler);
    activeMenuHandler(itemMenu);
    customSelect();

    //LightBox Video
    playBtn.poptrox({
      overlayColor: '#002d4e',
      overlayOpacity: 0.77,
      popupWidth: 800,
      popupHeight: 400
    });

    //Second Address group form
    secondAddressChecek.on('change', showAddress);

    //show step
    nextStepBtn.on('click', showStep);
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
      if(itemElement.prop('href') === window.location.href){
        itemElement.addClass('current-page');
      }
    })
  }

  //CustomSelects
  function customSelect() {
    widthSelect.styler();
    profileSelect.styler();
    emptySelect.styler();
    seasonSelect.styler();
    brandSelect.styler();
    loadSelect.styler();
    speedSelect.styler();
    sortSelect.styler();
    counterInput.styler();
    deliveRadio.styler();
    delive2Radio.styler();
    selectbooking.styler();
    secondAddressChecek.styler();
  }

  //Show second address
  function showAddress(){
    var hiddenGroup = $('.hidden-group');
    $(this).prop("checked") ? hiddenGroup.css('display','block') : hiddenGroup.removeAttr('style');
  };
  
  //Show Step
  function showStep() {
    console.log('work');
    var stepTwo = $('.step-2-form');
    stepTwo.addClass('show-step');
  }
});
