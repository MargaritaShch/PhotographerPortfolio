import React from "react";
import './MenuForAlbum.css';
import { Link } from "react-router-dom";

function MenuForAlbum(){
    return (
      <div>
        <ul className="menu2">
          <li className="li">
            <Link to="/">Home page</Link>
          </li>
        </ul>
      </div>
    );
}

export default MenuForAlbum;