import { Link, useParams } from "react-router";
import recipeData from "../assets/Data/Recipes.json"
import Button from "../components/Button";

const MisEnPlace = () => {

    const currentRecipe = useParams();

    return (
        <>
            {recipeData.filter(recipe => recipe.recipe_id.toString() === currentRecipe.id).map((recipe) => (
                <div key={recipe.recipe_id} class="flex-col mx-10 my-10">
                    <h2 class="text-2xl font-semi-bold md:pb-7.5 md:text-4xl">{recipe.name}</h2>
                    <div class="bg-stone-200 p-4 rounded-md md:mx-10 my-4">
                        <h3 class="md:text-2xl font-semibold pb-5">Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} class=" has-checked:text-stone-400 ml-3.5 md:text-2xl py-2"><input type="checkbox" class="md:size-5"></input> <label>{ingredient.quantity} {ingredient.unit_of_measure} {ingredient.ingredient}</label></li>
                            ))}
                        </ul>
                    </div>
                    <div class="grid grid-cols-2 md:mx-10">
                        <div class="justify-self-start md:text-2xl">
                        <Button type="button" msg="Back" />
                        </div>
                        <Link class="justify-self-end md:text-2xl" to={`/recipe/walkthrough/${recipe.recipe_id}`}>
                        <Button type="button" msg="Start Cooking!" />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MisEnPlace;