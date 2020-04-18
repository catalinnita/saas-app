import querystring from 'querystring';

const stripeApiUrl = 'https://api.stripe.com/v1';
const planID = 'xxx';

const getHeaders = () => {
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${process.env.REACT_APP_STRIPE_KEY}`);
  headers.append('Accept', 'application/json');
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  return headers;
}

const createRequest = (path, method='GET', body='') => {
  return new Request(`${stripeApiUrl}/${path}`, {
    method: method,
    headers: getHeaders(),
    ...body && { body: body },
  });
}

const searchCustomers = async criteriaObj => {
  const res = await fetch(createRequest(`customers?${querystring.stringify(criteriaObj)}`));
  const { data } = await res.json();

  return data;
}


const getCustomer = async customerId => {
  const res = await fetch(createRequest(`customers/${customerId}`));
  const { data } = await res.json();

  return data;
}

const createCustomer = async customerObj => {
  const res = await fetch(createRequest(`customers`, 'POST', JSON.stringify(customerObj)));

  return await res.json();
}


const getPaymentMethods = async customerId => {
  const res = await fetch(createRequest(`payment_methods/${customerId}`));
  const { data } = await res.json();

  return data;
}

const updatePaymentMethod = (customerId, card) => {

}

const createPaymentMethod = async (customerId, cardObj) => {
  const res = await fetch(createRequest(`payment_methods`, 'POST', JSON.stringify(cardObj)));

  return await res.json();
}

const getSubscription = async subscriptionId => {
  const res = await fetch(createRequest(`subscriptions/${subscriptionId}`));
  const { data } = await res.json();

  return data;
}

const createSubscription = async customerId => {
  const subscriptionObj = {
    customer: customerId,
    items: {
      plan: planID,
    }
  }
  const res = await fetch(createRequest(`payment_methods`, 'POST', JSON.stringify(subscriptionObj)));

  return await res.json();

}

const updateSubscription = (customerId, subscription) => {

}

const createMembership = async (userObj, cardObj) => {
  const paymentMethod = await createPaymentMethod(cardObj);
  const customer = await createCustomer({ ...userObj, payment_method: paymentMethod.id});
  const subscription = await createSubscription(customer.id);

  return subscription;
}

const cancelMembership = (subscription) => {

}

const getInvoices = (customerId) => {

}

export {
  searchCustomers,
  getCustomer,
  createCustomer,
  getPaymentMethods,
  createPaymentMethod,
  getSubscription,
  createSubscription,
  createMembership,
}
