import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class makePagination extends Component {
  render() {
    return (
      <PaginationItem>
        <PaginationLink href={this.props.url}>
          {this.props.pageNumber}
        </PaginationLink>
      </PaginationItem>
    )
  }
}

export default makePagination;
