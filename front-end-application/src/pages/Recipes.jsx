import RecipeCard from "../components/RecipeCard"
import RecipeData from "../assets/Data/Recipes.json"

const Recipes = () => {
    return (
        <>
        <div class="bg-stone-200 p-4 mx-10 mt-10 rounded-lg text-center md:text-left">
        <h1>Name</h1>
        <h2>username</h2>
        <h2>Number of Recipes</h2>
        </div>
        <div class="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 mb-10">
            {RecipeData.map((recipe) => (
                <RecipeCard 
                    id={recipe.recipe_id}
                    name={recipe.name}
                    servings={recipe.servings}
                    calories={recipe.calories}
                    prepTime={recipe.prep_time}
                    cookTime={recipe.cook_time}
                />
            ))}
        </div>
        </>
    )
}

export default Recipes;