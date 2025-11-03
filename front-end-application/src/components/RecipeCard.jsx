import { Link } from "react-router";
import Button from "./Button";

const RecipeCard = ({id, name, prepTime, cookTime, servings, calories}) => {
    return (
        <div key={id} itemID={id} class="bg-stone-200 rounded-md p-4">
            <h1 class="font-semibold">{name}</h1>
            <h2 class="text-stone-400">Serves: {servings}</h2>
            <h2 class="text-stone-400">Calories: {calories}</h2>
            <h2 class="text-stone-400">Prep Time: {prepTime}</h2>
            <h2 class="text-stone-400">Cook Time: {cookTime}</h2>
            <br />
            <div class="flex justify-around items-center">
            <Link to={`/recipe/${id}`}><Button type="button" msg="Make It!" /></Link>
            <i class="fa-solid fa-pencil fa-xl"></i>
            <i class="fa-solid fa-trash-can fa-xl"></i>
            </div>
        </div>
    )
}

export default RecipeCard;