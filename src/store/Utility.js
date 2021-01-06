export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};

export const copyArrayObject = (array) => {
  return array.map((item) => {
    return { ...item };
  });
};
