import React from 'react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <nav id='nav-wrap' aria-label='primary'>
            <a title='Page1' href='#/' rel='noopener noreferrer'>Page1</a>
            <a title='Page2' href='#/Page2' rel='noopener noreferrer'>Page2</a>
            <a title='Page3' href='#/Page3' rel='noopener noreferrer'>Page3</a>
            <a title='Page4' href='#/Page4' rel='noopener noreferrer'>Page4</a>
          </nav>
        </div>
      </div>
    );
  }
}
