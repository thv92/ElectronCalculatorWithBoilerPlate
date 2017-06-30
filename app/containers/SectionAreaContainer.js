import { connect } from 'react-redux';
import { bindActionCreator } from 'redux';
import SectionArea from '../components/SectionArea';


const getActiveSectionItems = (activeSection, sectionItems) => {
    console.log("ACTIVE SECTION: ", activeSection)
    return sectionItems[activeSection];
}

function mapStateToProps(state) {
    return {
        items: getActiveSectionItems(state.activeSection, state.sectionItems),
        sectionName: state.activeSection
    };
}

export default connect(mapStateToProps)(SectionArea);