import React, { Component } from "react";
import { ContactDetails } from "./ContactDetails/ContactDetails";
import { TechList } from "./Shared/TechList/TechList";
import { SiteList } from "./Shared/SiteList/SiteList";

export class Contact extends Component {
    render() {
        const title = "Contact information";
        const message = "Hello there. this is ReactProject site.";
        return(
            <>
                <h1>{title}</h1>
                <h3>{message}</h3>

                <p>This is a react project by Seolhee</p>

                <ContactDetails ></ContactDetails>

                <div className="alert alert-warning alert-dismissible mb-5">
                This is an alert message.
                    <button type="button" className="close" data-bs-dismiss="alert" aria-hidden="true">
                        x
                    </button>
                    
                </div>

                <div className='row mb-5'>
                <div class="col-md-6">
                    <h3><i className="fa fa-wrench"></i>Stacks is used in Currrent site </h3>
                    <TechList></TechList>
                </div>
                <div className="col-md-6">
                    <h3><i className="fa fa-sitemap"></i>recommended websites </h3>
                    <SiteList></SiteList>
                </div>
            </div>
            </>
            
        );
    }
}