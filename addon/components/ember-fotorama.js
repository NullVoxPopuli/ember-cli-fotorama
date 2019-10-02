import Ember from 'ember';
import layout from '../templates/components/ember-fotorama';

export default Ember.Component.extend({
    layout: layout,
    didInsertElement: function() {
        this.element.querySelectorAll('.fotorama-cotainer').forEach(el => el.addEventListener());
    }
});
