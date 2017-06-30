//@flow
import { SECTIONSELECTED } from '../actions/activesection';

export default function(state = null, action) {
    switch(action.type) {
        case SECTIONSELECTED:
            return action.payload;
    }
    return state;
}