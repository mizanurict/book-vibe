import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="grid gap-4 justify-center text-center my-16">
            <h1 className="text-2xl">Oops!</h1>
            <p>not found page.</p>
            <Link to='/' className="btn">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;