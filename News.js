import React, { Component } from "react";
import Newscomponent from "./src/Newscomponent";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <Newscomponent
          title="Sports News"
          description="Get News about the latest clashes in Cricket"
          img="https://t4.ftcdn.net/jpg/02/86/76/77/240_F_286767786_boXM75PDLYIsYWzabZ3fKcM3esv50TNS.jpg"
          path="sportsnews"
        />
        <Newscomponent
          title="Politics News"
          img="https://t3.ftcdn.net/jpg/02/03/89/76/240_F_203897637_7Lztv94MaPdUlWsOK8iSNSQzHun3wTHu.jpg"
          description="Get latest news round the Globe"
        />
        <Newscomponent
          title="Weather News"
          img="https://t4.ftcdn.net/jpg/02/66/38/15/240_F_266381525_alVrbw15u5EjhIpoqqa1eI5ghSf7hpz7.jpg"
          description="Get accurate and timely weather news "
        />
        <Newscomponent title=" Health News" description="Get the latest medical discovery and news" img="https://assets.weforum.org/article/image/M30yp7V_Fa2wO3EIEYoty1CNSPtQOSe1Xe9Fpo4ARRs.jpg" />
        <Newscomponent title="Bussiness News" description="Latest updates for the world of Bussiness" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_PTTUCIxrvn7DF2EK6M674xQL75WBZOE-Wg&usqp=CAU" />
      </div>
    );
  }
}
