import Ember from 'ember';
import layout from '../templates/components/ember-fotorama';

export default Ember.Component.extend({
    layout: layout,
    didInsertElement: function() {
        this.$('.fotorama-cotainer').fotorama();
    }
});
