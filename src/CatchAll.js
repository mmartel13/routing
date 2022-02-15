import { Link } from "react-router-dom";


function CatchAll() {
    return (
    <>
        <h1>You Should Not Be Here</h1>
        <Link to='/'>Go Home</Link>
        </>
    )
}

export default CatchAll;