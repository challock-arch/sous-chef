import { useState } from 'react';
import { Link } from 'react-router';

const NewRecipe = ({updateRecipes, currentRecipes}) => {

    const [recipeId, setRecipeId] = useState(3);

    let [localFormData, setLocalFormData] = useState ({
        recipeNo: `${recipeId}`,
        name: "",
        servingSize: "",
        ingredients: [],
        steps: []
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
        setRecipeId(prev => prev +1);
    }

    return (
        <div className='new-recipe-container'>
            <h2>New Recipe</h2>
                <form className='form-container' onSubmit={handleSubmit}>
                    <label htmlFor='name'>Recipe Name</label>
                    <input type="text" id="name" name="name" onChange={handleFormChange} />
                    <label htmlFor='servingSize'>Serving Size</label>
                    <input type="text" id="servingSize" name="servingSize" onChange={handleFormChange} />
                    <label htmlFor='ingredients'>Add Ingredients</label>
                    <textarea id="ingredients" name="ingredients" onChange={handleFormChange} rows="6" />
                    <label htmlFor='steps'>Add Steps</label>
                    <textarea id="steps" name="steps" onChange={handleFormChange} rows="6" />
                    <input type='submit' value={`Save and Continue`} />
                    <Link to="/user-profile"><button>Back to User Profile</button></Link>
                </form>
        </div>
    )
}

export default NewRecipe;