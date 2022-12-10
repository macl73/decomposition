import React from 'react';
import PropTypes from 'prop-types';

export default function Link({item}) {

    return (
        /** отвечает за рендер ссылки */
        <li className="link"><a href="#">{item}</a></li>
    );
};

Link.propTypes = {
    item: PropTypes.string
  };