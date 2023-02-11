var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

//Log out to the console each element of the stuff array with even-numbered indexes.
//(i.e., divisible by 2 with no remainder) index positions: (index % 2 === 0)

stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(item);
  }
});
