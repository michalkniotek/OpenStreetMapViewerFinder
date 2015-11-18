define [
  'react', 'jquery','shared/erk/components/openStreetMap/editor','./helper',
], (React, $, OpenStreetEditor, helper)->
  init: ($textarea)->
    propsOpenStreetMap =
      onUpdate: (coord)=>
        $textarea.val(if helper.checkIfDefaults(coord) then '' else JSON.stringify(coord))
      address: $textarea.data('address')

    try
      coordinatesValuesString = $textarea.val()
      coordinates = $.parseJSON(coordinatesValuesString)
      propsOpenStreetMap.coordinates = coordinates

    catch exception
      #!!!@DEV
      if coordinatesValuesString
        console.log "Niepoprawny JSON", coordinatesValuesString
        console.error exception
      #!!!

    $componentPlace = $('<div>Renderowanie edytora OpenStreetMaps...</div>')
    $textarea.after($componentPlace).hide()

    if helper.valid(propsOpenStreetMap.coordinates)
      React.render(
        React.createElement(OpenStreetEditor,
          propsOpenStreetMap
        ),
        $componentPlace[0]
      )