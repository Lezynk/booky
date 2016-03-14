angular
    .module('bookmarks.edit',[])
    .config(config)
    .controller('EditBookmarkCtrl',EditBookmarkCtrl)
;

function config($stateProvider){
    $stateProvider
        .state('booky.main.bookmarks.edit',{
            url:'/bookmarks/:bookmarkId/edit',
            templateUrl:'angular/categories/bookmarks/edit/bookmark-edit.tmpl.html',
            controller:'EditBookmarkCtrl as editBookmarkCtrl'
        })
    ;
}

function EditBookmarkCtrl($state, $stateParams, BookmarksModel){
    var editBookmarkCtrl = this;
    
    editBookmarkCtrl.cancelEditing = cancelEditing;
    editBookmarkCtrl.updateBookmark = updateBookmark;
    
    BookmarksModel
        .getBookmarkById($stateParams.bookmarkId)
        .then(function(bookmark){
            if(bookmark){
                editBookmarkCtrl.bookmark = bookmark;
                editBookmarkCtrl.editedBookmark = angular.copy(bookmark);
            } else {
                returnToBookmarks();
            }
        })
    ;
    
    function returnToBookmarks(){
        $state.go('booky.main.bookmarks',{
            categoryId:$stateParams.categoryId
        });
    }
    function cancelEditing(){
        returnToBookmarks();
    }
    function updateBookmark(bookmark){
        BookmarksModel.updateBookmark(editBookmarkCtrl.editedBookmark);
        returnToBookmarks();
    }
}