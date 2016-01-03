var React = require('react');

var $ = jQuery = require('jquery');
window.jQuery = $;

var menuButtonStyle = {
  top: '5.5em',
  left: '0',
  width: '100',
  zIndex: '1000',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

var MenuButton = React.createClass({
  componentDidMount: function() {
    $('.menu-button').on('click', function(){
      $('.ui.sidebar.inverted.vertical.menu')
        .sidebar('toggle');
    });
  },

  render: function() {
    return (
      <button className="menu-button ui black big launch right attached fixed button" style={menuButtonStyle} >
        <i className="content icon"/>
        <span className="text">Menu</span>
      </button>
    );
  }
});

module.exports = MenuButton;