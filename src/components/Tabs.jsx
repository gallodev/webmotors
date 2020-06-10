import React , {useState} from 'react'
import { FaCarAlt , FaMotorcycle } from "react-icons/fa";
import classnames from 'classnames';
import SellCarButton from './SellCarButton';

export default function Tabs() {

    const [activeTab,setActiveTab] = useState(1);
    const carIndex = 1,
          motorcycleIndex = 2;


    function handleTabActive(e,currentActive){
        e.preventDefault();
        if(activeTab !== currentActive){
            setActiveTab(currentActive);    
        }                
    }

    return (
        <div className="box-search-header left">                
            <ul>
                <li className={classnames("tab left",(activeTab === carIndex)?"active":"")} index={carIndex} >
                    <a href="#car" onClick={(e)=>handleTabActive(e,carIndex)} className="tab-link left">
                        <FaCarAlt size={25} className="tab-icon" />
                        <div className="tab-text">
                            <span>Comprar</span>
                            <strong className="left">Carros</strong>
                        </div>
                    </a>
                </li>
                <li className={classnames("tab left",(activeTab === motorcycleIndex)?"active":"")} index={motorcycleIndex}>
                    <a href="#motorcycle" onClick={(e)=>handleTabActive(e,motorcycleIndex)} className="tab-link left">
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
