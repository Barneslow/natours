/* eslint-disable */

import Axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51KbRTEDeUTB2Egr7NfMDYdKzJR6iJQ6mOr4I6SLva0whZERbX9ImOUj0464cbYFYTz1kcxTHyt7Jr4yLkpHeMAx900wmvGMkoO'
);

export const bookTour = async tourId => {
  // 1) Get checkout session from the server
  try {
    const session = await Axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }

  // 2) Create checkout form + charge the credit card
};
