import { Link, useParams } from "react-router";
import Button from "../components/Button";
import { useRecipe } from "../Context/RecipesProvider";

const MisEnPlace = () => {

    const {recipes} = useRecipe();

    const currentRecipe = useParams();

    return (
        <>
            {recipes.filter(recipe => recipe.recipe_id.toString() === currentRecipe.id).map((recipe) => (
                <div key={recipe.recipe_id} className="flex-col mx-10 my-10">
                    <h2 className="text-2xl font-semi-bold md:pb-7.5 md:text-4xl">{recipe.name}</h2>
                    <div className="bg-stone-200 p-4 rounded-md md:mx-10 my-4">
                        <h3 className="md:text-2xl font-semibold pb-5">Ingredients:</h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index} className=" has-checked:text-stone-400 ml-3.5 md:text-2xl py-2"><input type="checkbox" className="md:size-5"></input> <label>{ingredient.quantity} {ingredient.unit_of_measure} {ingredient.ingredient}</label></li>
                            ))}
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 md:mx-10">
                        <Link to="/recipes" className="justify-self-start">
                        <Button type="button" msg="Back" />
                        </Link>
                        <Link className="justify-self-end" to={`/recipe/walkthrough/${recipe.recipe_id}`}>
                        <Button type="button" msg="Start Cooking!" />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MisEnPlace;