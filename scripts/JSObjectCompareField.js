const userValidator = (data) => {
  const template = ['name', 'lastName', 'phone'];
  return template.every((field) => {
    return Object.keys(data).some((item) => {
      return field === item;
    });
  })
};
