import Button from "../components/Button";
import RecipeData from "../assets/Data/Recipes.json"
import MealPlanningCard from "../components/MealPlanningCard";

const MealPlanning = () => {

    let recipeQueue = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked!')
    }

    return (
        <div className="mb-30">
            <h1 className="text-2xl text-center mt-10 mb-10">Meal Planning & Shopping List</h1>
            <div className="m-10 bg-stone-200 rounded-md">
                <MealPlanningCard />
            </div>
            <form className="grid grid-cols-2" onSubmit={handleSubmit}>
                <select id="recipe-select" className="ml-10 border-2 rounded-md border-stone-200">
                    <option>Select a Recipe...</option>
                    {RecipeData.map((recipe) => (
                        <option key={`${recipe.recipe_id}`} id={`recipe-${recipe.recipe_id}`}>{recipe.name}</option>
                    ))}
                </select>
                <div className="place-self-center">
                    <Button type="submit" msg="Add Recipe" />
                </div>
            </form>
        </div>
    )
}

export default MealPlanning;