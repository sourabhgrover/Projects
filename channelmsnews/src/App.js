import React, { Component } from "react";
import "./App.css";
import Clock from "./components/clock";
import "bulma/css/bulma.css";
import Date from "./components/date";
import { Route, Switch } from "react-router-dom";
import BreakingNews from "./components/home";
import Search from "./components/search";
import SideMenu from './components/sidemenu';



export default class App extends Component {
  state = {
    breakingnews: [],
  };

  // handleSearchInput = (e) => {
  //   let { name, value } = e.target;
  //   const filteredResults = this.state.breakingnews.filter((f) =>
  //     f.name.includes(value)
  //   );
  //   this.setState({
  //     results: filteredResults,
  //     searchText: value,
  //   });
  // };

  componentDidMount = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=US&pageSize=12&apiKey=8f47a48a41494480b72c7e5102db18ce"
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({ breakingnews: result.articles });
      })
      .catch((e) => console.log(e));
  };
  render() {
    return (
      <div>
        <div className="App-header">
          <div className="level">
            <div className="level-left app-name">CHANNEL MS NEWS</div>
            <div class="vl"></div>
            <div>
              <span className="short-app-name">CMS NEWS</span>
            </div>
            <div className="level-right clock">
              <Clock />
            </div>
            <div class="vl1"></div>
            <div className="smallClock">
              <Date />
            </div>
          </div>
        </div>
        <Search />
        <Switch>
          <Route exact path="/">
            <BreakingNews breakingnews={this.state.breakingnews} />
          </Route>
        </Switch>
        <div><SideMenu /></div>

      </div>
    );
  }
}
