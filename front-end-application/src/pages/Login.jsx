import Button from "../components/Button";
import FormLine from "../components/FormLine";

const Login = () => {
    return (
        <>
        <div class="grid p-10 place-content-center h-screen">
        <div>
            <h1 class="text-center text-4xl md:text-6xl">Login to get Started</h1>
            <br />
            <form>
                <FormLine label="Username" type="text" name="username" value="" />
                <FormLine label="Password" type="password" name="password" value="" />

                <Button type="submit" msg="Submit" />
            </form>
        </div>
        </div>
        </>
    )
}

export default Login;