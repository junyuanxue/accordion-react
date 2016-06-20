'use strict';

var React = require('react');

var Pane = React.createClass({
  getInitialState: function () {
    return {
      show: this.props.item.showOnLoad
    }
  },

  toggle: function () {
    this.setState({
      show: !this.state.show
    })
  },

  render: function () {
    var getContent = (function (item) {
      return this.state.show
      ? <p className='accordion-content'>
          {item.content}
        </p>
      : ''
    }).bind(this);

    var item = this.props.item;

    return (
      <div>
        <h2 className='accordion-header' onClick={this.toggle}>
          {item.name}
        </h2>
        { getContent(item) }
      </div>
    )
  }
});

var Accordion = React.createClass({
  render: function () {
    var panes = [];
    var items = this.props.items || [];

    items.forEach(function (item, index) {
      panes.push(
        <div key={index}>
          <Pane item={item} key={index} />
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
