# Project 2
+ By: Laura Filmeyer

## Pages summary
* Home - describes the purpose of the app, and lets the user find a random recipe
* List Recipes - lists all recipes, lets the user browse, filter by category, links to Show Recipe page
* Show Recipe - displays details for a single recipe, including its ingredients, how many times it has been made, where the recipe can be found (if from book or website), etc.
* Add a Recipe - user can create a new recipe

## SFC summary
* App.vue - provides a wrapper for each page, provides navigation
* HomePage.vue - Home page
* RecipesPage.vue - List Recipes page
* RecipePage.vue - Show Recipe page
* RecipeCreatePage.vue - Add a Recipe page

## Server interaction
* Home
  * fetches all recipes from Firebase, then randomly chooses one when "Find random recipe" button is clicked
* List Recipes
  * fetches all recipes from Firebase, then displays their name & a link using the recipe uuid
  * uses recipe categories to populate filter dropdown
* Show Recipe
  * fetches the recipe from Firebase using its uuid, then displays information from it
* Add a Recipe
  * fetches all recipes from Firebase to populate form options with existing data (ex. categories)
  * when user fills in form and clicks Add, recipe is posted to Firebase and persisted

## Outside resources
* vue-multiselect: <https://vue-multiselect.js.org>
  * used in Add a Recipe form inputs
  * used in List Recipes category filter
* vue-uuid: <https://www.npmjs.com/package/vue-uuid>
  * used in Add a Recipe to auto-generate UUIDs as the id for the new recipe
* Blog post <https://exploringjs.com/impatient-js/ch_sets.html#missing-set-operations>
  * JS code to find intersection of two sets
