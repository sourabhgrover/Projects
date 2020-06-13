import React from "react";
import News from "./News";
import newsApi from "../apis/newsApi";

export default class Category extends React.PureComponent {
                 state = {
                   news: [],
                 };

                 componentDidMount = () => {
                   let categoryName = this.props.match.params.CategoryName;
                   console.log("Component Mounted");
                   newsApi
                     .get(
                       `top-headlines?country=GB&category=${categoryName}&pageSize=12&apiKey=0a32e98f7f8a48a5a35b410b6339daab`
                     )
                     .then((response) => {
                       console.log(response);
                       if (response.status === 200) {
                         this.setState({ news: response.data.articles });
                         console.log("State :", this.state.news[0].title);
                       }
                     })
                     .catch((error) => console.log(error));
                 };

                 shouldComponentUpdate(nextProps, nextState) {
                   console.log(nextProps);
                   if (
                     this.state?.news[0]?.title !== nextState?.news[0]?.title ||
                     this.props.match.params.CategoryName !==
                       nextProps.match.params.CategoryName
                   ) {
                     return true;
                   }
                   return false;
                 }

                 componentDidUpdate = (prevProps, prevState) => {
                   let currCategory = this.props.match.params.CategoryName;
                   let prevCategory = prevProps.match.params.CategoryName;
                   console.log("Component Updated");

                   // console.log("Current",currCategory )
                   // console.log("Previous",prevCategory )
                   // console.log("----------------------------")
                   console.log("Current State:", this.state.news);
                   console.log("Previous State:", prevState.news);

                   newsApi
                     .get(
                       `top-headlines?country=GB&category=${currCategory}&pageSize=12&apiKey=0a32e98f7f8a48a5a35b410b6339daab`
                     )
                     .then((response) => {
                       console.log(response);
                       if (response.status === 200) {
                         if (currCategory !== prevState.news) {
                           this.setState({ news: response.data.articles });
                         }
                       }
                     })
                     .catch((error) => console.log(error));
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
