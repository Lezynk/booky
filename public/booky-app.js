angular
    .module('Booky',[])
    .controller('MainCtrl', function($scope){
        
        $scope.categories = [
            {'id':0, 'name':'House furniture?'},
            {'id':1, 'name':'Amor gifts ideas'},
            {'id':2, 'name':'Interesting articles'}
        ];
        $scope.bookmarks = [
            {'id':0, 'catId':0, 'title':'Cadeira de Portugal', 'url':'https://www.google.com'},
            {'id':1, 'catId':0, 'title':'Vintage wooden library', 'url':'https://www.google.com'},
            {'id':2, 'catId':1, 'title':'Fantasias de bobices', 'url':'https://www.google.com'},
            {'id':3, 'catId':1, 'title':'Roses', 'url':'https://www.google.com'},
            {'id':4, 'catId':1, 'title':'Geek stuff: Oculus Rift', 'url':'https://www.google.com'},
            {'id':5, 'catId':2, 'title':'Why the world is doomed?', 'url':'https://www.google.com'},
            {'id':6, 'catId':0, 'title':'Why the world is doomed?', 'url':'https://www.google.com'},
            {'id':7, 'catId':0, 'title':'Why the world is doomed?', 'url':'https://www.google.com'},
            {'id':8, 'catId':1, 'title':'Why the world is doomed?', 'url':'https://www.google.com'},
            {'id':9, 'catId':2, 'title':'Why the world is doomed?', 'url':'https://www.google.com'}
        ];
        $scope.currentCategory = $scope.categories[0];
        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
        $scope.isCreating = false;
        $scope.isEditing = false;
        $scope.startCreating = startCreating;
        $scope.startEditing = startEditing;
        $scope.cancel = cancel;
        $scope.createBookmark = createBookmark;
        $scope.editBookmark = editBookmark;
        $scope.editedBookmark = null;
        $scope.originBookmark = null;
        $scope.setEditedBookmark = setEditedBookmark;
        $scope.isSelectedBookmark = isSelectedBookmark;
        $scope.deleteBookmark = deleteBookmark;
        
        function setCurrentCategory(category){
            $scope.currentCategory = category;
            $scope.isCreating = false;
            $scope.isEditing = false;
        }
        function isCurrentCategory(categoryId){
            return categoryId === $scope.currentCategory.id;
        }
        function startCreating(){
            $scope.isCreating = true;
            $scope.isEditing = false;
            resetForm();
        }
        function startEditing(){
            $scope.isCreating = false;
            $scope.isEditing = true;
            resetForm();
        }
        function cancel(){
            $scope.isCreating = false;
            $scope.isEditing = false;
            $scope.editedBookmark = null;
            resetForm();
        }
        function createBookmark(bookmark){
            bookmark.id = $scope.bookmarks.length;
            bookmark.catId = $scope.currentCategoryId;
            $scope.bookmarks.push(bookmark);
            cancel();
        }
        function editBookmark(bookmark){
            $scope.bookmarks[bookmark.id] = bookmark;
            cancel();
            $scope.editedBookmark = null;
        }
        function resetForm(){
            $scope.newBookmark = {
                'title':'',
                'url':''
            }
        }
        function setEditedBookmark(bookmark){
            $scope.originBookmark = bookmark;
            $scope.editedBookmark = angular.copy(bookmark);
        }
        function isSelectedBookmark(bookmarkId){
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        }
        function deleteBookmark(bookmarkId){
            //$scope.bookmarks.splice(bookmarkId,1);
            _.remove($scope.bookmarks, function(b){
                return b.id == bookmarkId;
            });
            cancel();
        }
    })
;