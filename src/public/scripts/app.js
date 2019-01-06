/**
 * App module
 */
(() => {
  window.app = angular.module('deeplink', ['ui.router']).run(run);

  function run($rootScope, $transitions) {
    console.log($transitions);
  }
})();

/**
 * Routing
 */
(() => {
  // const urlPrefix = 'angularjs';
  const urlPrefix = '';
  app.config(($stateProvider) => {

    const homeState = {
      name: 'home',
      url: `${urlPrefix}/home`,
      component: 'home'
    }

    const comonentState = {
      name: 'component',
      url: `${urlPrefix}/component`,
      component: 'sampleComponent'
    }

    const faq = {
      name: 'faq',
      url: `${urlPrefix}/faq`,
      component: 'faq'
    }

    const start = {
      name: 'default',
      url: '',
      component: 'home'
    }

    $stateProvider.state(start);
    $stateProvider.state(homeState);
    $stateProvider.state(comonentState);
    $stateProvider.state(faq);

  });

  app.config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

})(window.app);

/**
 * HomeComponent
 */
(() => {
  angular.module('deeplink').component('home', {
    template: `<h2>{{$ctrl.title}}</h2>`,

    controller: function ($rootScope) {
      console.log($rootScope);
      this.title = "Welcome to my humble home";
    }
  });
})();

/**
 * sampleComponent
 */
(() => {
  angular.module('deeplink').component('sampleComponent', {
    template: '<h2>{{$ctrl.text}}</h2>',

    controller: function () {
      this.text = "I am a sample component";
    }
  });
})();

/**
 * FAQ Component
 */
(() => {
  angular.module('deeplink').component('faq', {
    template: '<h2>{{$ctrl.title}}</h2> <p>{{$ctrl.content}}</p>',

    controller: function () {
      this.title = "FAQ";
      this.content = "Ask me no question and I'll tell you no lies";
    }
  });
})();
