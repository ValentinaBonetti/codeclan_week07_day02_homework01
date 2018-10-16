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
  const paragraphTitle = document.createElement('h2');
  paragraphTitle.textContent = family.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The ${family.name} family. ${family.description}`;

  const listTitle = document.createElement('h3');
  listTitle.textContent = 'Instruments include:';

  const listOfInstruments = document.createElement('ul');
  family.instruments.forEach((instrument,index) => {
    const liItem = document.createElement('li');
    liItem.textContent = instrument;
    listOfInstruments.appendChild(liItem);
  });

  this.container.innerHTML = '';
  this.container.appendChild(paragraphTitle);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(listTitle);
  this.container.appendChild(listOfInstruments);

};

module.exports = InstrumentInfoView;
