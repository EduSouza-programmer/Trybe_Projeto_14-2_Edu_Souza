export const resetKey = (key) => {
  const valueKey = localStorage.getItem(key);
  if (valueKey) localStorage.setItem(key, '');
};

export const removeKey = (key) => localStorage.removeItem(key);

export const save = (key, value) => localStorage.setItem(key, value);

export const saveObj = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getDataObj = (key) => JSON.parse(localStorage.getItem(key));

export const getDataItem = (key) => localStorage.getItem(key);

export const getDataAndSet = (key, setState) => {
  const valueKey = localStorage.getItem(key);
  if (valueKey) {
    const stateUpdate = { [key]: valueKey };
    setState(stateUpdate);
    return true;
  }
  return false;
};

export const getDataObjAndSet = (key, setState) => {
  const valueKey = localStorage.getItem(key);
  let stateUpdate;
  valueKey
    ? (stateUpdate = { [key]: JSON.parse(valueKey) })
    : (stateUpdate = { [key]: [] });
  setState(stateUpdate);
};

export const addProductToCart = (key, product) => {
  if (getDataItem(key)) {
    const objCurrent = getDataObj(key);
    const updateObj = [...objCurrent, product];
    saveObj(key, updateObj);
  } else {
    saveObj(key, [product]);
  }
};

export const updateCartProduct = (product) => {
  const products = getDataObj('cartProducts');
  const productsUpdate = products.map((prod) => {
    if (prod.id === product.id) {
      return { ...prod, ...product };
    }
    return prod;
  });
  saveObj('cartProducts', productsUpdate);
};

export const addEvaluationProduct = (keyID, evaluation) => {
  if (getDataItem(`Feeds-${keyID}`)) {
    const objCurrent = getDataObj(`Feeds-${keyID}`);
    const updateObj = [...objCurrent, evaluation];
    saveObj(`Feeds-${keyID}`, updateObj);
  } else {
    saveObj(`Feeds-${keyID}`, [evaluation]);
  }
};

export const getFromViewAndSetStateCompenent = (value, stateName, setState) => {
  setState({ [stateName]: value });
};
