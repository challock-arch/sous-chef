import { useState } from "react";
import { Link } from "react-router";
import userIcon from '../../assets/userIconStandIn.webp'

const RegisterAndEdit = ({formDataChange, formData}) => {

    const [localChange, setLocalChange] = useState({
        name:"",
        username:""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFields = {
            ...localChange,
            [name]: value
        };
        setLocalChange(updatedFields);
        formDataChange(updatedFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        formDataChange(localChange);
        console.log(`Form Submitted: ${formData}`);
        console.log(formData);
    }

    return (
        <>
            <main className="register-container">
                <img src={userIcon} alt="user icon" width="500px" />
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="text" id="name" name="name" required placeholder="name" onChange={handleChange} />
                    <input type="text" id="username" name="username" required placeholder="username" onChange={handleChange} />
                    <Link to={'/user-profile'}><button type="submit">Save and Continue</button></Link>
                    {/* <button type="submit">Save and Continue</button> */}
                </form>
            </main>
        </>
    )
}

export default RegisterAndEdit;