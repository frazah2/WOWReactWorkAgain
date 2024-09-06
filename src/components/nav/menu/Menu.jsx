import { Component } from "react";
import './Menu.css'

class Menu extends Component {
    
    render() {
      return (
        <div className={`menu ${this.props.Menu}`}>
          <ul>
            <li>Home</li>
            <li>Service</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      );
    }
  }

export default Menu;