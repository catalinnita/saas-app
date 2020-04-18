import React, { useContext } from 'react'
import { Store } from '../../Store.js';
import PaymentBox from '../organisms/payment-box'
import { paymentService } from '../../services/authentication';
import Cookies from 'js-cookie';

const PaymentPage = () => {
  const globalState = useContext(Store);
  const { state, dispatch } = globalState;

  const paymentSubmit = async (event) => {
    event.preventDefault();
    const card = state[event.target.id];
    const parameters = {
      card,
    }
    try {
      const user = await paymentService(parameters);
      Cookies.set('UD', user);
      dispatch({
        type: 'SET_USER_STATUS',
      });
    } catch (err) {
      dispatch({
        type: 'SET_STATE',
        payload: {
          errorMessage: err.message,
        },
      });
    }
  }

  return (
    <div className="page page--payment">
      <h1>Credit card data</h1>
      <PaymentBox
        errorMessage={state.errorMessage}
        submitCallback={paymentSubmit}
      />
    </div>
  );
}

export default PaymentPage;
