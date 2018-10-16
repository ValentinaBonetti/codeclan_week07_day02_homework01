const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function () {
  PubSub.publish('Instruments:all-instruments-ready', this.data);

  PubSub.subscribe('SelectView:change', (event) => {
    const selectedInstrumentFamily = event.detail;
    this.publishInstrumentFamilyDetails(selectedInstrumentFamily);
  });
};

InstrumentFamilies.prototype.publishInstrumentFamilyDetails = function (familyIndex) {
  const selectedInstrumentFamily = this.data[familyIndex];
  PubSub.publish('Instruments:selected-family-ready',selectedInstrumentFamily);
};

module.exports = InstrumentFamilies;
