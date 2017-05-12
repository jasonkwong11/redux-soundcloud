/* eslint-disable */
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(
  <Stream tracks={tracks} />,
  document.getElementById('app')
);

module.hot.accept();
