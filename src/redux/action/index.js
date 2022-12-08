// For Add Item To Cart

export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

// For Delete Item From Cart

export const deleteItem = (product) => {
  return {
    type: "DELETEITEM",
    payload: product,
  };
};
