import React from 'react'
import { FaCarAlt , FaMotorcycle } from "react-icons/fa";
import classnames from 'classnames';
import SellCarButton from './SellCarButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as applicationActions } from '../store/ducks/application';

const Tabs = ({currentTab,tabs,dispatchActiveTab}) => {
        
    function handleTabActive(e,currentActive){
        e.preventDefault();
        if(currentTab !== currentActive){            
            dispatchActiveTab(currentActive);                        
        }                
    }

    return (
        <div className="box-search-header left">                            
            <ul>
                <li className={classnames("tab left",(currentTab === tabs.carIndex)?"active":"")} >
                    <a href="#car" onClick={(e)=>handleTabActive(e,tabs.carIndex)} className="tab-link left">
                        <FaCarAlt size={25} className="tab-icon" />
                        <div className="tab-text">
                            <span>Comprar</span>
                            <strong className="left">Carros</strong>
                        </div>
                    </a>
                </li>
                <li className={classnames("tab left",(currentTab === tabs.motorcycleIndex)?"active":"")} >
                    <a href="#motorcycle" onClick={(e)=>handleTabActive(e,tabs.motorcycleIndex)} className="tab-link left">
                        <FaMotorcycle size={25} className="tab-icon" />
                        <div className="tab-text">
                            <span>Comprar</span>
                            <strong className="left">Motos</strong>
                        </div>
                    </a>
                </li>
                <li className="right">
                    <SellCarButton/>
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({        
    currentTab : state.application.activeTab,
    tabs : state.application.tabs
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(applicationActions,dispatch)    




export default (connect(mapStateToProps,mapDispatchToProps))(Tabs);