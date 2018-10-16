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

  this.container.innerHTML = '';
  this.paragraphTitle(family.name);
  this.infoParagraph(family.description);
  this.paragraphTitle('Instruments include');
  this.listItems(family.instruments);


  // const listTitle = document.createElement('h3');
  // listTitle.textContent = 'Instruments include:';
  // this.container.appendChild(listTitle);


  // const listOfInstruments = document.createElement('ul');
  // family.instruments.forEach((instrument,index) => {
  //   const liItem = document.createElement('li');
  //   liItem.textContent = instrument;
  //   listOfInstruments.appendChild(liItem);
  // });
  // this.container.appendChild(listOfInstruments);

};

InstrumentInfoView.prototype.paragraphTitle = function(parTitle){
  const title = document.createElement('h2');
  title.textContent = parTitle;
  title.id = parTitle.split(" ")[0];
  console.log("title id:",title.id);
  this.container.appendChild(title);
};

InstrumentInfoView.prototype.infoParagraph = function(description){
  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  this.container.appendChild(paragraph);
};

InstrumentInfoView.prototype.listItems = function (items) {
  const listOfItems = document.createElement('ul');
  items.forEach((item,index) => {
    const liItem = document.createElement('li');
    liItem.textContent = item;
    listOfItems.appendChild(liItem);
  });
  this.container.appendChild(listOfItems);

};


module.exports = InstrumentInfoView;
