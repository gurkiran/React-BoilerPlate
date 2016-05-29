var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render : function(){
    var list = this.props.thumbnailData.map(function(thumbnailprops){
      return <Thumbnail {...thumbnailprops} />
    });
    return <div>
      {list}
    </div>
  }
});
