import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";

export class Contact extends Component {
    render() {
        return(
            <div>
                <h1>Contact</h1>
                <p>contacts here...</p>
                <ContactDetails ></ContactDetails>
            </div>
            
        );
    }
}