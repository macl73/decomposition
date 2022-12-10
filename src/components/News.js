import React from 'react';
import NewsItem from './NewsItem.js';
import PropTypes from 'prop-types';

export default function News({links, className}) {

    return (
        /** отвечает за рендер блока новостей */
        <ul className={className}>
            {links.map((item, index) => <NewsItem key={index} item={item} />)}
        </ul>
    );
};

News.propTypes = {
    links: PropTypes.array,
    className: PropTypes.string
  };