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
  var btnHamburger = $('.btn-hamburger');
  var menu = $('.header-nav');
  var body = $('body');
  var filterBtn = $('.filter-mobile-btn');
  var filter = $('.filter-wrp');
  var aplayFilter = $('.js-filter-btn');
  var delBtn = $('.js-del-btn');
  var delBlock = $('.js-del-block');
  var btnYes = $('.js-yes');
  var btnNo = $('.js-no');
  var firstStep = $('.step-1-form');
  var helperEvent = $('.js-event-helper>div');
  var step1 = $('#step_1');
  var step2 = $('#step_2');
  var variation1 = $('.js-variation-1');
  var variation2 = $('.js-variation-2');

  initial();


  //Initial function
  function initial() {

    tabControls.on('click', tabHandler);
    activeMenuHandler(itemMenu);
    customSelect();

    baskBtn.on('click', function () {
      cardPopup.addClass('show-card');
    });

    btnHamburger.on('click', function () {
      if (menu.hasClass('active-menu')) {
        $(this).removeClass('active-burger');
        menu.removeClass('active-menu');
        $('body').removeAttr('style');
      } else {
        $(this).addClass('active-burger');
        menu.addClass('active-menu');
        $('body').css('overflow', 'hidden')
      }
    });

    $(window).on('load resize', function () {
      var windowWidth = $(this).width();
      if (windowWidth > 992) {
        btnHamburger.removeClass('active-burger');
        menu.removeClass('active-menu');
        $('body').removeAttr('style');
        filterBtn.removeAttr('style');
        filter.removeClass('show-filter');
      }

      if (body.hasClass('has-filter') && windowWidth <= 992) {
        filterBtn.css('display', 'block')
      }
    });

    filterBtn.on('click', function () {
      if (filter.hasClass('show-filter')) {
        filter.removeClass('show-filter');
      } else {
        filter.addClass('show-filter');
      }
    });

    aplayFilter.on('click', function () {
      filter.removeClass('show-filter');
    });

    closeBaskBtn.on('click', function () {
      cardPopup.removeClass('show-card');
    });

    delBtn.on('click', function () {
      delBlock.fadeOut();
    });

    btnYes.on('click', function (event) {
      if (!firstStep.hasClass('show-step')) {
        event.preventDefault();
        firstStep.addClass('show-step');
        variation2.css('display','block');
        offsetScroll(step1);
      }
    });

    btnNo.on('click', function (event) {
      if (!firstStep.hasClass('show-step')) {
        event.preventDefault();
        firstStep.addClass('show-step');
        variation1.css('display','block');
        offsetScroll(step1);
      }
    });

    //LightBox Video
    playBtn.poptrox({
      overlayColor: '#002d4e',
      overlayOpacity: 0.77,
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
      tabContent.removeClass('active-content');
      targetItem.addClass('active-tab');
      tabControls.not(this).removeClass('active-tab');

      tabContent.each(function (index, element) {
        var elementItem = $(element);
        if (targetItemDataTab === elementItem.attr('data-tab-index')) {
          elementItem.addClass('active-content');
        }
      });
      event.preventDefault();
    }
  };

  //Active item menu
  function activeMenuHandler(items) {
    items.each(function (index, item) {
      var itemElement = $(item);
      if (itemElement.prop('href') === window.location.href) {
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
  function showAddress() {
    var hiddenGroup = $('.hidden-group');
    $(this).prop("checked") ? hiddenGroup.css('display', 'block') : hiddenGroup.removeAttr('style');
  };

  //Show Step
  function showStep() {
    var stepTwo = $('.step-2-form');
    stepTwo.addClass('show-step');
    offsetScroll(step2)
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
    $('.js-open-date-modal').on('click', function (event) {
      $datemodal.toggleClass('date-modal--open');
      event.stopPropagation();
    });

    helperEvent.on('click',function () {
      $datemodal.addClass('date-modal--open');
    });

    $('body').on('click', function (event) {
      if (!$(event.target).is('.date-modal, .date-modal *') && !$(event.target).is('.js-event-helper, .js-event-helper *') && $datemodal.hasClass('date-modal--open')){
        $datemodal.removeClass('date-modal--open');
        var currentDate = $datepicker.datepicker("getDate");
        var dateFormated = moment(currentDate).format("dddd [d.] Do MMMM YYYY");
        var dateTime = $bookingForm.find('.date-modal__time input:checked').val();
        var visitedDate = dateFormated + ' - kl. ' + dateTime;
        $dateInput.val(visitedDate);
      }

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
  $('.added-btn').on('click', function (e) {
    createFormFields();
    $('.select-booking').styler();

  });

  function createFormFields() {
    fieldsCounter++;

    var formTmpl = '<input type="text" name="register-number-' + fieldsCounter + '" class="input" placeholder="Intast dit registreringsnummer">' +
      '<select name="state-' + fieldsCounter + '" class="select-booking">' +
      '<option disabled selected>Dækstatus</option>' +
      '<option value="lorem 1">lorem 1</option>' +
      '<option value="lorem 2">lorem 2</option>' +
      '<option value="lorem 3">lorem 3</option>' +
      '<option value="lorem 4">lorem 4</option>' +
      '</select>';

    // var formTmpl = '<input type="text" name="delivery-address-' + fieldsCounter + '" class="input" placeholder="Address"> ' +
    //   '<div class="form-row"> ' +
    //   '<label class="col-wr-6"> ' +
    //   '<input type="text" name="delivery-postcode-' + fieldsCounter + '" class="input" placeholder="Postnummer"> ' +
    //   '</label> ' +
    //   '<label class="col-wr-6"> ' +
    //   '<input type="text" name="delivery-by-' + fieldsCounter + '" class="input" placeholder="By"> ' +
    //   '</label> ' +
    //   '</div>';

    $('.js-form-fields-output').append($(formTmpl));
  }

  function offsetScroll(step) {
    $('html, body').animate({
      scrollTop: step.offset().top
    }, 1000);
  }
});
