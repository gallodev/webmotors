import React from 'react'
import Logo from './Logo';
import classnames from 'classnames';

export default function Header(props) {
    return (
        <header className={classnames("header-container",props.class)} >
            <Logo />
            {props.children}
        </header>
    )
}
