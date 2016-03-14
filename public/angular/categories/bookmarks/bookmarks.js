angular
    .module('bookmarks',[
        'bookmarks.edit',
        'bookmarks.create',
        'models.categories',
        'models.bookmarks'
    ])
    .config(config)
    .controller('BookmarksCtrl',BookmarksCtrl)
;

function config($stateProvider){
    $stateProvider
        .state('booky.main.bookmarks',{
            url:'categories/:categoryId',
            views:{
                'bookmarks@':{
                    templateUrl:'angular/categories/bookmarks/bookmarks.tmpl.html',
                    controller:'BookmarksCtrl as bookmarksCtrl'
                }
            }
        })
    ;
}

function BookmarksCtrl($stateParams, BookmarksModel, CategoriesModel){
    var bookmarksCtrl = this;
   
    CategoriesModel.setCurrentCategory($stateParams.categoryId);
    
    bookmarksCtrl.getCurrentCategory = CategoriesModel.getCurrentCategory;
    bookmarksCtrl.getCurrentCategoryId = CategoriesModel.getCurrentCategoryId;
    bookmarksCtrl.deleteBookmark = BookmarksModel.deleteBookmark;
    
    BookmarksModel
        .getBookmarks()
        .then(function(bookmarks){
            bookmarksCtrl.bookmarks = bookmarks;
        })
    ;

}