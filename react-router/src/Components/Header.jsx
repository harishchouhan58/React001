import { Link } from "react-router-dom"
const Header = () => {
    return (
        <>
            <header className=" flex justify-between px-4 items-center">
            <h1 className="text-3xl">Header</h1>
            <ul className="flex p-4">
                <li className="mx-2"><Link to="/">Home</Link></li>
                <li className="mx-2"><Link to="/about">About</Link></li>
                <li className="mx-2"><a href="/contact">Contact</a></li>
            </ul>
            </header>
        </>
    )
}
export default Header