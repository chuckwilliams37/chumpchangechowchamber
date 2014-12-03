//recipe_query.js

angular.module('ChumpChangeChowChamberApp')
  .factory('recipeQuery', function recipeQueryFactory(  ) {
    console.log('recipeQueryFactory()', arguments );
    return  {
      newQuery : function ( ingredient ) {
        return {
          'allowedIngredient[]' : ingredient
        }
      }
    }
  });