// callback functions //

// The second argument/parameter is expected to be a (callback) function
const findWaldo = function (names, found) {
  //   for (let i = 0; i < names.length; i++) {
  //     let name = names[i];
  //     if (name === 'Waldo') {
  //       found(i); // execute callback
  //     }
  //   }

  names.forEach((name, index) => {
    if (name === 'Waldo') {
      found(index);
    }
  });
};

const actionWhenFound = function (indexPosition) {
  console.log(`Found him at index ${indexPosition}!`);
};

findWaldo(['Alice', 'Bob', 'Waldo', 'Winston'], actionWhenFound);
