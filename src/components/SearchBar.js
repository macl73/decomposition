import React from 'react';

export default function SearchBar ({children}) {

    return (
        /** отвечает за рендер поисковой строки */
        <div className="search-bar">
            <form className="search-form">
                <input className="search"/>
                <input type="submit" value="Найти" />
            </form>
            {children}
        </div>
    );
};