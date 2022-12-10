import React from 'react';
import PropTypes from 'prop-types';

export default function BottomContent({name, data, children}) {
    return (
         /** отвечает за рендер блока конента в нижней части страницы */
        <div className="bottom-content">
            <h2 className="link"><a href="#">{name}</a></h2>
            <ul>
                {data.map((item, index) => <li key={index}><a href="#">{item}</a></li>)}
            </ul>
            {children}
        </div>
    );
};

BottomContent.propTypes = {
    name: PropTypes.string,
    data: PropTypes.array
  };