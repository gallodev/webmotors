import React from 'react'
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import './style.css';


export default function Home() {

    return (
        <div className="main-container">
            <Header class="main-header flex"/>                            
            <section className="search-container flex">
                <div className="box-search">
                    <Tabs/>
                    <div className="box-search-content left clearfix">    
                        teste
                    </div>
                </div>
            </section>
        </div>
    )
}
