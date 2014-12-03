//recipe_query.js

angular.module('ChumpChangeChowChamberApp')
  .factory('recipeQuery', function recipeQueryFactory(  ) {
    console.log('recipeQueryFactory()', arguments );
    return  {
      getIngredientQueryParam : function ( ingredient ) {
        return {'allowedIngredient[]':ingredient.toLowerCase()};
      }
    }
  });