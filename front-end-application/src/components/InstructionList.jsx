const InstructionList = ({ step_number, step_text }) => {
    return (
        <>
            <h3 className="md:text-2xl font-semibold pb-5">Step {step_number}:</h3>
            <p className="md:text-xl">{step_text}</p>
        </>
    )
}

export default InstructionList;