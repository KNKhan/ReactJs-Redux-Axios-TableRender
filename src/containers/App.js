import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { get } from '../actions/CounterActions';
import Data from '../components/data/tableData';

/**
 * Root App rendering the parent component having object value from redux
 */
class App extends Component {
  
  componentDidMount(){
      this.props.get( true );
  }

  render() {
    const { data } = this.props;
    return (
      <div className='app-container'>
        <div className='app-heading'>Redux Render - Parent to Child</div>        
        <div className='app-table'>
          {/* passing redux value as props to child component Data */}
          <Data rowData={this.props.data} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    data: state.tableData
  };
}

/**
 * Turns an object whose values are 'action creators' into an object with the same
 * keys but with every action creator wrapped into a 'dispatch' call that we can invoke
 * directly later on. Here we imported the actions specified in 'CounterActions.js' and
 * used the bindActionCreators function Redux provides us.
 *
 * More info: http://redux.js.org/docs/api/bindActionCreators.html
 */
const mapDispatchToProps = dispatch => bindActionCreators({get}, dispatch);  


/**
 * 'connect' is provided to us by the bindings offered by 'react-redux'. It simply
 * connects a React component to a Redux store. It never modifies the component class
 * that is passed into it, it actually returns a new connected componet class for use.
 *
 * More info: https://github.com/rackt/react-redux
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
