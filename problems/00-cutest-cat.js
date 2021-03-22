/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  let cutest = {};
  debugger
  let i = 0;
  let currentCutest = -Infinity; //cutest cat value

  while (i < cats.length) {
    i++;

      let cat = cats[i]; //need the values of cuteness to compare to a number
    debugger
    console.log(cat)
    if (cats.cuteness > currentCutest) {

      cutest = cat.cuteness;
      debugger

    }

  }

  return cutest;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
