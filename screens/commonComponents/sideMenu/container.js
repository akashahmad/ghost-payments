import React from "react";
import Component from "./index";
import {Consumer} from '../../../store';
const index = (props) =>{
    let { navigation } = props;
    return(
        <Consumer>
            {
                ({dispatch, id}) => (
                    <Component dispatch={dispatch} navigation={navigation} id={id}/>
                )
            }
        </Consumer>
    )
};

export default index