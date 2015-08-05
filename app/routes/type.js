import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('type', params.id);
  },

  recipes: function(params){
    return this.store.find('recipe').then(recipes => {
      return recipes.filterBy
    })
  }
});

// TypesRoute = Ember.Route.extend({
//   model: function(params) { return this.store.find('types', params.id) }
// });