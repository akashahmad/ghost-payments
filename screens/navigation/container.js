import React from "react";
import Component from "./index";
import {Consumer} from '../../store';
const index = () => {
    return (
        <Consumer>
            {
                ({dispatch, id}) => (
                    <Component dispatch={dispatch} id={id}/>
                )
            }
        </Consumer>
    )
};

export default index