import * as Constants from '../constants/ActionTypes';

const INITIAL_STATE = {           
  header: [
    'Name',
    'Alpha Codes',
    'Calling Code',
    'Capital',
    'Alternate Spelling',
    'Region',
    'SubRegion',
    'Population',
    'Latitude/Longitude',
    'Denonym',
    'Area',
    'Gini',
    'TimeZones',
    'Borders',
    'Native Name',
    'Numeric Code',
    'Currencies',
    'Languages',
    'Flag',
    'Regional Blocs',
    'Translations',
    'Cioc'
  ]
};

export default function tableData(state = INITIAL_STATE, action) {
  switch (action.type) {  
  case Constants.get:
    return { state, content: action.payload.content };
  default:
    return state;
  }
}
