const Button = ({type, msg}) => {


    return (
        <button type={`${type}`} className="bg-lime-950 hover:bg-lime-700 text-stone-200 hover:text-white font-bold py-2 px-4 rounded w-40">
            {msg}
        </button>
    )
}

export default Button;