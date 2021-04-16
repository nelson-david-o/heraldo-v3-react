import React, { Component } from "react";

class Menu extends Component {
  render() {
    
    return (
      <div >
        <ul class="nav nav-pills">
          <li role="presentation">
            <button type="button" class="btn btn-secondary">
              <a href="#">Noticias</a>
              <span class="badge badge-light">4</span>
            </button>
          </li>
          <li role="presentation">
            <a href="#">Judiciales</a>
          </li>
          <li role="presentation">
            <a href="#">Deportes</a>
          </li>
          <li role="presentation">
            <a href="#">Clasificados</a>
          </li>
          <li role="presentation">
            <a href="#">Politica</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
