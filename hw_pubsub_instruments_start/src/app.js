const instrumentData = require('./data/instrument_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_info_view.js')


document.addEventListener('DOMContentLoaded', () => {


  const selectElement = document.querySelector('select');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('#instrument-family-info');
  const familyInfoDisplay = new InstrumentInfoView(infoDiv);
  familyInfoDisplay.bindEvents();

  // this needs to be after instrumentDropdown to work... why?
  const instrumentDataSource = new InstrumentFamilies(instrumentData);
  instrumentDataSource.bindEvents();

});
