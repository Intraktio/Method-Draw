/*
 * ext-helloworld.js
 *
 * Licensed under the Apache License, Version 2
 *
 * Copyright(c) 2010 Alexis Deveria
 *
 */
 
/* 
  This is a very basic SVG-Edit extension. It adds a "Hello World" button in
  the left panel. Clicking on the button, and then the canvas will show the
  user the point on the canvas that was clicked on.
*/
 
methodDraw.addExtension("Custom filesystem", function(canvasMethods) {

    var fileMenu = $("#file_menu");
    fileMenu.find("#tool_clear").hide();
    fileMenu.find("#tool_open").text("Open");
    fileMenu.find("#tool_save").text("Save");
    fileMenu.find("#tool_import").insertAfter(fileMenu.find("#tool_save"));

    methodDraw.setCustomHandlers({
        open: function() {
        },
        save: function() {
        }
    });

    return {
      name: "Hello World",
      // For more notes on how to make an icon file, see the source of
      // the hellorworld-icon.xml
      svgicons: "extensions/helloworld-icon.xml",
      
      // Multiple buttons can be added in this array
      buttons: [{
        // Must match the icon ID in helloworld-icon.xml
        id: "hello_world", 
        
        // This indicates that the button will be added to the "mode"
        // button panel on the left side
        type: "mode", 
        
        // Tooltip text
        title: "Say 'Hello World'", 
        
        // Events
        events: {
          'click': function() {
            // The action taken when the button is clicked on.
            // For "mode" buttons, any other button will 
            // automatically be de-pressed.
            svgCanvas.setMode("hello_world");
          }
        }
      }],
    };
});

