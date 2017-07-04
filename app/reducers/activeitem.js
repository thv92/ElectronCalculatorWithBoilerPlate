import { ITEMSELECTED } from '../actions/activeitem';

//Made it for single selection | Made this way to easily switch to multiselection
export default function (state = {}, action) {
    switch (action.type) {
        case ITEMSELECTED:
            const sectionName = action.payload.sectionName;
            const itemName = action.payload.itemName;
            const mergeObj = {};
            mergeObj[sectionName] = {};

            if (state[sectionName] && state[sectionName][itemName])
                mergeObj[sectionName][itemName] = false;
            else
                mergeObj[sectionName][itemName] = true;

            return Object.assign({}, state, mergeObj);
        default:
            return state;
    }
}