
// import PropTypes from 'prop-types'
// import React from 'react';
// class App extends React.Component{
//   render() {
//     return (
//       <div className='App>'>
//         <h1>{this.props.message}</h1>
//       </div>
//     );
//   }
// }
// App.PropTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default App;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
      </div>
    );
  }
}

App.propTypes = {
  message: PropTypes.string.isRequired,
};

export default App;
