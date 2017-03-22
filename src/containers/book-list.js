import React, { Component } from 'react';

export default class BookList extends Component {
  renderList() {
    return this.props.book.map(({title}) => {
      return (
        <li key={title} className="list-group-item">{title}</li>
      )
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
