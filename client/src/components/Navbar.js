import Link from "next/link";

const Navbar = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mx-3 my-3">
                <div className="container-fluid">
                    <Link a className="navbar-brand" href="/">Portfolio </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="/#about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/#projects">Projects</Link>
                            </li>
                            <li>
                                <Link className="nav-link" href="/dataAnalysis">Data Analysis</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;