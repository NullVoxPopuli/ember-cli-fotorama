/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-fotorama',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/fotorama/fotorama.png');
    app.import('bower_components/fotorama/fotorama@2x.png');

    app.import('bower_components/fotorama/fotorama.css');
    app.import('bower_components/fotorama/fotorama.js');

  }

};
