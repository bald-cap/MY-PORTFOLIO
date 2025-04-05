import Image from "next/image";
import Cpp from "../../public/c-.png"
import Python from "../../public/python.png"
import JS from "../../public/js.png"
import R from "../../public/r.png"
import Golang from "../../public/go.png"
import Ocaml from "../../public/ocaml.png"
import SQL from "../../public/sql.png"


const Skills = () => {

    return (
        <section className="container py-5" id="skills">
            <h2 className="text-center mb-4">My Technical Skills</h2>
            <article className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {/* Golang */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={Golang} alt="Golang" width={100} height={100} className="card-img-top mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Golang</h5>
                            <p className="card-text">Experience with backend development using the Gin framework and Redis for caching.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Gin Framework</li>
                            <li className="list-group-item">Redis</li>
                        </ul>
                    </div>
                </section>

                {/* C++ */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={Cpp} alt="C++" width={100} height={100} className="card-img-top  mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">C++</h5>
                            <p className="card-text">Experience in TCP/IP communications and end-to-end encryption, particularly with OpenSSL.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">TCP/IP</li>
                            <li className="list-group-item">OpenSSL</li>
                        </ul>
                    </div>
                </section>

                {/* R */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={R} alt="R" width={100} height={100} className="card-img-top mx-auto mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">R</h5>
                            <p className="card-text">Used for statistical computing and data analysis in academic and real-world projects.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Statistical Analysis</li>
                            <li className="list-group-item">Data Visualization</li>
                        </ul>
                    </div>
                </section>

                {/* SQL */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={SQL} alt="SQL" width={100} height={100} className="card-img-top mx-auto mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">SQL</h5>
                            <p className="card-text">Worked with relational databases like MariaDB and NoSQL databases like MongoDB.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">MariaDB</li>
                            <li className="list-group-item">MongoDB</li>
                        </ul>
                    </div>
                </section>

                {/* Python */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={Python} alt="Python" width={100} height={100} className="card-img-top mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">Used in web scraping with Beautiful Soup, including a dedicated project.</p>
                            <p className="card-text">Also used in NLP with Stanza, including a dedicated project.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Beautiful Soup</li>
                            <li className="list-group-item">Stanza (NLP)</li>
                        </ul>
                    </div>
                </section>

                {/* OCaml */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={Ocaml} alt="OCaml" width={100} height={100} className="card-img-top mt-3" style={{width : "fit-content"}} />
                        <div className="card-body text-center">
                            <h5 className="card-title">OCaml</h5>
                            <p className="card-text">Functional programming experience with OCaml for academic projects.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Functional Programming</li>
                        </ul>
                    </div>
                </section>

                {/* JavaScript */}
                <section className="col">
                    <div className="card h-100 shadow d-flex align-items-center">
                        <Image src={JS} alt="JavaScript" width={100} height={100} className="card-img-top mt-3" style={{ width: "fit-content" }} />
                        <div className="card-body text-center">
                            <h5 className="card-title">JavaScript</h5>
                            <p className="card-text">Used for full-stack development, particularly with frameworks like React and Next.js. I also apply functional programming techniques to write efficient and maintainable code.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">React</li>
                            <li className="list-group-item">Next.js</li>
                            <li className="list-group-item">Functional Programming</li>
                        </ul>
                    </div>
                </section>
            </article>

        </section>
    )
};

export default Skills;