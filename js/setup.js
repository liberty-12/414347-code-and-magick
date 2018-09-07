'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandom = function (arr) {
  return (Math.random() * (arr.length - 1)).toFixed(0);
};

var renderWizardFeatures = function (fNames, lNames, cColors, eColors) {
  var persons = [];
  for (var i = 0; i < 3; i++) {
    var person = {
      name: fNames[getRandom(fNames)] + ' ' + lNames[getRandom(lNames)],
      coatColor: cColors[getRandom(cColors)],
      eyesColor: eColors[getRandom(eColors)]
    };
    persons.push(person);
  }

  return persons;
};

var wizards = renderWizardFeatures(firstNames, lastNames, coatColors, eyesColors);
