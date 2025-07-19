import RecipeCard from "./RecipeCard"

const MealPlanDayCard = () => {
    return (
        <div>
            <div>
                <h2>Day of the week</h2>
            </div>
            <div>
                <div>
                <h2>Breakfast</h2>
                <RecipeCard />
                </div>
                <div>
                <h2>Lunch</h2>
                <RecipeCard />
                </div>
                <div>
                <h2>Dinner</h2>
                <RecipeCard />
                </div>
            </div>
        </div>
    )
}