import { use, useEffect, useState } from "react";
import { createContext } from "react";

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    let [mealPlan, setMealPlan] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchRecipes = async () => {
        try {
            const response = await fetch("http://localhost:8080/recipes");
            const data = await response.json();
            setRecipes(data);
        } catch (error) {
            console.error("Error loading recipes:", error);
        } finally {
            setLoading(false);
        };
    };
    
    useEffect(() => {
        fetchRecipes();
    }, []);

    const addRecipe = async (newRecipe) => {
        try {
            const response = await fetch("http://localhost:8080/recipes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newRecipe),
            });
            if (!response.ok) throw new Error("Failed to add recipe");
            const created = await response.json();
            setRecipes((prev) => [...prev, created]);
        } catch (error) {
            console.error('Failed to Save Recipe', error);
        } finally {
            fetchRecipes();
        }
    };

    const editRecipe = async (id, updatedRecipe) => {

        try {
            const response = await fetch(`http://localhost:8080/recipes/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedRecipe),
            });
            if (!response.ok) throw new Error("Error updating Recipe");
            const updated = await response.json();
            setRecipes((prev) =>
                prev.map((recipe) => (recipe.id === id ? updated : recipe))
            );
        } catch (err) {
            console.error("Error updating Recipe", err)
        } finally {
            fetchRecipes();
        }
    }

    const deleteRecipe = async (id) => {
        try{
            const response = await fetch(`http://localhost:8080/recipes/${id}`, {
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            });
            if (!response.ok) throw new Error("Failed to Delete Recipe.")
        } catch (error) {
            console.error("An Error occurred when attempting to delete")
        } finally {
            fetchRecipes();
        }
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