var boo = [
  94455,
  20555,
  20535,
  53125,
  73634,
  148,
  63772,
  17738,
  62995,
  13401,
  95912,
  13449
];

var booSorted = boo.sort((a, b) => {
  console.log(a, b, parseInt(a) > parseInt(b));
  return parseInt(a) > parseInt(b);
});

booSorted();
