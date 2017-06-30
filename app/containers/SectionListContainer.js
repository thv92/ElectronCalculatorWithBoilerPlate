import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SectionList from '../components/SectionList';
import { activeTab } from '../actions/activesection';



function mapStateToProps(state) {
    console.log('Mapping state: ' + state);
    return {
        sections: state.sections
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({activeTab}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionList);