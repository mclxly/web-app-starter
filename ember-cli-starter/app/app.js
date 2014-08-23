import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'stt-admin-2014', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'stt-admin-2014');

export default App;
