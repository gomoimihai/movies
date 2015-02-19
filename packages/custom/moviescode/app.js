'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Moviescode = new Module('moviescode');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Moviescode.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Moviescode.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Moviescode.menus.add({
    title: 'moviescode example page',
    link: 'moviescode example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Moviescode.aggregateAsset('css', 'moviescode.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Moviescode.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Moviescode.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Moviescode.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Moviescode;
});
