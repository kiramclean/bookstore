import DS from 'ember-data';
import Publisher from './publisher'
import Ember from 'ember'

export default Publisher.extend({
  name: DS.attr('string'),
  books: DS.hasMany('book', { async: true }),
  loadedAt: Ember.on('didLoad', function() {
    this.set('loadedAt', new Date())
  })
});
