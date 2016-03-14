angular
    .module('bookmarks.create',[])
    .config(config)
    .controller('CreateBookmarkCtrl',CreateBookmarkCtrl)
;

function config($stateProvider){
    $stateProvider
        .state('booky.main.bookmarks.create',{
            url:'/bookmarks/create',
            templateUrl:'angular/categories/bookmarks/create/bookmark-create.tmpl.html',
            controller:'CreateBookmarkCtrl as createBookmarkCtrl'
        })
    ;
}

function CreateBookmarkCtrl($state, $stateParams, BookmarksModel){
    var createBookmarkCtrl = this;
    
    createBookmarkCtrl.cancelCreating = cancelCreating;
    createBookmarkCtrl.createBookmark = createBookmark;
    
    resetForm();
    
    function returnToBookmarks(){
        $state.go('booky.main.bookmarks',{
            categoryId: $stateParams.categoryId
        })
    }
    function cancelCreating(){
        returnToBookmarks();
    }
    function createBookmark(bookmark){
        BookmarksModel.createBookmark(bookmark);
        returnToBookmarks();
    }
    function resetForm(){
        createBookmarkCtrl.newBookmark = {
            title:'',
            url:'',
            catId:$stateParams.categoryId
        }
        
    }
}