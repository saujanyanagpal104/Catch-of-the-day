import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    const image = this.props.details.image;
    const name = this.props.details.name;
    const desc = this.props.details.desc;
    const price = this.props.details.price;
    const status = this.props.details.status;
    const isAvailable = status === 'available';

    return(
      <li className="menu-fish">
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}></span>
        </h3>
        <img src={image} alt={name} />
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>{ isAvailable ? "Add To Order" : "Sold Out!" }
        </button>
      </li>
    )
  }
}
export default Fish;
