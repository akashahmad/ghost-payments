import React from "react";
import Component from "./index";
import {Consumer} from '../../store';
const index = (props) => {
    let {children} = props;
    return (
        <Consumer>
            {
                ({dispatch}) => (
                    <Component dispatch={dispatch} children={children}/>
                )
            }
        </Consumer>
    )
};

export default index