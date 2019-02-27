import React from 'react';
import {connect} from 'react-redux';

import {doUpdateUrl} from '../actionCreators/routing';

const isModifiedEvent = event =>
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);

const Link = (props) => {
    const {to, updateUrl, ...propsForA} = props;
    const handleClick = (event) => {
        if (
          !event.defaultPrevented && // onClick prevented default
          event.button === 0 && // ignore everything but left clicks
          !props.target && // let browser handle "target=_blank" etc.
          !isModifiedEvent(event) // ignore clicks with modifier keys
        ) {
            event.preventDefault();
            updateUrl(to);
        }
    };

    return (
        //eslint-disable-next-line jsx-a11y/anchor-has-content
        <a {...propsForA} href={to} onClick={handleClick} />
    );
};

const actions = {
    updateUrl: doUpdateUrl
};
export default connect(null, actions)(Link);