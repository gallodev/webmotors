import React from 'react'
import classnames from 'classnames';


export default function ClearFilter(props) {
    return (
        <div className={classnames("btn-clear-filter",props.class)}>
            <span>Limpar Filtros</span>
        </div>
    )
}
