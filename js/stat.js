'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var congratulation = ['Ура, вы победили!', 'Список результатов:'];

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo((x + CLOUD_WIDTH), y);
  ctx.lineTo((x + CLOUD_WIDTH) - GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo((x + CLOUD_WIDTH), (y + CLOUD_HEIGHT));
  ctx.lineTo(x + CLOUD_WIDTH / 2, (y + CLOUD_HEIGHT) - GAP);
  ctx.lineTo(x, (y + CLOUD_HEIGHT));
  ctx.lineTo(x + GAP, y + CLOUD_HEIGHT / 2);
  ctx.lineTo(x, y);
  ctx.closePath();
  ctx.fill();
};

var renderBarChart = function (ctx, name, time) {
  var maxTime = getMaxElement(time);

  name.forEach(function (item, i) {
    var currentColumnHeight = (BAR_HEIGHT * Math.round(time[i])) / maxTime;
    var currentColumnX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var currentColumnY = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - currentColumnHeight;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(time[i]), currentColumnX, currentColumnY - GAP);
    ctx.fillText(name[i], currentColumnX, CLOUD_HEIGHT - GAP);

    ctx.fillStyle = name[i] === 'Вы' ?
      'rgba(255, 0, 0, 1)' :
      'rgb(0, 0, 255, ' + (parseFloat(Math.random().toFixed(2)) || 0.01) + ')';

    ctx.fillRect(currentColumnX, currentColumnY, BAR_WIDTH, currentColumnHeight);
  });
};


var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var showMessage = function (ctx, message) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  message.forEach(function (item, i) {
    ctx.fillText(item, CLOUD_X + BAR_GAP, CLOUD_Y + GAP + FONT_GAP + GAP * 2 * i);
  });
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  showMessage(ctx, congratulation);
  renderBarChart(ctx, names, times);
};
