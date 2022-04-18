import React, {Component} from "react";
import List from "./List";
import Details from "./Details";
import '../css/main.css';
import '../css/default.css';

export default class Widget extends Component{
    render() {
        return (
            <div className='widget flex-row b1'>
                <List/>
                <Details/>
            </div>
        );
    }
}
