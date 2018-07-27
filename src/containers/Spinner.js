import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from '../components/Spinner';

function mapStateToProps(state){
  return {
    isFetching: state.reducer.isFetching
  }
}

export default connect(mapStateToProps)(Spinner);