import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as appActions from '../actions/AppActions'

import AppBar from 'material-ui/AppBar';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import TimePicker from 'material-ui/TimePicker';

import { LIST_SCREEN, RECORD_SCREEN } from '../constants/App'

class App extends Component {
  renderListScreen() {
    return (
      <div className='screen'>
        <AppBar
          className='appbar'
          titleStyle={{fontSize: '22px', lineHeight: '52px', height: '52px', marginTop: '4px'}}
          title='Blood Pressure Journal'
        />
      </div>
    );
  }

  renderRecordScreen() {
    return (
      <div className='screen'>
        <AppBar
          className='appbar'
          titleStyle={{fontSize: '22px', lineHeight: '52px', height: '52px', marginTop: '4px'}}
          title='Edit record'
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={<FlatButton label='Save' />}
        />
        <div className='box'>
          <DatePicker
            hintText='Date'
            fullWidth={true}
          />
          <TimePicker
            format='24hr'
            hintText='Time'
            fullWidth={true}
          />
          <TextField
            hintText='Systolic'
            fullWidth={true}
            type='number'
          />
          <TextField
            hintText='Diastolic'
            fullWidth={true}
            type='number'
          />
          <TextField
            hintText='Comment'
            fullWidth={true}
            multiLine={true}
          />
        </div>
        <FloatingActionButton
          className='fab'
          secondary={true}
        >
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }

  render() {
    const { currentScreen } = this.props

    if ( currentScreen === LIST_SCREEN ) {
      return this.renderListScreen();
    }
    else if ( currentScreen === RECORD_SCREEN) {
      return this.renderRecordScreen();
    }
    else {
      return (
        <div>Unknown screen</div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentScreen: state.app.currentScreen
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
