define [
  'react', 'jquery','shared/erk/components/openStreetMap/viewer','./helper', 'sugar',
], (React, $, OpenStreetViewer, helper)->
  init: ($node)->
    coordinates = $node.data('coordinates')
    if helper.valid(coordinates)
      React.render(
        React.createElement(OpenStreetViewer,
          coordinates: coordinates
        ),
        $node[0]
      )