import React from 'react';
import ReactDom from "react-dom"
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}

ReactDom.render(<PersonList />, document.getElementById('root'))
// document.getElementById('test').innerHTML = "<h1>on page 2 via inner html</h2>";