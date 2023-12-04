function splitAmount(amount) {
  // The Euro coins are:
  // 2€, 1€, 50¢, 20¢, 10¢, 5¢, 2¢, 1¢
  const euroCoins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

  //remaining amount after each iteration
  let amountLeft = amount;

  // initialize result array
  const result = [];

  // iterate through the coins
  euroCoins.forEach((ec) => {
    //the number of coins
    let count = Math.floor(amountLeft / ec);

    if (count === 0) return;

    //iterate through number of coins
    for (let i = 0; i < count; i++) {
      result.push(ec);
    }

    //updating amountLeft
    amountLeft = (amountLeft - ec * count).toFixed(2);
  });

  return result;
}

module.exports = { splitAmount };
