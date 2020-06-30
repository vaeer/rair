import React, { FC } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import './index.less';


const Text: FC<{}> = props => {
    const click = e => {
        console.log('click');
    };
    return <Button onClick={click}>Hello world~</Button>;
};

export default Text;