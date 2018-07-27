import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextPageClick, prevPageClick, fetchAPI } from '../actions/index';
import Pagination from '../components/Pagination';

function mapStateToProps(state){
  return {
    query: state.reducer.query,
    currentPage: state.reducer.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    nextPageClick,
    prevPageClick,
    fetchAPI
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);