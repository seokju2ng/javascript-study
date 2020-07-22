console.log('Hello JavaScript');
console.log(52.273);
console.log(273);
console.log(30 > 20 > 10);

window.onload = function() {
  var list = '';
  list += '<ul>';
  list += ' <li>Hello</li>';
  list += ' <li>JavaScript</li>';
  list += '</ul>';

  document.body.innerHTML = list;
}


var input = prompt('Message', 'DefStr');

console.log(input);


input = confirm('yes or no');

console.log(input);
