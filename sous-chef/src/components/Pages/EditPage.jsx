import { useState } from 'react';
import { Link, useParams } from 'react-router';

const EditRecipe = ({updateRecipes, currentRecipes}) => {
    const {recipeNum} = useParams();

    const recipe = currentRecipes.find((recipe) => recipe.recipeNo === parseInt(recipeNum))

    const{recipeNo, name, servingSize, ingredients, steps} = recipe;


    let [localFormData, setLocalFormData] = useState ({
        recipeNo: `${recipeNo}`,
        name: `${name}`,
        servingSize: `${servingSize}`,
        ingredients: `${ingredients}`,
        steps: `${steps}`
    });

        const handleFormChange = (e) => {
        const { name, value } = e.target;

        let updatedValue;

        if(name === 'ingredients' || name === 'steps'){
            updatedValue = value.split('\n')
        } else {
            updatedValue = value;
        }
        setLocalFormData(prev => ({...prev,
            [name]: updatedValue}));
        console.log(localFormData);        
    };

    function handleSubmit(e) {
        e.preventDefault();
        updateRecipes([...currentRecipes, localFormData]);
        alert("Recipe Submitted!")
        // console.log(localFormData);
        // console.log(currentRecipes);
        setRecipeId(prev => prev +1);
        // console.log(recipeId);
    }

    return (
        <>
            <h1>{recipe.name}</h1>
                <form className='form-container' onSubmit={handleSubmit}>
                    <label>Recipe Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleFormChange} />
                    <label>Serving Size</label>
                    <input type="text" id="Serving-Size" name="servingSize" value={servingSize} onChange={handleFormChange} />
                    <label>Add Ingredients</label>
                    <textarea id="Ingredients" name="ingredients" value={ingredients} onChange={handleFormChange} rows="6" />
                    <label>Add Steps</label>
                    <textarea id="steps" name="steps" value={steps} onChange={handleFormChange} rows="6" />
                    <input type='submit' value={`Save and Continue`} />
                    <Link to="/user-profile"><button>Back to User Profile</button></Link>
                </form>
        </>
    )
}

export default EditRecipe;