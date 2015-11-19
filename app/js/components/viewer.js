// Generated by CoffeeScript 1.10.0
var React = require('react')
var $ = require('jquery')


var delimit;
delimit = ',';
export default React.createClass({
  displayName: 'openStreetMapViewer',
  getDefaultProps: function() {
    return {
      coordinates: {
        x1: 0.0,
        x2: 0.0,
        x3: 0.0,
        y1: 0.0,
        y2: 0.0,
        y3: 0.0
      },
      size: {
        width: 425,
        height: 350
      }
    };
  },
  render: function() {
    var a, boundaries, div, iframe, marker, params, paramsLargerMap, ref, small;
    ref = React.DOM, div = ref.div, a = ref.a, iframe = ref.iframe, small = ref.small;
    boundaries = [this.props.coordinates.x1, this.props.coordinates.y1, this.props.coordinates.x2, this.props.coordinates.y2].join(delimit);
    marker = [this.props.coordinates.y3, this.props.coordinates.x3].join(delimit);
    params = $.param({
      bbox: boundaries,
      layer: "mapnik",
      marker: marker
    });
    paramsLargerMap = $.param({
      mlat: this.props.coordinates.y3,
      mlon: this.props.coordinates.x3,
      layer: "mapnik"
    });
    return div(null, iframe({
      width: this.props.size.width,
      height: this.props.size.height,
      frameBorder: 0,
      src: "https://www.openstreetmap.org/export/embed.html?" + params,
      marginWidth: 0,
      marginHeight: 0,
      scrolling: "no"
    }), div(null, small(null, a({
      href: "https://www.openstreetmap.org/?" + paramsLargerMap,
      target: "_blank"
    }, "Open Street Map"))));
  }
})

