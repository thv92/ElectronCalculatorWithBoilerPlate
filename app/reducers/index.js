// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import sections from './sections';
import sectionItems from './sectionitems';
import sectionItemPrice from './sectionitemprice';
import activeSection from './activesection';
import activeItem from './activeitem';


const rootReducer = combineReducers({
  counter,
  router,
  sections,
  sectionItems,
  sectionItemPrice,
  activeSection,
  activeItem
});

export default rootReducer;
