import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="container">

                <h1>Ninja List</h1>
                <div>
                    <Link href="/"><a className="nav__link">Home</a></Link>
                    <Link href="/about"><a className="nav__link">About</a></Link>
                    <Link href="/ninjas"><a className="nav__link">Ninja Listing</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;