var React = require('react');

var headerContainerStyle = {
  margin: '1.8em',
  fontSize: '2em'
};

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <div className="ui container" style={headerContainerStyle}>
          <h1 className="ui center aligned dividing huge header" >
            {this.props.children}
          </h1>
        </div>
      </div>
    );
  }
});

module.exports = Header;