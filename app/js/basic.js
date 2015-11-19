require('sugar')

var editor = require('./bootstrapers/editor').default
var viewer = require('./bootstrapers/viewer').default
var $= require('jquery')

editor.init($('#editor1'))
viewer.init($('#viewer1'))
viewer.init($('#viewer2'))

console.log("hello")
