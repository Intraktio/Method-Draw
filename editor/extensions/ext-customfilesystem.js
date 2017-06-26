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
    console.log(canvasMethods);

    var fileMenu = $("#file_menu");
    var toolSave = fileMenu.find("#tool_save");

    fileMenu.find("#tool_clear").hide();
    fileMenu.find("#tool_open").text("Open");
    toolSave.text("Save").addClass("disabled");
    fileMenu.find("#tool_import").insertAfter(fileMenu.find("#tool_save"));

    methodDraw.setCustomHandlers({
        open: function() {
            var dialog = createFileOpenDialog();
        },
        save: function() {
        }
    });

    var files = {
        "floor-0": {
            name: "Floor 0",
            src: ""
        },
        "floor-1": {
            name: "Floor 1",
            src: "maps/floor-1.svg"
        },
        "floor-2": {
            name: "Floor 2",
            src: ""
        }
    };
    var selectedFile = null;

    function openFile(id) {
        selectedFile = files[id];
        toolSave.removeClass("disabled");
        methodDraw.loadFromURL(selectedFile.src, {
            callback: function(success) {
                if (success) {
                    svgCanvas.undoMgr.resetUndoStack();
                }
            }
        });
    }

    function createFileOpenDialog() {
        var content = '<select>';
        for (var k in files) {
            content += '<option value="' + k + '">' + files[k].name + '</option>';
        }
        content += '</select>';
        $.confirm('Select file to edit:\n' + content, function(confirmed) {
            if (!confirmed) {
                return;
            }
            var selected = $('#dialog_content select option:selected');
            if (svgCanvas.undoMgr.getUndoStackSize() === 0 && svgCanvas.undoMgr.getRedoStackSize() === 0) {
                openFile(selected.val())
                return;
            }
            $.confirm(methodDraw.uiStrings.notification.QwantToOpen, function(confirmed) {
                if (confirmed) {
                    openFile(selected.val())
                }
            });
        });
    }

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

