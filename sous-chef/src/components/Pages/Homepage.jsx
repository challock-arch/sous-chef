import "../Styles/homePage.css"

const HomePage = () => {
    return (
        <>
            <main className="main">
                <div className="welcome-splash">
                    <h1>Welcome to Sous Chef!</h1>
                </div>
                <div className="about-container">
                    <div>
                        <h2>Recipe Walkthroughs</h2>
                        <p>Sous Chef provides users with a walkthrough experience for all of their favorite recipes.</p>
                    </div>
                    <div>
                        <h2>Meal Planning</h2>
                        <p>For those who have are busy or struggle to find what they want to make each day, Sous Chef allows you to plan out meals for a week so you can be sure you know what you're making every night.</p>
                    </div>
                    <div>
                        <h2>Grocery Lists</h2>
                        <p>To ensure you have everything you'll need for your meals during the week, Sous Chef helps to create shopping lists that include everything right from your recipes so it's easy to keep track of everything!</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage;