import image from '../assets/images/pexels-goumbik-616484.jpg';

const Home = () => {
    return (
        <div title="cutting board">
            <div className="h-150 flex-col justify-center content-center p-3" style={{ backgroundImage: `url(${image})` }}>
                <div className="bg-stone-100/65 rounded-md p-5">
                    <h1 className="pb-5 text-4xl md:text-6xl text-center md:text-right md:pr-10 ">Welcome to Sous Chef!</h1>
                    <p className="text-lg md:text-xl text-center md:text-right md:pr-10">Your personal recipe manager and meal planner.</p>
                </div>
            </div>
            <div className="p-3 pb-10">
                <h2 className="text-4xl py-2">Recipe Walkthroughs</h2>
                <p className="text-lg pb-4">Sous Chef provides users with a walkthrough experience of all their favorite recipes</p>
                <h2 className="text-4xl pb-2">Meal Planning</h2>
                <p className="text-lg pb-4">For those who are busy or struggle to find what they want to make each day, Sous Chef allows you to plan out meals for a week so you can be sure you know what you're making every night.</p>
                <h2 className="text-4xl pb-2">Grocery Lists</h2>
                <p className="text-lg pb-4">To ensure you have everything you'll need for your meals during the week, Sous Chef helps to create shopping lists that include everything right from your recipes so it's easy to keep track of everything!</p>
            </div>
        </div>
    )
}

export default Home;