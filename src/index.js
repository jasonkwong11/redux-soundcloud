/* eslint-disable */
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
import * as actions from './actions'
import Stream from './components/Stream'

const title = "Redux SoundCloud: Good Morning Jason"
const tracks = [
  {
    title: 'Some track'
  },
  {
    title: "Some other track"
  }
]

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
