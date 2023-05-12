import React, { Component } from 'react';
import { TechList } from './Shared/TechList/TechList';
import { SiteList } from './Shared/SiteList/SiteList';

export class About extends Component {
    render() {
        const title = "information";
        const message = "iHello there. this is ReactProject site.";
        return (
        <div>
            <h1>{title}</h1>
            <h3>{message}</h3>

            <p>This is a react project by Seolhee</p>

            <div className='row mb-5'>
                <div className='col-md-6'>
                    <div className='thumbnail'>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="computer screen"/>
                        <i>Photo by https://unsplash.com</i>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='thumbnail'>
                        <img className="img-fluid" src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="computer on the desk" />
                        <i>Photo by https://unsplash.com</i>
                    </div>
                </div>
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
        </div>);
    }
}