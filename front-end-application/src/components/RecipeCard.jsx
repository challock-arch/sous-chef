import { Link } from "react-router";
import Button from "./Button";
import { useRecipe } from "../Context/RecipesProvider";

const RecipeCard = ({ id, name, prepTime, cookTime, servings, calories }) => {

    const { deleteRecipe, mealPlan, addRecipeToMealPlan, removeRecipeFromMealPlan } = useRecipe();

    const handleMealPlanAdd = () => {
        !mealPlan.includes(id) ?
            addRecipeToMealPlan(id) :
            removeRecipeFromMealPlan(id)
    };

    const handleDelete = () => {
        deleteRecipe(id);
    };

    return (
        <div id={`recipe-${id}`} className="bg-stone-200 rounded-md p-4">
            <div className="relative grid grid-cols-3">
                <div className="col-span-2">
                    <h1 className="font-semibold">{name}</h1>
                    <h2 className="text-stone-400">Serves: {servings}</h2>
                    <h2 className="text-stone-400">Calories: {calories}</h2>
                    <h2 className="text-stone-400">Prep Time: {prepTime}</h2>
                    <h2 className="text-stone-400">Cook Time: {cookTime}</h2>
                    <br />
                </div>
                <div className="absolute top-0 place-self-end">
                    <i className={`${mealPlan.includes(id) ? "fa-check" : "fa-plus"} fa-solid fa-xl text-lime-950`} onClick={handleMealPlanAdd}></i>
                </div>
            </div>

            <div className="flex justify-around items-center">
                <Link to={`/recipe/${id}`}><Button type="button" msg="Make It!" /></Link>
                <Link to={`/editRecipe/${id}`}><i className="fa-solid fa-pencil fa-xl text-lime-950"></i></Link>
                <i className="fa-solid fa-trash-can fa-xl text-lime-950" onClick={handleDelete}></i>
            </div>
        </div>
    )
}

export default RecipeCard;