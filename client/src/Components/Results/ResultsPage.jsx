// import React, { Component } from 'react';
// import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import API from '../../utils/API';
// import makePagination from '../Pagination';

// export default class ResultsPage extends Component {
//   state = {
//     currentResults: [],
//     currentPage: 1,
//     url: '',
//     pageNumbers: [],
//   }

//   componentDidMount = async () => {
//     const page = this.getParameterByName('page');
//     const type = this.getParameterByName('type');

//     if(type === 'category') {
//       try {
//         console.log(this.props);
//         const category = this.getParameterByName('category');
//         const page = this.getParameterByName('page');
//         const results = await API.getCategoryResults(category, page);

//         let pageNumbers = [];
//         for(let i = 0; i < Math.ceil(results.length / 20); i++) {
//           pageNumbers.push(i + 1);
//         }

//         let url = `/results?type=category&category=${category}&page=${page++}`

//         this.setState({ currentResults: results, url: url, pageNumbers: pageNumbers });
//       } catch (err) {
//         console.log(err);
//       }
//     } else if(type === 'city') {
//       try {
//         const city = this.getParameterByName('city');
//         const results = await API.getCityResults(city, page);

//         let pageNumbers = [];
//         for(let i = 0; i < Math.ceil(results.length / 20); i++) {
//           pageNumbers.push(i + 1);
//         }

//         this.setState({ currentResults: results, pageNumbers: pageNumbers });
//       } catch(err) {
//         console.log(err);
//       }
//     }
//   }

//   getParameterByName = (name, url) => {
//     if (!url) url = window.location.href;
//     name = name.replace(/[\[\]]/g, '\\$&');
//     var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
//         results = regex.exec(url);
//     if (!results) return null;
//     if (!results[2]) return '';
//     return decodeURIComponent(results[2].replace(/\+/g, ' '));
//   }

//   render() {
//     return (
//       <Pagination aria-label="Page navigation example">
//         <PaginationItem>
//           <PaginationLink previous href="#" />
//         </PaginationItem>
//         {/* {this.state.pageNumbers.map(number => {
//           <Pagination pageNumber={number} url={`/results?`}
//         })} */}
//         <PaginationItem>
//           <PaginationLink next href="#" />
//         </PaginationItem>
//       </Pagination>
//     );
//   }
// }








import React from "react";
import JwPagination from "jw-react-pagination";
import API from '../../utils/API';
import ResultCard from './ResultCard';
import Ads from '../Ads/Ads';
import Navbar from '../Nav/Navbar.js';
import './ResultsPage.css';
import MediaQuery from 'react-responsive';


class ResultsPage extends React.Component {
  constructor() {
    super();

    // bind the onChangePage method to this React component
    this.onChangePage = this.onChangePage.bind(this);

    // store example items and current page of items in local state
    this.state = {
      items: [],
      pageOfItems: []
    };
  }

  componentDidMount = async () => {
    const type = this.getParameterByName('type');

    if(type === 'category') {
      try {
        const category = this.getParameterByName('category');
        console.log(category);
        const results = await API.getCategoryResults(category);

        this.setState({ items: results });
      } catch (err) {
        console.log(err);
      }
    } else if(type === 'city') {
      try {
        const city = this.getParameterByName('city');
        console.log(city);
        const results = await API.getCityResults(city);

        this.setState({ items: results });
      } catch(err) {
        console.log(err);
      }
    }
  }

  getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  onChangePage(pageOfItems) {
    // update local state with new page of items
    this.setState({ pageOfItems });
  }

  render() {
    console.log(this.state);
    if(this.state.items.length > 0) {
      return (

        <div className="container">
          {/* <h1>React - Pagination Example with logic like Google</h1>
          {this.state.pageOfItems.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
          <JwPagination
            items={this.state.items}
            onChangePage={this.onChangePage}
          /> */}
          <MediaQuery query='(min-width:769px)'>
            <div className="row">
              <div className="col-8 float-left">
                <Navbar/>
                <br></br>
                <ul className="list-group cards">
                  {this.state.items.map(business => {
                    return <ResultCard business={business}/>
                  })}
                </ul>
              </div>
              <div className="col-4 float-right">
                <Ads/>
              </div>
            </div>
          </MediaQuery>
          <MediaQuery query='(max-width:768px)'>
            <div className="row ads">
              <div className="col-12">
                <Navbar/>
                <br></br>
                <ul className="list-group cards">
                  {this.state.items.map(business => {
                    return <ResultCard business={business}/>
                  })}
                </ul>
              </div>
              <div className="col-xs-12">
                <Ads/>
              </div>
            </div>
          </MediaQuery>
        </div>



      );
    } else {
      return null;
    }
  }
}

export default ResultsPage;
