module.exports.list = function (items) {
  var split = Math.ceil(items.length / 2);

  function makelistItems (column) {
    return column.map(function (value) {
      return '<li>' + value + '</li>';
    });
  }

  var colOne = makelistItems(items.slice(0, split));
  var colTwo = makelistItems(items.slice(split));

  return '<ul>'+ colOne.join().replace(/\,/g,'') + '</ul>'+
          '<ul>'+ colTwo.join().replace(/\,/g,'') + '</ul>';


};