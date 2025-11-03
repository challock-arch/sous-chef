const IngredientList = ({ quantity, unit_of_measure, ingredient}) => {
    return (
        <li>{quantity} {unit_of_measure} {ingredient}</li>
    )
}