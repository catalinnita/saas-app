// const API_URL = 'http://sdata-api-gateway.herokuapp.com';
import Cookies from 'js-cookie';
const API_URL = 'http://localhost:3000';

const loginServices = async (params) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-type': 'application/json' },
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

const registerService = async (params) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: { 'Content-type': 'application/json' },
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

const paymentService = async (params) => {
  const token = Cookies.get('UD');
  const res = await fetch(`${API_URL}/auth/payment`, {
    method: 'post',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
  const data = await res.json();

  if (res.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

export { loginServices, registerService, paymentService }
