'use strict';

(function () {
  var popup = document.querySelector('.modal-ask-question');
  var body = document.querySelector('.body-wrapper');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');
  var pageContentWrapper = document.querySelector('.page-content__wrapper');
  var closeButton = document.querySelector('.modal-ask-question__close-button');

  var form = document.querySelector('.question-form');
  var buttonAskQuestion = document.querySelector('.button-ask-question');
  var checkbox = document.querySelector('.question-form__checkbox');
  var submitButton = document.querySelector('.button--submit-question');

  var nameInput = document.querySelector('input[name="name"]');
  var nameInFocus = document.querySelector('.question-form__name-in-focus');
  var emailInput = document.querySelector('input[name="e-mail"]');
  var emailInFocus = document.querySelector('.question-form__email-in-focus');
  var invalidText = document.querySelector('.question-form__invalid-text');
  var questionInput = document.querySelector('textarea[name="question"]');
  var text = document.querySelector('.question-form__moving-text');

  var openPopup = function () {
    popup.classList.add('modal-ask-question--open');
    body.classList.add('body-wrapper--question-popup-open');
    pageHeader.classList.add('page-header__wrapper--question-popup-open');
    pageContent.classList.add('page-content--question-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.add('page-content__wrapper--question-popup-open');
    }
    pageFooter.classList.add('page-footer--question-popup-open');

    nameInput.focus();

    nameInput.value = localStorage.getItem('userName');
    emailInput.value = localStorage.getItem('userEmail');
    questionInput.value = localStorage.getItem('userQuestion');
  };

  var closePopup = function () {
    popup.classList.remove('modal-ask-question--open');
    body.classList.remove('body-wrapper--question-popup-open');
    pageHeader.classList.remove('page-header__wrapper--question-popup-open');
    pageContent.classList.remove('page-content--question-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.remove('page-content__wrapper--question-popup-open');
    }
    pageFooter.classList.remove('page-footer--question-popup-open');
  };

  var onQuestionButtonMouseDown = function () {
    if (!popup.classList.contains('modal-ask-question--open')) {
      openPopup();
    }
  };

  var onQuestionButtonEnterPress = function (evt) {
    if (evt.key === 'Enter' && !popup.classList.contains('modal-ask-question--open')) {
      openPopup();
    }
  };

  var onCloseButtonMouseDown = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && popup.classList.contains('modal-ask-question--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!popup.contains(evt.target) && !buttonAskQuestion.contains(evt.target)) {
      closePopup();
    }
  };

  var checkForm = function () {
    buttonAskQuestion.addEventListener('mouseover', function () {
      buttonAskQuestion.innerHTML = '? Ask a question';
    });
    buttonAskQuestion.addEventListener('focus', function () {
      buttonAskQuestion.innerHTML = '? Ask a question';
    });
    buttonAskQuestion.addEventListener('mouseout', function () {
      buttonAskQuestion.innerHTML = 'Ask a question';
    });

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        submitButton.disabled = false;
      } else if (!checkbox.checked) {
        submitButton.disabled = true;
      }
    });

    nameInput.addEventListener('focus', function () {
      nameInFocus.classList.add('question-form__name-in-focus--block');
      nameInput.placeholder = '';
    });
    nameInput.addEventListener('blur', function () {
      nameInFocus.classList.remove('question-form__name-in-focus--block');
      nameInput.placeholder = 'Name';
    });

    emailInput.addEventListener('focus', function () {
      emailInFocus.classList.add('question-form__email-in-focus--block');
      emailInput.placeholder = '';
    });
    emailInput.addEventListener('blur', function () {
      emailInFocus.classList.remove('question-form__email-in-focus--block');
      emailInput.placeholder = 'E-mail';
    });

    emailInput.addEventListener('invalid', function () {
      emailInFocus.classList.add('question-form__email--invalid');
      invalidText.classList.remove('question-form__invalid-text--none');
      emailInput.style = 'border-color: #f2901d;';
      text.classList.add('question-form__moving-text--invalid');
    });

    form.addEventListener('submit', function () {
      localStorage.setItem('userName', nameInput.value);
      localStorage.setItem('userEmail', emailInput.value);
      localStorage.setItem('userQuestion', questionInput.value);
    });
  };

  buttonAskQuestion.addEventListener('click', onQuestionButtonMouseDown);
  buttonAskQuestion.addEventListener('keydown', onQuestionButtonEnterPress);
  window.addEventListener('keydown', onPopupEscPress);
  window.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', onCloseButtonMouseDown);
  checkForm();
})();

