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
  var cardPopup = $('.card-popup');
  var baskBtn = $('.js-open-bask');
  var closeBaskBtn = $('.js-close-popup');

  initial();


  //Initial function
  function initial() {
    tabControls.on('click', tabHandler);
    activeMenuHandler(itemMenu);
    customSelect();
    baskBtn.on('click', function () {
      cardPopup.addClass('show-card');
    });

    closeBaskBtn.on('click',function () {
      cardPopup.removeClass('show-card');
    });

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

    // init custom radio buttons
    $('.js-custom-radio').styler();
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

  // booking form datepicker
  var $bookingForm = $('.booking-form');

  if ($bookingForm.length > 0) {
    var $datepicker = $('#date-picker');
    var $datemodal = $('.date-modal');
    var $dateInput = $('#date-input');

    // init datepicker
    $datepicker.datepicker({
      beforeShowDay: $.datepicker.noWeekends,
      showWeek: true
    }, $.datepicker.regional["da"]);

    // open datepicker
    $('.js-open-date-modal').on('click', function () {
      $datemodal.toggleClass('date-modal--open');
    });

    // momentjs
    // set locale danish
    moment.locale('da');

    // set date
    $setDateBtn = $('.js-set-form-date');

    $setDateBtn.on('click', function (e) {
      var currentDate = $datepicker.datepicker("getDate");
      var dateFormated = moment(currentDate).format("dddd [d.] Do MMMM YYYY");
      var dateTime = $bookingForm.find('.date-modal__time input:checked').val();
      var visitedDate = dateFormated + ' - kl. ' + dateTime;
      $dateInput.val(visitedDate);
      $datemodal.removeClass('date-modal--open');
    });
  }

  // add form fields
  var fieldsCounter = 1;
  $('.added-btn').on('click', function(e) {
    createFormFields();
  });

  function createFormFields() {
    fieldsCounter++;

    var formTmpl = '<input type="text" name="delivery-address-' + fieldsCounter + '" class="input" placeholder="Address"> ' +
      '<div class="form-row"> ' +
      '<label class="col-wr-6"> ' +
      '<input type="text" name="delivery-postcode-' + fieldsCounter + '" class="input" placeholder="Postnummer"> ' +
      '</label> ' +
      '<label class="col-wr-6"> ' +
      '<input type="text" name="delivery-by-' + fieldsCounter + '" class="input" placeholder="By"> ' +
      '</label> ' +
      '</div>';

    $('.js-form-fields-output').append($(formTmpl));
  }
});
