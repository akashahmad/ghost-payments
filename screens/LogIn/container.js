import React from "react";
import Component from "./LogIn";
import {Consumer} from '../../store';
const index = () => {
    return (
        <Consumer>
            {
                ({dispatch}) => (
                    <Component dispatch={dispatch}/>
                )
            }
        </Consumer>
    )
};

export default index