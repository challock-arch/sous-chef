import { useState } from "react";
import { Link, useParams } from "react-router";
import recipeData from "../assets/Data/Recipes.json"
import InstructionList from "../components/InstructionList";
import Button from "../components/Button";

const Walkthrough = () => {

    const currentRecipe = useParams();

    const [currentStep, setCurrentStep] = useState(1);

    return (
        <>
            {recipeData.filter(recipe => recipe.recipe_id.toString() === currentRecipe.id).map((recipe) => (
                <div key={recipe.recipe_id} class="flex-col mx-10 mt-10 mb-30">
                    <h2 class="text-2xl font-semi-bold md:pb-7.5 md:text-4xl">{recipe.name}</h2>
                    {recipe.instructions.map((instruction) => (
                        <div key={instruction.step_number} id={instruction.step_number} class={instruction.step_number === currentStep ? "bg-stone-200 p-4 rounded-md md:mx-10 my-4" : "bg-stone-100 text-stone-300 p-4 rounded-md md:mx-10 my-4"}>
                            <InstructionList
                                step_number={instruction.step_number}
                                step_text={instruction.step_text}
                            />
                        </div>
                    ))}
                    <div class="grid grid-cols-2 gap-20 place-items-center place-self-center fixed bottom-18 w-75 md:w-150 lg:w-200">
                        <div
                            onClick={() => setCurrentStep(currentStep > 1 ? currentStep - 1 : 1)}
                            class={currentStep === 1 ? "hidden" : ""}
                        >
                            <Button type="button" msg="Back" />
                        </div>
                        <div
                            onClick={() => setCurrentStep(currentStep < recipe.instructions.length ? currentStep + 1 : currentStep)}
                            class={currentStep === recipe.instructions.length ? "hidden" : ""}
                        >
                            <Button type="button" msg="Next" />
                        </div>
                        <div class={`${currentStep !== recipe.instructions.length ? "hidden" : ""}`}>
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