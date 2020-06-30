import React from 'react';
import ReactDOM from 'react-dom';
import InputVerfiy from './components/InputVerify';

ReactDOM.render(
  <InputVerfiy sendCode={() => {console.log('...')}}/>,
  document.getElementById('root')
);
