let change = (amount, valueCoins, coins = []) => {
  let coin = amount && valueCoins.find((e) => !(amount - e < 0));
  let res = (amount - coin).toFixed(2);
  return Math.ceil(res) === 0 ? [...coins, coin] : change(res, valueCoins, [...coins, coin]);
};

let f=(e,t,i=[])=>{let l=e&&t.find(t=>!(e-t<0)),d=(e-l).toFixed(2);return 0===Math.ceil(d)?[...i,l]:f(d,t,[...i,l])}
console.log(f(2.34, [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]))