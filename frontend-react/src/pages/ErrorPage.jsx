import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <img
                className="w-96"
                src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
                alt="404"
            />
            <h1 className="text-5xl font-bold mb-10">404 Error!</h1>
            <h2 className="text-3xl mb-10">Page not found!</h2>
            <Link className="btn btn-primary" to="/">
                Go Back to Home
            </Link>
        </div>
    );
};

export default ErrorPage;
