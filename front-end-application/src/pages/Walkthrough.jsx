import { useState } from "react";
import { Link, useParams } from "react-router";
import Button from "../components/Button";
import InstructionList from "../components/InstructionList";
import { useRecipe } from "../Context/RecipesProvider";

const Walkthrough = () => {

    const { recipes } = useRecipe();

    const currentRecipe = useParams();

    const [currentStep, setCurrentStep] = useState(1);

    return (
        <>
            {recipes.filter(recipe => recipe.recipe_id.toString() === currentRecipe.id).map((recipe) => (
                <div key={recipe.recipe_id} className="flex-col mx-10 mt-10 mb-30">
                    <h2 className="text-2xl font-semi-bold md:pb-7.5 md:text-4xl">{recipe.name}</h2>
                    {recipe.instructions.map((instruction) => (
                        <div key={instruction.step_number} id={instruction.step_number} className={instruction.step_number === currentStep ? "bg-stone-200 p-4 rounded-md md:mx-10 my-4" : "bg-stone-100 text-stone-300 p-4 rounded-md md:mx-10 my-4"}>
                            <InstructionList
                                step_number={instruction.step_number}
                                step_text={instruction.step_text}
                            />
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-20 place-items-center place-self-center fixed bottom-18 w-75 md:w-150 lg:w-200">
                        <div className={currentStep != 1 ? "hidden" : ""}>
                            <Link to={`/recipe/${recipe.recipe_id}`}>
                                <Button type="button" msg="Ingredients" />
                            </Link>
                        </div>
                        <div
                            onClick={() => setCurrentStep(currentStep > 1 ? currentStep - 1 : 1)}
                            className={currentStep === 1 ? "hidden" : ""}
                        >
                            <Button type="button" msg="Back" />
                        </div>
                        <div
                            onClick={() => setCurrentStep(currentStep < recipe.instructions.length ? currentStep + 1 : currentStep)}
                            className={currentStep === recipe.instructions.length ? "hidden" : ""}
                        >
                            <Button type="button" msg="Next" />
                        </div>
                        <div className={`${currentStep !== recipe.instructions.length ? "hidden" : ""}`}>
                            <Link to="/recipes">
                                <Button type="button" msg="Back to Recipes" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Walkthrough;