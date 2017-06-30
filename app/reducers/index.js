// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './counter';
import sections from './sections';
import sectionItems from './sectionitems';
import activeSection from './activesection';

const rootReducer = combineReducers({
  counter,
  router,
  sections,
  sectionItems,
  activeSection
});

export default rootReducer;
