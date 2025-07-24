import { Link } from "react-router";

const Button = ({value, link}) => {
    return (
        <>
        <Link to={link}>
        <button>{value}</button>
        </Link>
        </>
    )
};

export default Button;