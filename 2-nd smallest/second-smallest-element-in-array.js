const list = [-1, 0, 2, 3, 99, -11]
// Create the function that returns second least number
function secondLeast(list) {
  let least = Infinity
  let secondLeast = Infinity
  list.forEach(e => {
    if (e < least) {
      secondLeast = least
      least = e
    }
  });
  list.forEach(e => {
    if (e !== least && e < secondLeast) {
      secondLeast = e
    }
  });

  console.log(least, secondLeast)
}

secondLeast(list);
secondLeast(list.reverse());

secondLeast([-1]);
secondLeast([-1, 0]);
secondLeast([-1, 99]);
secondLeast([-1, -1, -1]);
secondLeast([-1, 99, 99]);