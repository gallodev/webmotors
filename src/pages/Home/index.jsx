import React from 'react'
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Search from '../../components/Search';
import BoxResult from '../../components/BoxResult';
import { connect } from 'react-redux';

import './style.css';


function get_content(activeTab){
    switch(activeTab){
        case 1: 
            return <Search/>
        case 2:
            return <> Pesquisa de motos em construção ... </>
        default:
            return <> Invalid content data </>
    }
}


const Home = ({activeTab}) => {

    const content = get_content(activeTab);

    return (        
        <div className="main-container">                        
            <Header class="main-header flex"/>                            
            <section className="search-container flex">
                <div className="box-search">
                    <Tabs/>
                    <div className="box-search-content left row">    
                        {content}
                    </div>
                </div>
            </section>
            <section className="main-results flex">                
                <div className="box-result">
                    <BoxResult/>
                </div>                
            </section>
        </div>
    )
}

export default (connect((state) => ({activeTab : state.application.activeTab }))(Home));
