import { use, useEffect, useState } from "react";
import { createContext } from "react";

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    let [mealPlan, setMealPlan] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("/src/assets/data/Recipes.json");
                const data = await response.json();
                setRecipes(data);
            } catch (error) {
                console.error("Error loading recipes:", error);
            } finally {
                setLoading(false);
            };
        };

        fetchRecipes();
    }, []);

    const addRecipe = (recipe) => {
        setRecipes((prev) => [...prev, { recipe_id: Date.now(), ...recipe }])
    }

    const editRecipe = (updatedRecipe) => {
        setRecipes((prev) =>
            prev.map((recipe) => (recipe.recipe_id === updatedRecipe.recipe_id ? updatedRecipe : recipe))
        );
    }

    const deleteRecipe = (id) => {
        setRecipes((prev) => prev.filter((recipe) => recipe.recipe_id !== id));
    };


    const addRecipeToMealPlan = (id) => {
        setMealPlan((prev) =>
            prev.includes(id) ? prev : [...prev, id]);
    };

    const removeRecipeFromMealPlan = (recipeId) => {
        setMealPlan((prev) => prev.filter((mealPlanId) => mealPlanId !== recipeId))
    };

    const clearMealPlan = () => setMealPlan([]);

    return (
        <RecipeContext value={{ recipes, loading, addRecipe, editRecipe, deleteRecipe, mealPlan, addRecipeToMealPlan, removeRecipeFromMealPlan, clearMealPlan }}>
            {children}
        </RecipeContext>
    )
};

export const useRecipe = () => use(RecipeContext);