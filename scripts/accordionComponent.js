'use strict';

var React = require('react');

var Accordion = React.createClass({
  render: function () {
    var panes = [];
    var data = this.props.data || [];

    var getContent = function (item) {
      return !item.showOnLoad ? '' : (
        <div className="accordion-content">
          {item.content}
        </div>
      );
    };

    data.forEach(function (item, index) {
      panes.push(
        <div key={index}>
          <div className="accordion-header">
            {item.name}
          </div>
          { getContent(item) }
        </div>
      );
    });

    return (
      <div className="accordion">
        {panes}
      </div>
    );
  }
});

module.exports = Accordion;
