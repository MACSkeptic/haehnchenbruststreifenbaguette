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

function decline(deklination) {
  var element = ce('div');
  element.setAttribute('class', [
    `deklination__entry`,
    `deklination__genus--${deklination.genus}`,
    `deklination__nummer--${deklination.nummer}`
  ].join(' '));
  element.innerText = deklination.value;
  return element;
}

function declineAll(parent, deklination) {
  ([].concat(deklination || [])).map(decline).map(parent.appendChild.bind(parent));
  return parent;
}

function entry(spec) {
  var element = ce('div');
  element.setAttribute('class', [
    `entry`,
    `entry--genus-${spec.genus}`,
    `entry--nummer-${spec.nummer}`
  ].join(' '));
  var value = ce('div');
  value.setAttribute('class', 'entry__value');
  value.innerText = spec.value;
  element.appendChild(value);
  var deklination = spec.deklination && declineAll(ce('div'), spec.deklination);
  deklination && [
    deklination.setAttribute('class', 'deklination'),
    element.appendChild(deklination)
  ];
  return element;
}

function artikelListe(artikel) {
  return ul(([].concat(artikel || [])).map(entry).map(li));
}

function pronomenListe(pronomen) {
  return ul(([].concat(pronomen || [])).map(entry).map(li));
}
