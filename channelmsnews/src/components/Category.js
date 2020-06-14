import React from "react";
import isEqual from 'lodash/isEqual';

import News from "./News";
import newsApi from "../apis/newsApi";

export default class Category extends React.Component {
  state = {
    news: [],
    callNewsApi: true,
    didMount: false,
    didUpdate: false,
    updateChalu: true
  };

  componentDidMount = () => {
    let categoryName = this.props.match.params.CategoryName;
    console.log("Component Mounted");
    console.log(this.props.location.state);

    // console.log(this.state);
    newsApi
      .get(
        `top-headlines?country=GB&category=${categoryName}&pageSize=12&apiKey=0a32e98f7f8a48a5a35b410b6339daab`
      )
      .then((response) => {
        if (response.status === 200) {
          this.props.history.replace({
            state: { fromDashboard: false }
          });
          this.setState({ news: response.data.articles, didMount: true, updateChalu: false });
        }
      })
      .catch((error) => console.log(error));
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(nextProps);
  //   console.log('Current State', this.state);
  //   console.log('Upcoming state', nextState);
  //   if (nextState.updateChalu === false) {
  //     return false;
  //   }

  //   return true;
  // }

  componentDidUpdate = (prevProps, prevState) => {
    let currCategory = this.props.match.params.CategoryName;
    let prevCategory = prevProps.match.params.CategoryName;
    // this.setState({ callNewsApi: false })
    console.log("=========");
    console.log("Component Updated");
    // console.log('Prev Props', prevProps);
    // console.log('Current Props', this.props);
    console.log(this.props?.location?.state);
    // console.log('Prev State', prevState);
    // console.log('Current State', this.state);


    // console.log("Current",currCategory )
    // console.log("Previous",prevCategory )
    // console.log("----------------------------")
    // console.log("Current State:", this.state.news);
    // console.log("Previous State:", prevState.news);
    // if (this.state.didMount === false && this.state.didUpdate === false) {
    if (this.props?.location?.state?.fromDashboard === true) {
      console.log("comes here");
      newsApi
        .get(
          `top-headlines?country=GB&category=${currCategory}&pageSize=12&apiKey=0a32e98f7f8a48a5a35b410b6339daab`
        )
        .then((response) => {
          if (response.status === 200) {
            if (!isEqual(this.state.news, response.data.articles)) {
              // console.log("Second Result is same");
              this.props.history.replace({
                state: { fromDashboard: false }
              });
              this.setState({ news: response.data.articles, callNewsApi: false, didUpdate: true });
            }
          }
        })
        .catch((error) => console.log(error));
    }
  };

  render() {
    // console.log(this.props)

    return (
      <div>
        <News news={this.state.news} />
      </div>
    );
  }
}
