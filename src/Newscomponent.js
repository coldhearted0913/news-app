import React, { Component } from "react";

export default class Newscomponent extends Component {
  render() {
    let { title, description, img,newsUrl } = this.props;
    return (
      <div style={{alignItems:"center"}}>

        <div 
          className="card"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            className="card-img-top"
            style={{ width: 400, position: "relative", top: 10,border:"none"}}
            src={img}
            alt="/"
          />
          
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" type="button" class="btn btn-danger">
              Know More
            </a>
          </div>
          
        </div>
      </div>
    );
  }
}
 