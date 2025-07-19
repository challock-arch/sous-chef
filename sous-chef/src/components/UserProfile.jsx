import RecipeCard from "./Elements/RecipeCard";
import Footer from "./Footer";
import NavMenu from "./NavMenu";
import "./Data/userData.json"

const UserProfile = () => {
    const dummyUser = {
        name: "John Smith",
        username: "johnnychef",
        recipeCount: 3
    }


    return (
        <>
            <NavMenu />
            <main className="user-profile-container">
                <div className="user-card-container">
                    <h2>Image</h2>
                    <div>
                        <h2>{`${dummyUser.name}`}</h2>
                        <h3><em>{`${dummyUser.username}`}</em></h3>
                        <h3>Recipe Count: {`${dummyUser.recipeCount}`}</h3>
                    </div>
                </div>
                <div>
                    <select>
                        <option>Sort...</option>
                        <option>Sort A-Z</option>
                        <option>Sort Z-A</option>
                    </select>
                    <button>Sort</button>
                </div>
                <div className="user-recipes-container">
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                    <RecipeCard />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default UserProfile;