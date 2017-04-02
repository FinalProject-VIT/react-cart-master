import React from 'react';
import { Link } from 'react-router';
import {ipp} from './ipp'
export default class Todo extends React.Component {
  render() {
    return (
      <div className="blue full">
        <div className="header">
          <h1 className="cartname">To Buy List</h1>
           <Link className="logout" to="/signin" activeClassName="active">Sign In</Link>
        </div>
        <iframe className="todo" src={`http://${ipp}:3008`} frameborder="0"></iframe>
      </div>
    );
  }
}
