const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const instrumentFamilies = event.detail;
    this.populate(instrumentFamilies);
  });

  this.element.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);  
  })

};

SelectView.prototype.populate = function(instrumentData){
  instrumentData.forEach((family,index) => {
    const option = document.createElement('option');
    option.textContent = family.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
