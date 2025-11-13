import { useRecipe } from '../Context/RecipesProvider';
import Button from './Button';

const MealPlanningCard = ({ recipe_id, recipeName, calories, servings, prep_time, cook_time, ingredients, onClick }) => {

    const { removeRecipeFromMealPlan, clearMealPlan } = useRecipe();

    const handleRemove = () => {
        removeRecipeFromMealPlan(recipe_id);
    };

    return (
        <div id={`recipe-${recipe_id}`} className="grid gap-10 md:grid-cols-2 xl:grid-cols-3 min-h-75 bg-stone-200 rounded-md">
            <div className="relative m-10">
                <h1 className="text-2xl font-medium">{recipeName}</h1>
                <h1 className="text-2xl font-light">{calories} Calories</h1>
                <h1 className="text-2xl font-light">Serves: {servings}</h1>
                <h1 className="text-2xl font-light">Prep Time: {prep_time}</h1>
                <h1 className="text-2xl font-light">Cook Time: {cook_time}</h1>
                <div className="absolute mt-5 left-0" onClick={handleRemove}>
                    <Button type="button" msg="Recipe Made!" />
                </div>
            </div>
            <ul className="xl:col-span-2">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="has-checked:text-stone-400 m-5 text-xl xl:text-2xl list-none"><input className="md:size-4 mr-5" type="checkbox" /><label> {ingredient.quantity} {ingredient.unit_of_measure} {ingredient.name}</label></li>
                ))}
            </ul>
        </div>
    )
}

export default MealPlanningCard