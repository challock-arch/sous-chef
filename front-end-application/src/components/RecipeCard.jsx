import { Link } from "react-router";
import Button from "./Button";

const RecipeCard = ({name, prepTime, cookTime, servings, calories}) => {
    return (
        <div class="bg-stone-200 rounded-md p-4">
            {/* TODO: Add destructured props to function and feed into card*/}
            <h1 class="font-semibold">{name}</h1>
            <h2 class="text-stone-400">Serves: {servings}</h2>
            <h2 class="text-stone-400">Calories: {calories}</h2>
            <h2 class="text-stone-400">Prep Time: {prepTime}</h2>
            <h2 class="text-stone-400">Cook Time: {cookTime}</h2>
            <br />
            <Link to="/recipe/{id}"><Button type="button" msg="Make It!" /></Link>
        </div>
    )
}

export default RecipeCard;