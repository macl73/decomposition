import React from 'react';
import PropTypes from 'prop-types';

export default function ExchangeInfo({data}) {

    return (
         /** отвечает за рендер данных с биржи */
        <ul className="exchange-info">
            {data.map((item, index) => <li key={index} className="exchange-item"><span>{item.name}</span><span>{item.value}</span><span>{item.shift}</span></li>)}
        </ul>
    );
};

ExchangeInfo.propTypes = {
    data: PropTypes.array
  };