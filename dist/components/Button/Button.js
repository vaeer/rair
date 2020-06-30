import React from 'react';
import { Button } from '@storybook/react/demo';
import './index.less';
var Text = function (props) {
    var click = function (e) {
        console.log('click');
    };
    return React.createElement(Button, { onClick: click }, "Hello world~");
};
export default Text;
