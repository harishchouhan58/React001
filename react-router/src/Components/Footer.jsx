const Footer = () => {
    return (
        <>
            <footer className="fixed bottom-0 text-center w-full p-5 bg-black text-white">
                <h1 className="font-bold text-5xl">Footer</h1>
                <ul className="flex justify-center mt-4">
                    <li className="mx-2"><a href="/">Home</a></li>
                    <li className="mx-2"><a href="/about">About</a></li>
                    <li className="mx-2"><a href="/contact">Contact</a></li>
                </ul>
            </footer>
        </>
    )
}
export default Footer