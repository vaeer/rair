import React from 'react';
import ReactDOM from 'react-dom';
import InputVerfiy from './components/InputVerify';
ReactDOM.render(React.createElement(InputVerfiy, { sendCode: function () { console.log('...'); } }), document.getElementById('root'));
