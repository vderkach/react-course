import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchAPI, updateSearchText, reset } from '../actions/index';
import App from '../components/App';

function mapStateToProps(state){
  return {
    query: state.reducer.query,
    currentPage: state.reducer.currentPage,
    isFetching: state.reducer.isFetching
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAPI,
    updateSearchText,
    reset
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);