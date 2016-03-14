angular
    .module('models.categories',[])
    .service('CategoriesModel',CategoriesModel)
;

function CategoriesModel($http, $q){
    var model = this,
        URLS = {
            FETCH : 'data/categories.json'
        },
        categories,
        currentCategory;
    
    model.getCategories = getCategories;
    model.getCategoryById = getCategoryById;
    model.setCurrentCategory = setCurrentCategory;
    model.getCurrentCategory = getCurrentCategory;
    model.getCurrentCategoryId = getCurrentCategoryId;
    
    function getCategories(){
        return categories ? $q.when(categories) : $http.get(URLS.FETCH).then(cacheCategories);
    }
    function extract(result){
        return result.data;
    }
    function cacheCategories(result){
        categories = extract(result);
        return categories;
    }
    function getCategoryById(categoryId){
        var deferred = $q.defer();
        function findCategory(){
            return _.find(categories, function(c){
                return c.id == categoryId;
            })
        }
        if(categories){
            deferred.resolve(findCategory());
        } else {
            model.getCategories()
                .then(function(result){
                    deferred.resolve(findCategory());
                })
        }
        return deferred.promise;
    }
    function setCurrentCategory(categoryId){
        return model.getCategoryById(categoryId)
            .then(function(category){
                currentCategory = category;
            })
    }
    function getCurrentCategory(){
        return currentCategory;
    }
    function getCurrentCategoryId(){
        return currentCategory ? currentCategory.id : '';
    }
}