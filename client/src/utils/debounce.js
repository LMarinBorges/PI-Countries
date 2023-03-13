// Cortesía de ionurboz
// https://gist.github.com/ionurboz/51b505ee3281cd713747b4a84d69f434
export default function debounce(fn, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
