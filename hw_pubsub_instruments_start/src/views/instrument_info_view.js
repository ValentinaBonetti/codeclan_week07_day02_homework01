const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-family-ready', (event) => {
    const family = event.detail;
    this.render(family);
  });
};

InstrumentInfoView.prototype.render = function (family) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${family.name} family: ${family.description}`;
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;