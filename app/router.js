import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('recipes');
  this.route('types', { path: '/' });
  this.resource('type', {path: '/types/:id'})
});

export default Router;
