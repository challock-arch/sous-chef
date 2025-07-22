import { useParams } from 'react-router'
import recipeData from '../Data/recipeData.json'
import ErrorPage from './ErrorPage';
import { useState } from 'react';

const Walkthrough = () => {
    const {recipeNum} = useParams();

    const recipe = recipeData.find((recipe) => recipe.recipeNo === parseInt(recipeNum))
    
    // console.log(recipe);

    let {steps} = recipe;

    let [currentStep, setCurrentStep] = useState(0);

    function isActiveStep(currentStep, i) {
        if (currentStep === i) {
            return `black`;
        } return `rgba(0,0,0,.1)`;
    }

    function isFirstStep(currentStep) {
        if(currentStep === 0){
            return `hidden`
        } return `visible`
    }

    function isLastStep(currentStep) {
        if(currentStep >= steps.length-1) {
            return `hidden`
        } return `visible`
    }

    const handleNextClick = (e) => {
        setCurrentStep(prev => prev +1);
    };

    const handlePreviousClick = (e) => {
        setCurrentStep(prev => prev -1);
    };
    
    // console.log(recipeNo);
    // console.log(ingredients);
    // console.log(name);
    // console.log(servingSize);
    // console.log(steps);

    if (!recipe) {
        return <ErrorPage />
    }
    return (
        <>
        <div className='steps-container'>
            {Object.entries(steps).map(([num, step], index) => (
                <div className='step' key={num} style={{color: isActiveStep(currentStep, index)}}>
                    <h2>{num}. {step}</h2>
                </div>
            ))}
        </div>
        <div className='button-container'>
            <button onClick={handlePreviousClick} style={{visibility: isFirstStep(currentStep)}}>Previous</button>
            <button onClick={handleNextClick} style={{visibility: isLastStep(currentStep)}}>Next</button>
        </div>
        </>
    )
}

export default Walkthrough;