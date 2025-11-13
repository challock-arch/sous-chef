import { useParams } from "react-router";
import { useState, useEffect } from "react"
import { Link } from "react-router"
import Button from "../components/Button"
import FormLine from "../components/FormLine"
import { useRecipe } from "../Context/RecipesProvider"

const EditRecipe = () => {

    const { recipes, editRecipe } = useRecipe();

    const currentRecipeId = useParams();

    const { id } = useParams();

    const currentRecipe = recipes.filter(recipe => recipe.id.toString() === currentRecipeId.id)[0]

    const [recipeData, setRecipeData] = useState({
        recipe_name: "",
        calories: "",
        prep_time_minutes: "",
        cook_time_minutes: "",
        servings: "",
        ingredients: [
            {
                quantity: "",
                unit_of_measure: "",
                name: ""
            }
        ],
        instructions: [
            {
                step_number: "",
                step_text: ""
            }
        ]
    })

    // Populate form when currentRecipe loads
    useEffect(() => {
        if (currentRecipe) {
            setRecipeData(currentRecipe);
        }
    }, [currentRecipe])

    const handleRecipeChange = (field, value) => {
        setRecipeData({ ...recipeData, [field]: value })
    }

    const handleIngredientChange = (index, field, value) => {
        const updatedIngredients = recipeData.ingredients.map((item, i) =>
            i === index ? ({ ...item, [field]: value }) : ({ ...item })

        );
        setRecipeData({ ...recipeData, ingredients: updatedIngredients });
    }

    const handleInstructionChange = (index, field, value) => {
        const updatedInstructions = recipeData.instructions.map((item, i) =>
            i === index ? ({ ...item, [field]: value }) : ({ ...item })
        );
        setRecipeData({ ...recipeData, instructions: updatedInstructions });
    }

    const addIngredientRow = () => {
        setRecipeData({
            ...recipeData,
            ingredients: [
                ...recipeData.ingredients,
                { quantity: "", unit_of_measure: "", name: "" },
            ]
        })
    }

    const addInstructionRow = () => {
        setRecipeData({
            ...recipeData,
            instructions: [
                ...recipeData.instructions,
                { step_number: "", step_text: "" },
            ]
        })
    }

    const removeIngredientRow = (index) => {
        if (recipeData.ingredients.length === 1) return;
        const updated = recipeData.ingredients.filter((_, i) => i !== index);
        setRecipeData({ ...recipeData, ingredients: updated })
    }

    const removeInstructionRow = (index) => {
        if (recipeData.instructions.length === 1) return;
        const u = recipeData.instructions.filter((_, i) => i !== index);
        setRecipeData({ ...recipeData, instructions: u });
    }

    const handleSave = (e) => {
        e.preventDefault();
        console.log(recipeData);
        editRecipe(id, recipeData);
        alert("Recipe Submitted Successfully!");
    }

    return (
        <>
            <div className="mb-20 mt-5 md:place-self-center mx-10 md:w-175">
                <form onSubmit={handleSave}>
                    <FormLine
                        label="Recipe Name"
                        type="text"
                        name="name"
                        placeholder="Enter Recipe Name Here"
                        value={recipeData.recipe_name}
                        onChange={(e) => handleRecipeChange("recipe_name", e.target.value)}
                    />
                    <FormLine
                        label="Servings"
                        type="number"
                        name="servings"
                        placeholder="Number of Servings"
                        value={recipeData.servings}
                        onChange={(e) => handleRecipeChange("servings", e.target.value)}
                    />
                    <FormLine
                        label="Prep Time"
                        type="number"
                        name="prep_time"
                        placeholder="Estimated Prep Time"
                        value={recipeData.prep_time_minutes}
                        onChange={(e) => handleRecipeChange("prep_time_minutes", e.target.value)}
                    />
                    <FormLine
                        label="Cook Time"
                        type="number"
                        name="cook_time"
                        placeholder="Estimated Cook Time"
                        value={recipeData.cook_time_minutes}
                        onChange={(e) => handleRecipeChange("cook_time_minutes", e.target.value)}
                    />
                    <FormLine
                        label="Calories"
                        type="number"
                        name="calories"
                        placeholder="Estimated Calories"
                        value={recipeData.calories}
                        onChange={(e) => handleRecipeChange("calories", e.target.value)}
                    />
                    <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold">Ingredients</label>
                    <table className="table-auto place-self-center w-full">
                        <thead className="border-b-1 border-stone-200" >
                            <tr>
                                <th className="px-10 py-2 font-medium text-stone-400">Quantity</th>
                                <th className="px-10 py-2 font-medium text-stone-400">UOM</th>
                                <th className="px-10 py-2 font-medium text-stone-400">Ingredient</th>
                                <th className="px-10 py-2 font-medium text-stone-400"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeData.ingredients.map((row, index) => (
                                <tr key={index} className="border-b-1 border-stone-200">
                                    <td>
                                        <input
                                            type="number"
                                            value={row.quantity}
                                            onChange={(e) =>
                                                handleIngredientChange(index, "quantity", e.target.value)
                                            }
                                            className="w-full"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.unit_of_measure}
                                            onChange={(e) =>
                                                handleIngredientChange(index, "unit_of_measure", e.target.value)
                                            }
                                            className="w-full"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.name}
                                            onChange={(e) =>
                                                handleIngredientChange(index, "name", e.target.value)
                                            }
                                            className="w-full"
                                        />
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => removeIngredientRow(index)} ><i className="fa-solid fa-xmark text-lime-950"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot colSpan="4">
                            <tr>
                                <td colSpan="4" className="py-10">
                                    <button type="button" onClick={addIngredientRow} className="bg-lime-950 hover:bg-lime-700 text-stone-200 hover:text-white font-bold py-2 px-4 rounded w-full">+ Add Ingredients</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <label htmlFor="instructions" className="block text-gray-700 text-sm font-bold">instructions</label>
                    <table className="table-auto place-self-center w-full">
                        <thead className="border-b-1 border-stone-200" >
                            <tr>
                                <th className="px-10 py-2 font-medium text-stone-400">Step No.</th>
                                <th className="px-10 py-2 font-medium text-stone-400">Step</th>
                                <th className="px-10 py-2 font-medium text-stone-400"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipeData.instructions.map((row, index) => (
                                <tr key={index} className="border-b-1 border-stone-200">
                                    <td>
                                        <input
                                            type="text"
                                            value={row.step_number}
                                            onChange={(e) =>
                                                handleInstructionChange(index, "step_number", e.target.value)
                                            }
                                            className="w-full"
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={row.step_text}
                                            onChange={(e) =>
                                                handleInstructionChange(index, "step_text", e.target.value)
                                            }
                                            className="w-full"
                                        />
                                    </td>
                                    <td>
                                        <button type="button" onClick={() => removeInstructionRow(index)} ><i className="fa-solid fa-xmark text-lime-950"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot colSpan="4">
                            <tr>
                                <td colSpan="4" className="py-10">
                                    <button type="button" onClick={addInstructionRow} className="bg-lime-950 hover:bg-lime-700 text-stone-200 hover:text-white font-bold py-2 px-4 rounded w-full">+ Add Instructions</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className="grid grid-cols-2 place-items-center mt-5">
                        <Link to="/recipes">
                            <Button type="button" msg="Back to Recipes" />
                        </Link>
                        <Button type="submit" msg="Save Recipe" />
                    </div>
                </form>
            </div>
        </>
    )
}

export default EditRecipe;