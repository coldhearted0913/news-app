import React, { Component } from "react";
import Newscomponent from "./Newscomponent";
import Navbar from "./Navbar";
 import Spinner from './Spinner'
export default class Sports extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/everything?q=apple&from=2023-05-18&to=2023-05-18&sortBy=popularity&apiKey=8075cb5144ba4888b3c6ac29477f15d7&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,loading:false });
  }
  handleprev = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-05-18&to=2023-05-18&sortBy=popularity&apiKey=8075cb5144ba4888b3c6ac29477f15d7&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, loading:false });
  };
  handlenext = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2023-05-18&to=2023-05-18&sortBy=popularity&apiKey=8075cb5144ba4888b3c6ac29477f15d7&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ page: this.state.page + 1, articles: parsedData.articles,loading:false });
  };
  render() {
    return (
      <div>
        <Navbar/>
        {this.state.loading &&<Spinner/>}
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <Newscomponent
                    title={element.title}
                    description={element.description}
                    img={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div><br /><br />
        <div className="container ">
          <button  style={{position:"relative", right:40}} onClick={this.handleprev} type="button" class="btn btn-danger">
            Previous
          </button>
          <button style={{position:"relative",left:80,width:70}} onClick={this.handlenext} type="button" class="btn btn-danger">
            Next
          </button>
        </div>
      </div>
    );
  }
}
