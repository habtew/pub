import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { addCart, delCart } from '../redux/action'; 
export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart); // Replace 'cart' with your reducer name if different

  const handleButton = (product, actionType) => {
    if (actionType === 'add') {
      dispatch(addCart(product));
    } else {
      dispatch(delCart(product));
    }
  };

  return (
    <div>
      {cartItems.map((product) => (
        <div className='row m-5' key={product.id}>
          <div className="col-md-4">
            <img src={product.image} alt={product.title} height="200px" width="180px" />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className='lead fw-bold'>
              {product.qty} X ${product.price} = ${product.qty * product.price}
            </p>
            <button className="btn btn-outline-dark me-4" onClick={() => handleButton(product, 'remove')}>
              <FontAwesomeIcon icon={faMinus} className="me-1" />
            </button>
            <button className="btn btn-outline-dark me-4" onClick={() => handleButton(product, 'add')}>
              <FontAwesomeIcon icon={faPlus} className="me-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}