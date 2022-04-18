import React, {Component} from "react";
import List from "./List";
import Details from "./Details";

export default class Widget extends Component{
    render() {
        return (
            <div>
                <List/>
                <Details/>
            </div>
        );
    }
}
