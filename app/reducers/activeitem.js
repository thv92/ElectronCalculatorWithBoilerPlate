import { ITEMSELECTED } from '../actions/activeitem';
import { omit } from 'lodash'

//Made it for single selection | Made this way to easily switch to multiselection
export default function (state = {}, action) {
    switch (action.type) {
        case ITEMSELECTED:
            const sectionName = action.payload.sectionName;
            const itemName = action.payload.itemName;
            const mergeObj = {};
            mergeObj[sectionName] = {};

            if (!(state[sectionName] && state[sectionName][itemName])) {
                mergeObj[sectionName][itemName] = true;
                return Object.assign({}, state, mergeObj);
            } else {
                return _.omit(state, [sectionName]);
            }
        default:
            return state;
    }
}