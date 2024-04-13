const swapAllCases = (str) => {
  return str.replace(/[a-zA-Z]/g, (match) => {
    return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
  });
};


it('swapAllCases - swaps all letter cases in string using regex properly and toUpper/LowerCase once each', () => {
  expect(swapAllCases('Hello')).toEqual('hELLO');
  expect(swapAllCases('hELLO')).toEqual('Hello');
  expect(swapAllCases('Now What?')).toEqual('nOW wHAT?');
  expect(swapAllCases('SpONGeBoB TeXT')).toEqual('sPongEbOb tExt');
});

module.exports = {
  swapAllCases,
};
