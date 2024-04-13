/* eslint-disable no-unused-vars, no-useless-escape */

const isValidCompanyUsername = (username, firstName, lastName) => {
  const regex = new RegExp(`^(sales|tech)\\d\\w-${firstName[0]}${lastName}\\d?$`);
  return regex.test(username);
};

module.exports = {
  isValidCompanyUsername,
};
