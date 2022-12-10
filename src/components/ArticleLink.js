import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleLink({name, info, logo}) {
    return (
        /** отвечает за рендер ссылки на статью */
        <div className="article">
            <img className="article-logo" src={logo} alt={name} />
            <h3 className="articleTitle">{name}</h3>
            <p>{info}</p>
        </div>
    );
};

ArticleLink.propTypes = {
    name: PropTypes.string,
    info: PropTypes.string,
    logo: PropTypes.string
  };