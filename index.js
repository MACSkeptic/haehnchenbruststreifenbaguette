var MAS = 'maskulin';
var FEM = 'feminin';
var NEU = 'neutral';
var PLU = 'plural';

var SIN = 'singular';
var PLU = 'plural';

var dativ = {};
var nominativ = {
  pronomen: {
    personal: [{
      nummer: SIN,
      genus: null,
      value: 'ich'
    }, {
      nummer: SIN,
      genus: null,
      value: 'du'
    }, {
      nummer: SIN,
      genus: null,
      value: 'Sie'
    }, {
      nummer: SIN,
      genus: MAS,
      value: 'er'
    }, {
      nummer: SIN,
      genus: FEM,
      value: 'sie'
    }, {
      nummer: SIN,
      genus: NEU,
      value: 'es'
    }, {
      nummer: PLU,
      genus: null,
      value: 'wir'
    }, {
      nummer: PLU,
      genus: null,
      value: 'ihr'
    }, {
      nummer: PLU,
      genus: null,
      value: 'Sie'
    }, {
      nummer: PLU,
      genus: null,
      value: 'sie'
    }],
    possessiv: [{
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'mein'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'meine'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'mein'
      }, {
        genus: null,
        nummer: PLU,
        value: 'meine'
      }],
      nummer: SIN,
      genus: null,
      value: 'mein'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'dein'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'deine'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'dein'
      }, {
        genus: null,
        nummer: PLU,
        value: 'deine'
      }],
      nummer: SIN,
      genus: null,
      value: 'dein'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'Ihr'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'Ihre'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'Ihr'
      }, {
        genus: null,
        nummer: PLU,
        value: 'Ihre'
      }],
      nummer: SIN,
      genus: null,
      value: 'Ihr'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'sein'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'seine'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'sein'
      }, {
        genus: null,
        nummer: PLU,
        value: 'seine'
      }],
      nummer: SIN,
      genus: MAS,
      value: 'sein'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'ihr'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'ihre'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'ihr'
      }, {
        genus: null,
        nummer: PLU,
        value: 'ihre'
      }],
      nummer: SIN,
      genus: FEM,
      value: 'irh'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'sein'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'seine'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'sein'
      }, {
        genus: null,
        nummer: PLU,
        value: 'seine'
      }],
      nummer: SIN,
      genus: NEU,
      value: 'sein'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'unsere'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'unser'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'unser'
      }, {
        genus: null,
        nummer: PLU,
        value: 'unsere'
      }],
      nummer: PLU,
      genus: null,
      value: 'unser'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'euere'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'euer'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'euer'
      }, {
        genus: null,
        nummer: PLU,
        value: 'euere'
      }],
      nummer: PLU,
      genus: null,
      value: 'euer'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'Ihre'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'Ihr'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'Ihr'
      }, {
        genus: null,
        nummer: PLU,
        value: 'Ihre'
      }],
      nummer: PLU,
      genus: null,
      value: 'Ihr'
    }, {
      deklination: [{
        genus: MAS,
        nummer: SIN,
        value: 'ihre'
      }, {
        genus: FEM,
        nummer: SIN,
        value: 'ihr'
      }, {
        genus: NEU,
        nummer: SIN,
        value: 'ihr'
      }, {
        genus: null,
        nummer: PLU,
        value: 'ihre'
      }],
      nummer: PLU,
      genus: null,
      value: 'ihr'
    }],
    reflexiv: [{
      nummer: SIN,
      genus: MAS,
      value: 'der'
    }, {
      nummer: SIN,
      genus: FEM,
      value: 'die'
    }, {
      nummer: SIN,
      genus: NEU,
      value: 'das'
    }, {
      nummer: PLU,
      genus: null,
      value: 'die'
    }]
  }
};
var akkusativ = {};
var genitiv = {};

var qq = document.querySelectorAll.bind(document);
var q = document.querySelector.bind(document);
var ce = document.createElement.bind(document);

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

q('.fall--nominativ .pronomen .personal').appendChild(pronomenListe(nominativ.pronomen.personal));
