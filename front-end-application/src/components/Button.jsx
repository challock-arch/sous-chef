const Button = ({type, msg}) => {


    return (
        <button type={`${type}`} class="bg-lime-950 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
            {msg}
        </button>
    )
}

export default Button;