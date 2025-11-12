import RecipeData from '../assets/Data/Recipes.json'

const MealPlanningCard = () => {

    const {recipe_id, name, calories, servings, prep_time, cook_time} = RecipeData;

    return (
        <div className = "grid md:grid-cols-2 xl:grid-cols-3">
        <div className="m-10 bg-stone-200 rounded-md p-4">
            <h1 className="text-2xl font-medium">{RecipeData[0].name}</h1>
            <h1 className="text-2xl font-light">{RecipeData[0].calories} Calories</h1>
            <h1 className="text-2xl font-light">Serves: {RecipeData[0].servings}</h1>
            <h1 className="text-2xl font-light">Prep Time: {RecipeData[0].prep_time}</h1>
            <h1 className="text-2xl font-light">Cook Time: {RecipeData[0].cook_time}</h1>
        </div>
        <ul>
        {RecipeData[0].ingredients.map((ingredient) => (
            <li className="has-checked:text-stone-400 m-5 text-xl md:text-2xl list-none"><h2><input className="md:size-4 mr-5" type="checkbox" /> {ingredient.quantity} {ingredient.unit_of_measure} {ingredient.ingredient}</h2></li>
        ))}
        </ul>
        </div>
    )
}

export default MealPlanningCard