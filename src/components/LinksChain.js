import React from 'react';
import Link from './Link.js';
import PropTypes from 'prop-types';

export default function LinksChain({links, className, children}) {

    return (
        /** отвечает за рендер блока ссылок */
        <ul className={className}>
            {links.map((item, index) => <Link key={index} item={item}/>)}
            {children}
        </ul>
    );
};

LinksChain.propTypes = {
    links: PropTypes.array,
    className: PropTypes.string
  };