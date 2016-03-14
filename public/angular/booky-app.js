angular
    .module('Booky',[
        'ui.router',
        'categories',
        'bookmarks'
    ])
    .config(config)
;

function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/categories/0');
    $stateProvider
        .state('booky', {
            url: '',
            abstract: true
        });
}