import defaultImage from '../../assets/cuttingBoard.jpg'
import { Link } from 'react-router';

const RecipeCard = ({name, servingSize, recipeNo}) => {

    return (
        <div className="recipe-container" key={`${recipeNo}`}>
            <div>
                <img className="recipe-image" src={defaultImage} style={{width: 300, height:100}}/>
            </div>
            <div>
                <h2>{`${name}`}</h2>
                <h3>Serving Size: {`${servingSize}`}</h3>
            </div>
            <div>
                <Link to={`/misenplace/${recipeNo}`}>
                <button>Let's Make It!</button>
                </Link>
                {/* Button for Edit Feature to be added later */}
                {/* <Link to={`/edit-recipe/${recipeNo}`}>
                <button>Edit</button>
                </Link> */}
            </div>
        </div>
    )
}

export default RecipeCard;