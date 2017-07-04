import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionArea from '../components/SectionArea';
import { itemClicked } from '../actions/activeitem';

const getActiveSectionItems = (activeSection, sectionItems) => {
    return sectionItems[activeSection];
}

const getActiveSectionItemPrices = (activeSection, sectionItemsToPriceMapping) => {
    return sectionItemsToPriceMapping[activeSection];
}

function mapStateToProps(state) {
    return {
        items: getActiveSectionItems(state.activeSection, state.sectionItems),
        itemPrices: getActiveSectionItemPrices(state.activeSection, state.sectionItemPrice),
        sectionName: state.activeSection,
        activeItem: state.activeItem[state.activeSection]
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ itemClicked }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SectionArea);