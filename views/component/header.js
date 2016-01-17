var React = require('react');

var headerContainerStyle = {
  margin: '1.8em 1.8em 40px 1.8em',
  fontSize: '1.6em'
};

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui container" style={headerContainerStyle}>
          <h3 className="ui center aligned dividing huge header" >
            {this.props.children}
          </h3>
        </div>
      </div>
    );
  }
});

module.exports = Header;