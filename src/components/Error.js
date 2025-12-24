import { useRouteError } from "react-router";

const Error = () =>{
    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops! Something went wrong. Check back later</h1>
            <p>{ error.status } { error.statusText }</p>
            </div>
    )
}

export default Error;