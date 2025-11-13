import Button from "../components/Button";
import MealPlanningCard from "../components/MealPlanningCard";
import { useRecipe } from "../Context/RecipesProvider";

const MealPlanning = () => {
    //FUTURE: persist mealPlan data after refresh with additional logic
    const { recipes, clearMealPlan, mealPlan } = useRecipe();

    const mealPlanRecipes = recipes.filter((recipe) => mealPlan.includes(recipe.id));

    const handleClear = () => {
        clearMealPlan();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="mb-30">
            <h1 className="text-2xl text-center mt-10 mb-10">Meal Planning & Shopping List</h1>
            <div className="grid grid-cols-1 gap-10 m-10 rounded-md">
                {mealPlanRecipes.map((recipe) => (
                    <MealPlanningCard
                        key={recipe.id}
                        recipe_id={recipe.id}
                        recipeName={recipe.name}
                        calories={recipe.calories}
                        servings={recipe.servings}
                        prep_time={recipe.prep_time}
                        cook_time={recipe.cook_time}
                        ingredients={recipe.ingredients}
                    />
                ))}
            </div>
            <div className="absolute place-self-center" onClick={handleClear}>
                <Button type="button" msg="Clear Meal Plan" />
            </div>
        </div>
    )
}

export default MealPlanning;