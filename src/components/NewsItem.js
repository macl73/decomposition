import React from 'react';
import PropTypes from 'prop-types';

export default function NewsItem({item}) {

    return <li className="news-item"><a href="#">{item}</a></li>
    /** отвечает за рендер ссылки на новость */
};

NewsItem.propTypes = {
    item: PropTypes.string
  };