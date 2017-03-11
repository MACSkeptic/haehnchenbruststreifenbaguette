function li(text) {
  var isElement = (/object HTML/).test(`${text}`);
  var element = ce('li');
  isElement ? element.appendChild(text) : (() => { element.innerText = text })();
  return element;
}

function ul(lis) {
  var element = ce('ul');
  ([].concat(lis || [])).map(li => element.appendChild(li));
  return element;
}

function entry(spec) {
  var element = ce('span');
  element.setAttribute('class', [
    `entry`,
    `entry--genus-${spec.genus}`,
    `entry--nummer-${spec.nummer}`
  ].join(' '));
  element.innerText = spec.value;
  return element;
}

function pronomenListe(pronomen) {
  return ul(([].concat(pronomen || [])).map(entry).map(li));
}
