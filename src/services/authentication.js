const loginServices = async (params) => {
  const res = await fetch('http://sdata-api-gateway.herokuapp.com/auth/login', {
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
  const res = await fetch('http://sdata-api-gateway.herokuapp.com/auth/register', {
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

export {loginServices, registerService}
