angular
    .module('categories',[
        'models.categories'    
    ])
    .config(config)
    .controller('CategoriesCtrl', CategoriesCtrl)
;

function config($stateProvider){
    $stateProvider
        .state('booky.main',{
            url:'/',
            views: {
                'categories@':{
                    controller:'CategoriesCtrl as categoriesCtrl',
                    templateUrl:'angular/categories/categories.tmpl.html'
                },
                'bookmarks@':{
                    controller:'BookmarksCtrl as bookmarksCtrl',
                    templateUrl:'angular/categories/bookmarks/bookmarks.tmpl.html'
                }
            }
        })
    ;
}

function CategoriesCtrl(CategoriesModel){
    var categoriesCtrl = this;
    CategoriesModel
        .getCategories()
        .then(function(result){
            categoriesCtrl.categories = result;
        })
    ;
}