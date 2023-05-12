import React, { Component } from 'react';
import { TechList } from './Shared/TechList/TechList';
import { SiteList } from './Shared/SiteList/SiteList';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <>
        <div>
          <h1>Hello, world!</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
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
