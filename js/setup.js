'use strict';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
  return arr[Math.floor((Math.random() * arr.length))];
};

var renderWizardFeatures = function (fNames, lNames, cColors, eColors) {
  var persons = [];
  for (var i = 1; i <= 4; i++) {
    var person = {
      name: getRandom(fNames) + ' ' + getRandom(lNames),
      coatColor: getRandom(cColors),
      eyesColor: getRandom(eColors)
    };
    persons.push(person);
  }

  return persons;
};

var showElement = function (target) {
  if (typeof (target) === 'string') {
    document.querySelector(target).classList.remove('hidden');
  } else {
    target.classList.remove('hidden');
  }
};

var showUserDialog = function () {
  showElement('.setup');
  showElement('.setup-similar');
};

var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

var addWizardsToDOM = function (persons) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  persons.forEach(function (item, i) {
    fragment.appendChild(renderWizard(persons[i], similarWizardTemplate));
  });

  similarListElement.appendChild(fragment);
};

var wizards = renderWizardFeatures(firstNames, lastNames, coatColors, eyesColors);
showUserDialog();
addWizardsToDOM(wizards);
