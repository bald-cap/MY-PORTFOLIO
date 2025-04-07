import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand " href="/">Portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${router.asPath === '/#about' ? 'active' : ''}`}
                                    href="/#about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${router.asPath === '/#skills' ? 'active' : ''}`}
                                    href="/#skills">
                                    Skills
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${router.asPath === '/#projects' ? 'active' : ''}`}
                                    href="/#projects">
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${router.asPath === '/dataAnalysis' ? 'active' : ''}`}
                                    href="/dataAnalysis">
                                    Data Analysis
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default Navbar;