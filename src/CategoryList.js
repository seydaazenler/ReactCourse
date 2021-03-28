import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    state: {
    }
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          <ListGroupItem>HomePage</ListGroupItem>
          <ListGroupItem>About</ListGroupItem>
          <ListGroupItem>İmage</ListGroupItem>
          <ListGroupItem>Product</ListGroupItem>
          <ListGroupItem>Contact</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
