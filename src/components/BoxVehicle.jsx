import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default function BoxVehicle(props) {
    return (
        <div className={classNames("box-vehicle left ",props.class)}>
            <div className="vehicle-info-box">
                <figure className="vehicle-image">
                    <img src={props.vehicle.Image} alt={props.vehicle.Image}/>
                </figure>
                <div className="vehicle-info-attr">
                    <ul>
                        <li className="title">{props.vehicle.Make} {props.vehicle.Model}</li>                
                        <li className="version">{props.vehicle.Version}</li>
                    </ul>
                    <div className="vehicle-price-box">
                        <span className="price-label">
                            {props.vehicle.Price}
                        </span>
                    </div>
                    <div className="row"/>
                    <div>
                        <span className="left">{props.vehicle.YearModel} / {props.vehicle.YearFab}</span>
                        <span className="right">R$: {props.vehicle.Price}</span>
                    </div>                
                </div>
            </div>
        </div>
    )
}

BoxVehicle.propTypes = {
    vehicle: PropTypes.object.isRequired
};
