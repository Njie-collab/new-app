import MyContext from '../context/MyContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const ProductBtn = () => {
     const context = useContext(MyContext)

    return (
      <div key>
        <button className="btn">ProductButton</button>
        <div class="dropdown">
          <button className="btn" style={{ borderLeft: "1px solid #0d8bf2" }}>
            <i className="fa fa-caret-down"> </i>
          </button>

          <div className="dropdown-content">
            <Link to="/">
              <li>Link1</li>

              <Link to="/infocard">
                <li>Link2</li>
              </Link>

              <Link to="/content">
                <li>Link3</li>
              </Link>

              <Link to="/home">
                <li>Link4</li>
              </Link>

              <li>Link5</li>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default ProductBtn
