const middle = function(array) {
  let newArray = [];
  if (array.length < 3) {
    return newArray;
  }
  let middlePosition = array.length / 2;
  middlePosition = Math.floor(middlePosition);
  if (array.length % 2 === 0) {
    newArray.push(array[middlePosition - 1]);
  }
  newArray.push(array[middlePosition]);
  return newArray;
};


module.exports = middle;