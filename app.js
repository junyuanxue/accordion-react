'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Accordion = require('components/accordionComponent');

var sampleText = [{
  name: 'The Red Woman',
  content: 'The fate of Jon Snow is revealed. Daenerys is brought before Khal Moro. Tyrion gets used to living in Meereen. Ramsay sends his dogs after Theon and Sansa. Ellaria and the Sand Snakes make their move. Cersei mourns for Myrcella.'
}, {
  name: 'Home',
  content: 'Bran trains with the Three-Eyed Raven. Tommen meets with Cersei. Tyrion makes a bold move. Theon leaves while at Pyke new issues arise. Ramsay\'s brother is born. Davos asks Melisandre for a miracle.'
}, {
  name: 'Oathbreaker',
  content: 'Daenerys arrives at Vaes Dothrak. Sam and Gilly sail for Horn Hill. Arya trains as No One. Varys finds information on the Sons of the Harpy. Ramsay receives a gift. Tommen meets with the High Sparrow. At Castle Black, a miracle occurs.'
}, {
  name: 'Book of the Stranger',
  content: 'Sansa arrives at Castle Black. Tyrion makes a deal with the Slave Masters. Jorah and Daario sneak into Vaes Dothrak. Ramsay sends a letter to Jon. Theon arrives at Pyke. Cersei and Olenna Tyrell plot against the High Sparrow.'
}];

ReactDOM.render(<Accordion items={sampleText} />, document.getElementById('view'));
