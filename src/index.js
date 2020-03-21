module.exports = function check(str, bracketsConfig) {

    let answer = [];

    for ( let currentItem of str ) {
      let[starItem, endItem] = bracketsConfig.find(pair =>
        pair.includes(currentItem));

      if ( starItem === currentItem && !answer.includes(starItem) ) {
        answer.push(endItem);
        continue;
      }

      let checkItem = answer.pop();
      if ( currentItem === checkItem ) {
        continue;
      }
      return false;
    }
    // console.log('test');
  return !answer.length;
};
