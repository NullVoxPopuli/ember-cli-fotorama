// blueprints/ember-pikaday/index.js

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('fotorama');
  }
};
