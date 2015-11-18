define [
  'react','jquery'
], (React, $)->
  delimit = ','
  React.createClass
    displayName: 'openStreetMapViewer'
    getDefaultProps: ->
      coordinates:
        x1: 0.0 # długość geograficzna 1
        x2: 0.0 # długość geograficzna 2
        x3: 0.0 # długośc geograficzna znacznika
        y1: 0.0 # szerokość geograficzna 1
        y2: 0.0 # szerokość geograficzna 2
        y3: 0.0 # szerkość geograficzna znacznika
      size:
        width: 425
        height: 350

    render: ->
      {div, a, iframe, small} = React.DOM
      boundaries = [
        @props.coordinates.x1
        @props.coordinates.y1
        @props.coordinates.x2
        @props.coordinates.y2
      ].join delimit

      marker = [
        @props.coordinates.y3
        @props.coordinates.x3
      ].join delimit

      params = $.param
        bbox: boundaries
        layer: "mapnik"
        marker: marker

      paramsLargerMap = $.param
        mlat: @props.coordinates.y3
        mlon: @props.coordinates.x3
        layer: "mapnik"


      div null,
        (iframe
          width: @props.size.width
          height: @props.size.height
          frameBorder: 0
          src: "https://www.openstreetmap.org/export/embed.html?#{params}"
          marginWidth: 0
          marginHeight: 0
          scrolling: "no"
          ),
        div null,
          small null,
            a {
              href: "https://www.openstreetmap.org/?#{paramsLargerMap}"
              target: "_blank"
            },
              "Open Street Map"

