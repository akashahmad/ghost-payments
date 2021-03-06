import React from "react";
import Component from "./LogIn";
import {Consumer} from '../../store';
const index = (props) => {
    let {setShow} = props;
    return (
        <Consumer>
            {
                ({dispatch}) => (
                    <Component dispatch={dispatch} setShow={setShow}/>
                )
            }
        </Consumer>
    )
};

export default index