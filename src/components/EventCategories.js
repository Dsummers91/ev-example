import React, { Component } from 'react';

class EventCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  getCategories = () => {
    let _this = this;
    let args = {
      app_key:"xTBwKfKz3qWD8mpH",
    };

    window.EVDB.API.call("/categories/list", args, function(data) {
      _this.setState({categories: data.category});
    });
  }

  componentDidMount = () => {
     this.getCategories();
  }

  render() {
    return(
      <ul>
        {this.state.categories && this.state.categories.map((c, i) =>
          <li key={i}>Name: {c.name}</li>
        )}
      </ul>
    )
  }
}

export default EventCategories 
