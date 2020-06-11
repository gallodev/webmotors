import React from 'react'
import classnames from 'classnames';

export default function SearchButton(props) {
    return (
        <div className={classnames("search-button",props.class)} >
            <span>Ver Ofertas</span>
        </div>
    )
}
