const RecipeCard = () => {
    let dummyRecipe = {
            RecipeNo: 1,
            Name: "Peanut Butter and Jelly",
            ServingSize: 1,
            Ingredients:[
                "Peanut Butter",
                "Bread",
                "Jelly"
            ],
            Steps: [
                "1. Pull two pieces of bread out onto a plate",
                "2. With a knife or spatula, spread the peanut butter onto on slice of bread.",
                "3. With a knife or spacual, spread the jelly onto the other slide of bread.",
                "4. Put both slices of bread together, mashing the peanut butter and jelly together between them.",
                "OPTIONAL: Slice the sandwich in half diagonally and share with a friend"
            ]

    }

    return (
        <div className="recipe-container">
            <div>
                <h3>Image</h3>
            </div>
            <div>
                <h2>{`${dummyRecipe.Name}`}</h2>
                <h3>Serving Size: {`${dummyRecipe.ServingSize}`}</h3>
            </div>
            <div>
                <button>Let's Make It!</button>
                <button>Edit</button>
            </div>
        </div>
    )
}

export default RecipeCard;