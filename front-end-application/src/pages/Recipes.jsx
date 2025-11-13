import { Link } from "react-router";
import RecipeCard from "../components/RecipeCard";
import { useRecipe } from "../Context/RecipesProvider";

const Recipes = () => {

    const { recipes } = useRecipe();

    return (
        <>
        {/* FUTURE: To add when user profiles and Auth is incorporated */}
            {/* <div className="bg-stone-200 p-4 mx-10 mt-10 rounded-lg text-center md:text-left">
                <h1>Name</h1>
                <h2>username</h2>
                <h2>Number of Recipes</h2>
            </div> */}
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mb-30">
                {recipes.map((recipe) => (
                    <RecipeCard
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.recipe_name}
                        servings={recipe.servings}
                        calories={recipe.calories}
                        prepTime={recipe.prep_time_minutes}
                        cookTime={recipe.cook_time_minutes}
                    />
                ))}
            </div>
            <Link to="/newRecipe">
                <div className="fixed bottom-20 right-10 px-3 py-4 rounded-full bg-lime-950">
                    <i className="fa-solid fa-clone fa-2xl text-stone-200"></i>
                </div>
            </Link>
        </>
    )
}

export default Recipes;