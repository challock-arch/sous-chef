import { useParams } from "react-router"
import recipeData from '../Data/recipeData.json'
import Button from "../Elements/Button";

const MisEnPlace = () => {
    const { recipeNum } = useParams();

    const recipe = recipeData.find((recipe) => recipe.recipeNo === parseInt(recipeNum))

    return (
        <main className="main-container">
            <h2>Mis En Place</h2>
            <p>Now's the time to grab all your ingredients and prep them for cooking!</p>
            <table>
                <thead>
                    <tr>
                        <th>Checkbox</th>
                        <th>Ingredient</th>
                    </tr>
                </thead>
                <tbody>
                    {recipe.ingredients.map((ingredient) => {
                        console.log(ingredient);
                        return (
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>{`${ingredient}`}</td>
                            </tr>
                        );
                    })};
                </tbody>
            </table>
            <Button value="Next" link={`/recipe/${recipeNum}`} />
        </main>
    )
}

export default MisEnPlace;