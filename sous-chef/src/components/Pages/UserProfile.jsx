import { useState } from "react";
import RecipeCard from "../Elements/RecipeCard"
import { Link } from "react-router";
import userIcon from "../../assets/userIconStandIn.webp"

const UserProfile = ({userData, recipeData, updateRecipes}) => {

    let [keyCounter, setKeyCounter] = useState(0);
    // console.log(userData);
    return (
        <>
            <main className="user-profile-container">
                <div className="user-card-container">
                    <img src={userIcon} alt="user icon" width="300px" />
                    <div>
                        <h2>{`${userData.name}`}</h2>
                        <h3><em>{`${userData.username}`}</em></h3>
                    </div>
                </div>
                <div className="user-recipes-container">
                    {recipeData.map ((recipe, index) => {
                        return (
                            <div key={index}>
                            <RecipeCard 
                                name={recipe.name}
                                servingSize={recipe.servingSize}
                                recipeNo={recipe.recipeNo}
                            />
                            </div>
                        )
                    })}
                </div>
                <div>
                    <Link to="/new-recipe"><button>New Recipe</button></Link>
                </div>
            </main>
        </>
    )
}

export default UserProfile;