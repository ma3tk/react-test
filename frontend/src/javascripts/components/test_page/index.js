import React from 'react';

export default class TestPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--2-offset mdl-cell--8-col'>
          <button className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect'>ALL IS WELL!</button>
        </div>
      </div>
    );
  }
}
