//recipe_query.js

angular.module('ChumpChangeChowChamberApp')
  .factory('recipeQuery', function recipeQueryFactory(  ) {
    console.log('recipeQueryFactory()', arguments );
    return  {
      getIngredientQueryParam : function ( ingredient ) {
        return {
          'allowedIngredient[]':ingredient.toLowerCase().trim()
        };
      },
      getSearchPhrase : function ( phrase ) {
        return {
          q:phrase
        }
      },
      pantryArray : ['onion','garlic'],
      fridgArray : ['milk'],
      searchPhrase : 'soup',
      getQueryStringObj : function ( ingredientIndex ) {
        var _qso = angular.extend({}, this.getSearchPhrase(this.searchPhrase) );
        if ( ingredientIndex != null && ingredientIndex >=0 && ingredientIndex < this.pantryArray.length ) {
          _qso = angular.extend(_qso,  this.getIngredientQueryParam(this.pantryArray[ingredientIndex]) );
        };
       
       console.log("getQueryStringObj: ", _qso);
        return _qso;
      }
    }
  });