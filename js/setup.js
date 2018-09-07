'use strict';

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandom = function (arr) {
  return arr[(Math.random() * (arr.length - 1)).toFixed(0)];
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

var showElement = function (element) {
  element.classList.remove('hidden');
};

var renderWizard = function (wizard, template) {
  var wizardElement = template.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var userDialog = document.querySelector('.setup');

var addWizardsToDOM = function (persons) {
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');

  persons.forEach(function (item, i) {
    fragment.appendChild(renderWizard(persons[i], similarWizardTemplate));
  });

  similarListElement.appendChild(fragment);
};

var wizards = renderWizardFeatures(firstNames, lastNames, coatColors, eyesColors);
showElement(userDialog);
showElement(userDialog.querySelector('.setup-similar'));
addWizardsToDOM(wizards);
