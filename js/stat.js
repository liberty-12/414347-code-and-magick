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

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = "16px Arial";

  var congratulation = ['Ура, вы победили!', 'Список результатов:'];

  for (var i = 0; i < congratulation.length; i++) {
    ctx.fillText(congratulation[i], CLOUD_X + BAR_GAP, CLOUD_Y + GAP + FONT_GAP + GAP * 2 * i);
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP * 2 - TEXT_HEIGHT - (BAR_HEIGHT * Math.round(times[i])) / maxTime);

    ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    if (i > 0) {
      ctx.fillStyle = 'rgb(0, 0, 255, ' + Math.round((Math.random() * 1) * 10) / 10 + ')';
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT, BAR_WIDTH, - ((BAR_HEIGHT * Math.round(times[i])) / maxTime));

    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
  }
};