'use strict';

(function () {
  var navigationButton = document.querySelector('.navigation-button');
  var bodyMain = document.querySelector('.body-wrapper__main');
  var bodyManiac = document.querySelector('.body-wrapper__maniac');
  var bodyManiacOrder = document.querySelector('.body-wrapper__maniac-order');
  var bodyRitual = document.querySelector('.body-wrapper__ritual');
  var bodySecretsOfManshion = document.querySelector('.body-wrapper__secrets-of-mansion');
  var bodyFatalExperiment = document.querySelector('.body-wrapper__fatal-experiment');
  var navigation = document.querySelector('.page-header__navigation');
  var footer = document.querySelector('.page-footer');
  var content = document.querySelector('.page-content');
  var header = document.querySelector('.page-header__wrapper');

  var pageContentWrapper = document.querySelector('.page-content__wrapper');
  var questsList = document.querySelector('.quests-list');
  var choiceQuestsList = document.querySelector('.choice-quests-list-wrapper');

  var openMenu = function () {
    navigationButton.classList.add('navigation-button--menu-open');
    navigation.classList.add('page-header__navigation--menu-open');
    footer.classList.add('page-footer--menu-open');
    header.classList.add('page-header__wrapper--menu-open');
  };

  var closeMenu = function () {
    navigationButton.classList.remove('navigation-button--menu-open');
    navigation.classList.remove('page-header__navigation--menu-open');
    footer.classList.remove('page-footer--menu-open');
    header.classList.remove('page-header__wrapper--menu-open');
  };

  navigationButton.classList.add('navigation-button--js-is');
  navigation.classList.add('page-header__navigation--js-is');
  footer.classList.add('page-footer--js-is');
  header.classList.add('page-header__wrapper--js-is');
  content.classList.add('page-content--js-is');

  if (bodyMain) {
    bodyMain.classList.add('body-wrapper__main--js-is');
  }
  if (bodyManiac) {
    bodyManiac.classList.add('body-wrapper__maniac--js-is');
  }
  if (bodyManiacOrder) {
    bodyManiacOrder.classList.add('body-wrapper__maniac-order--js-is');
  }
  if (bodyRitual) {
    bodyRitual.classList.add('body-wrapper__ritual--js-is');
  }
  if (bodySecretsOfManshion) {
    bodySecretsOfManshion.classList.add('body-wrapper__secrets-of-mansion--js-is');
  }
  if (bodyFatalExperiment) {
    bodyFatalExperiment.classList.add('body-wrapper__fatal-experiment--js-is');
  }
  if (questsList) {
    questsList.classList.add('quests-list--js-is');
  }
  if (pageContentWrapper) {
    pageContentWrapper.classList.add('page-content__wrapper--js-is');
  }
  if (choiceQuestsList) {
    choiceQuestsList.classList.add('choice-quests-list-wrapper--js-is');
  }

  navigationButton.addEventListener('click', function () {
    if (!navigationButton.classList.contains('navigation-button--menu-open')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
})();

'use strict';

(function () {
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var sessionTimeList = document.querySelector('.sessions-time-list');
  var modalTypeDate = document.querySelector('.modal-type-date');
  var dateInput = document.querySelector('.modal-type-date__input');
  var selectedDate = document.querySelector('.selected-date');

  var priceList = document.querySelectorAll('.sessions-time-list__price');
  Number(priceList);
  var selectDateButton = document.querySelector('.button-select-date');

  var dateSpan = document.querySelector('.quest-order__date-span');
  var timeSpan = document.querySelector('.quest-order__time-span');
  var priceSpan = document.querySelector('.quest-order__price-span');
  var sessionTimeInputs = document.querySelectorAll('input[name="session-time"');

  var body = document.querySelector('.body-wrapper');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');

  var checkSessionAvailability = function () {
    for (var i = 0; i < sessionTimeInputs.length; i++) {
      if (sessionTimeInputs[i].checked === true) {
        timeSpan.innerHTML = sessionTimeInputs[i].value + '.';
        priceSpan.innerHTML = priceList[i].innerHTML;
      }
    }
  };

  var setDate = function () {
    if (dateInput) {
      var newDate = new Date(dateInput.value);
      var day = newDate.getDate();
      var month = newDate.getMonth();

      if (dateInput.value.length < 1) {
        selectedDate.innerHTML = '';
      } else {
        selectedDate.innerHTML = day + ' ' + months[month];
        dateSpan.innerHTML = selectedDate.innerHTML;
      }
    }
  };

  var openPopup = function () {
    modalTypeDate.classList.add('modal-type-date--open');
    body.classList.add('body-wrapper--date-popup-open');
    pageHeader.classList.add('page-header__wrapper--date-popup-open');
    pageContent.classList.add('page-content--date-popup-open');
    pageFooter.classList.add('page-footer--date-popup-open');
  };

  var closePopup = function () {
    if (dateInput.checkValidity()) {
      modalTypeDate.classList.remove('modal-type-date--open');
      body.classList.remove('body-wrapper--date-popup-open');
      pageHeader.classList.remove('page-header__wrapper--date-popup-open');
      pageContent.classList.remove('page-content--date-popup-open');
      pageFooter.classList.remove('page-footer--date-popup-open');

      setDate();
      checkSessionAvailability();
    }
  };

  var onButtonMouseDown = function () {
    if (!modalTypeDate.classList.contains('modal-type-date--open')) {
      openPopup();
    }
  };

  var onButtonEnterPress = function (evt) {
    if (evt.key === 'Enter' && !modalTypeDate.classList.contains('modal-type-date--open')) {
      openPopup();
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && modalTypeDate.classList.contains('modal-type-date--open')) {
      closePopup();
    }
  };

  var onPopupEnterPress = function (evt) {
    if (evt.key === 'Enter' && modalTypeDate.classList.contains('modal-type-date--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!modalTypeDate.contains(evt.target) && !selectDateButton.contains(evt.target)) {
      closePopup();
    }
  };

  if (selectDateButton) {
    setDate();
    selectDateButton.addEventListener('click', onButtonMouseDown);
    selectDateButton.addEventListener('keydown', onButtonEnterPress);
    window.addEventListener('keydown', onPopupEscPress);
    dateInput.addEventListener('keydown', onPopupEnterPress);
    window.addEventListener('click', onOverlayClick);
  }

  if (sessionTimeList) {
    sessionTimeList.addEventListener('change', checkSessionAvailability);
  }
})();

'use strict';

(function () {
  var body = document.querySelector('.body-wrapper');
  var buttonSelectCity = document.querySelector('.button-select-city');
  var modalSelectCity = document.querySelector('.modal-select-city');
  var pageHeader = document.querySelector('.page-header__wrapper');
  var pageContent = document.querySelector('.page-content');
  var pageFooter = document.querySelector('.page-footer');
  var pageContentWrapper = document.querySelector('.page-content__wrapper');

  var closeButton = document.querySelector('.modal-select-city__close-button');

  var openPopup = function () {
    modalSelectCity.classList.add('modal-select-city--open');
    body.classList.add('body-wrapper--cities-popup-open');
    pageHeader.classList.add('page-header__wrapper--cities-popup-open');
    pageContent.classList.add('page-content--cities-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.add('page-content__wrapper--cities-popup-open');
    }
    pageFooter.classList.add('page-footer--cities-popup-open');
  };

  var closePopup = function () {
    modalSelectCity.classList.remove('modal-select-city--open');
    body.classList.remove('body-wrapper--cities-popup-open');
    pageHeader.classList.remove('page-header__wrapper--cities-popup-open');
    pageContent.classList.remove('page-content--cities-popup-open');
    if (pageContentWrapper) {
      pageContentWrapper.classList.remove('page-content__wrapper--cities-popup-open');
    }
    pageFooter.classList.remove('page-footer--cities-popup-open');
  };

  var onSelectCityMouseDown = function () {
    if (!modalSelectCity.classList.contains('modal-select-city--open')) {
      openPopup();
    }
  };

  var onSelectCityEnterPress = function (evt) {
    if (evt.key === 'Enter' && !modalSelectCity.classList.contains('modal-select-city--open')) {
      openPopup();
    }
  };

  var onCloseButtonMouseDown = function () {
    closePopup();
  };

  var onPopupEscPress = function (evt) {
    if (evt.key === 'Escape' && modalSelectCity.classList.contains('modal-select-city--open')) {
      closePopup();
    }
  };

  var onOverlayClick = function (evt) {
    if (!modalSelectCity.contains(evt.target) && !buttonSelectCity.contains(evt.target)) {
      closePopup();
    }
  };

  buttonSelectCity.addEventListener('click', onSelectCityMouseDown);
  closeButton.addEventListener('click', onCloseButtonMouseDown);
  window.addEventListener('keydown', onPopupEscPress);
  buttonSelectCity.addEventListener('keydown', onSelectCityEnterPress);
  window.addEventListener('click', onOverlayClick);
})();
