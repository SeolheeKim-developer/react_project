import React, { Component } from "react";

export class ContactDetails extends Component {
    render() {
        const phoneNumber = "1112223333";
        let address = "Niagara Falls";
        return(
            <ul>
                <li>phone:{phoneNumber}</li>
                <li>address: {address}</li>
            </ul>
        );
    }
}