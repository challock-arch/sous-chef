const NewRecipe = () => {
    return (
        <>
            <h1>New Recipe</h1>
                <form>
                    <label>Recipe Name</label>
                    <input type="text" id="Name" name="Name" />
                    <label>Serving Size</label>
                    <input type="text" id="Serving-Size" name="Serving-Size" />
                    <label>Ingredients</label>
                    <textarea id="Ingredients" name="Ingredients" />
                    <textarea id="Steps" name="Steps" />
                    <button>Save and Continue</button>
                </form>
        </>
    )
}

export default NewRecipe;