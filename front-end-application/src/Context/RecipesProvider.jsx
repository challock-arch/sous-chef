import { use, useEffect, useState } from "react";
import { createContext } from "react";

export const RecipeContext = createContext();

export function RecipeProvider({children}) {
    const [recipes, setRecipes] = useState([]);
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

    return (
        <RecipeContext value={{recipes, loading}}>
            {children}
        </RecipeContext>
    )
};

export const useRecipe = () => use(RecipeContext);