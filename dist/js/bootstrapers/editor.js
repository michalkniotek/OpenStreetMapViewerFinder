'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Generated by CoffeeScript 1.10.0
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var OpenStreetEditor = require('../components/editor').default;
var helper = require('./helper').default;

exports.default = {
  init: function init($textarea) {
    var $componentPlace, coordinates, coordinatesValuesString, error, exception, propsOpenStreetMap;
    propsOpenStreetMap = {
      onUpdate: (function (_this) {
        return function (coord) {
          return $textarea.val(helper.checkIfDefaults(coord) ? '' : JSON.stringify(coord));
        };
      })(this),
      address: $textarea.data('address')
    };
    try {
      coordinatesValuesString = $textarea.val();
      coordinates = $.parseJSON(coordinatesValuesString);
      propsOpenStreetMap.coordinates = coordinates;
    } catch (error) {
      exception = error;
      if (coordinatesValuesString) {
        console.log("Niepoprawny JSON", coordinatesValuesString);
        console.error(exception);
      }
    }
    $componentPlace = $('<div>Renderowanie edytora OpenStreetMaps...</div>');
    $textarea.after($componentPlace).hide();
    if (helper.valid(propsOpenStreetMap.coordinates)) {
      return ReactDOM.render(React.createElement(OpenStreetEditor, propsOpenStreetMap), $componentPlace[0]);
    }
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ25DLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUN6QixJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtBQUM5RCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFBOztrQkFFekI7QUFDYixNQUFJLEVBQUUsY0FBUyxTQUFTLEVBQUU7QUFDeEIsUUFBSSxlQUFlLEVBQUUsV0FBVyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUM7QUFDaEcsc0JBQWtCLEdBQUc7QUFDbkIsY0FBUSxFQUFFLENBQUMsVUFBUyxLQUFLLEVBQUU7QUFDekIsZUFBTyxVQUFTLEtBQUssRUFBRTtBQUNyQixpQkFBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNsRixDQUFDO09BQ0gsQ0FBQSxDQUFFLElBQUksQ0FBQztBQUNSLGFBQU8sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUNuQyxDQUFDO0FBQ0YsUUFBSTtBQUNGLDZCQUF1QixHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMxQyxpQkFBVyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNuRCx3QkFBa0IsQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQzlDLENBQUMsT0FBTyxLQUFLLEVBQUU7QUFDZCxlQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFVBQUksdUJBQXVCLEVBQUU7QUFDM0IsZUFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3pELGVBQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDMUI7S0FDRjtBQUNELG1CQUFlLEdBQUcsQ0FBQyxDQUFDLG1EQUFtRCxDQUFDLENBQUM7QUFDekUsYUFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QyxRQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLEVBQUU7QUFDaEQsYUFBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RztHQUNGO0NBQ0YiLCJmaWxlIjoianMvYm9vdHN0cmFwZXJzL2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBieSBDb2ZmZWVTY3JpcHQgMS4xMC4wXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKVxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKVxudmFyIE9wZW5TdHJlZXRFZGl0b3IgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL2VkaXRvcicpLmRlZmF1bHRcbnZhciBoZWxwZXIgPSByZXF1aXJlKCcuL2hlbHBlcicpLmRlZmF1bHRcblxuZXhwb3J0IGRlZmF1bHQge1xuICBpbml0OiBmdW5jdGlvbigkdGV4dGFyZWEpIHtcbiAgICB2YXIgJGNvbXBvbmVudFBsYWNlLCBjb29yZGluYXRlcywgY29vcmRpbmF0ZXNWYWx1ZXNTdHJpbmcsIGVycm9yLCBleGNlcHRpb24sIHByb3BzT3BlblN0cmVldE1hcDtcbiAgICBwcm9wc09wZW5TdHJlZXRNYXAgPSB7XG4gICAgICBvblVwZGF0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihjb29yZCkge1xuICAgICAgICAgIHJldHVybiAkdGV4dGFyZWEudmFsKGhlbHBlci5jaGVja0lmRGVmYXVsdHMoY29vcmQpID8gJycgOiBKU09OLnN0cmluZ2lmeShjb29yZCkpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksXG4gICAgICBhZGRyZXNzOiAkdGV4dGFyZWEuZGF0YSgnYWRkcmVzcycpXG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgY29vcmRpbmF0ZXNWYWx1ZXNTdHJpbmcgPSAkdGV4dGFyZWEudmFsKCk7XG4gICAgICBjb29yZGluYXRlcyA9ICQucGFyc2VKU09OKGNvb3JkaW5hdGVzVmFsdWVzU3RyaW5nKTtcbiAgICAgIHByb3BzT3BlblN0cmVldE1hcC5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBleGNlcHRpb24gPSBlcnJvcjtcbiAgICAgIGlmIChjb29yZGluYXRlc1ZhbHVlc1N0cmluZykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5pZXBvcHJhd255IEpTT05cIiwgY29vcmRpbmF0ZXNWYWx1ZXNTdHJpbmcpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGV4Y2VwdGlvbik7XG4gICAgICB9XG4gICAgfVxuICAgICRjb21wb25lbnRQbGFjZSA9ICQoJzxkaXY+UmVuZGVyb3dhbmllIGVkeXRvcmEgT3BlblN0cmVldE1hcHMuLi48L2Rpdj4nKTtcbiAgICAkdGV4dGFyZWEuYWZ0ZXIoJGNvbXBvbmVudFBsYWNlKS5oaWRlKCk7XG4gICAgaWYgKGhlbHBlci52YWxpZChwcm9wc09wZW5TdHJlZXRNYXAuY29vcmRpbmF0ZXMpKSB7XG4gICAgICByZXR1cm4gUmVhY3RET00ucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoT3BlblN0cmVldEVkaXRvciwgcHJvcHNPcGVuU3RyZWV0TWFwKSwgJGNvbXBvbmVudFBsYWNlWzBdKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==