define [
  'jquery', 'sugar'
], ($)->
  valid: (coordinates)->
    valid =
      not coordinates? or
      coordinates.x1 and coordinates.x2 and coordinates.x3 and coordinates.y1 and coordinates.y2 and coordinates.y3 and
      Object.values(coordinates).every $.isNumeric
    #!!!@DEV
    unless valid
      console.log('Niepoprawny format danych coordynatów do openStreetMap (zobacz OpenStreetMap/viewer.coffee):', coordinates)
    #!!!
    valid

  checkIfDefaults: (coordinates)->
    parseFloat(coordinates.x1) is 0 and parseFloat(coordinates.x2) is 0 and parseFloat(coordinates.x3) is 0 and
    parseFloat(coordinates.y1) is 0 and parseFloat(coordinates.y2) is 0 and parseFloat(coordinates.y3) is 0