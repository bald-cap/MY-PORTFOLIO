import StatsSHSImage from "../../public/stats.png";
import NetworkingImage from "../../public/networking.png";
import LeagueOfStonesImage from "../../public/los.png";
import CampusExplorerImage from "../../public/campusExplorer.png";

import Image from "next/image";
import Link from "next/link";


const Projects = () => {

    return (
        <section
            className="rounded p-4 mx-3 mb-4"
            style={{ backgroundColor: "#FFFFFF" }}
        >
            <article className="container my-5" id="projects">
                <h2 className="mb-4 text-center">Projects</h2>

                <section className="row g-4">

                    {/* STATS SHS */}
                    <article className="col-12 col-sm-6 col-md-4">
                        <section className="card h-100 ">
                            <h5 className="card-header text-center">COVID ANALYSIS</h5>
                            <article className="d-flex align-items-center justify-content-center">
                                <Image
                                    src={StatsSHSImage} alt="STATS SHS" className="card-img-top"
                                    width={300} height={200}
                                    style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                                />
                            </article>
                            <article className="card-body">
                                <p className="card-text">
                                    A project that highlights my proficiency in R and data analysis, focusing on multi-dimensional data. Statistical analysis techniques were applied to analyze and visualize data meaningfully.
                                </p>
                            </article>
                            <article className="card-footer text-muted">
                                <Link href="https://github.com/bald-cap/STATS-SHS-PROJECT" className="btn btn-outline-dark">
                                    View Project
                                </Link>
                            </article>
                        </section>
                    </article>

                    {/* NETWORKING PROJECT */}
                    <article className="col-12 col-sm-6 col-md-4">
                        <section className="card h-100 ">
                            <h5 className="card-header text-center">SIMPLE CHAT APP</h5>
                            <article className="d-flex align-items-center justify-content-center">
                                <Image
                                    src={NetworkingImage} alt="PROJET REZO" className="card-img-top"
                                    width={300} height={200}
                                    style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                                />
                            </article>
                            <article className="card-body">
                                <p className="card-text">
                                    A communication system written in C where messages are broadcasted to all connected users using the TCP/IP protocol.
                                </p>
                            </article>
                            <article className="card-footer text-muted">
                                <Link href="https://github.com/bald-cap/Projet-Reseau" className="btn btn-outline-dark">
                                    View Project
                                </Link>
                            </article>
                        </section>
                    </article>

                    {/* LEAGUE OF STONES */}
                    <article className="col-12 col-sm-6 col-md-4">
                        <section className="card h-100 ">
                            <h5 className="card-header text-center">LEAGUE OF STONES</h5>
                            <article className="d-flex align-items-center justify-content-center">
                                <Image
                                    src={LeagueOfStonesImage} alt="LEAGUE OF STONES"
                                    className="card-img-top" width={300} height={200}
                                    style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                                />
                            </article>
                            <article className="card-body">
                                <p className="card-text">
                                    A responsive web game built in React, using elements from the League of Legends universe. Players are tasked with finding and submitting photos of places on campus to familiarize themselves with the environment.
                                </p>
                            </article>
                            <article className="card-footer text-muted">
                                <Link href="https://github.com/Rahim60/League_Of_Stone" className="btn btn-outline-dark">
                                    View Project
                                </Link>
                            </article>
                        </section>
                    </article>

                    {/* CAMPUS EXPLORER */}
                    <article className="col-12 col-sm-6 col-md-4">
                        <section className="card h-100 ">
                            <h5 className="card-header text-center">CAMPUS EXPLORER</h5>
                            <article className="d-flex align-items-center justify-content-center">
                                <Image
                                    src={CampusExplorerImage} alt="CAMPUS EXPLORER" className="card-img-top"
                                    width={300} height={200}
                                    style={{ width: "100%", maxWidth: "300px", height: "auto" }}
                                />
                            </article>
                            <article className="card-body">
                                <p className="card-text">
                                    A PHP-based project designed to help students navigate campus using a responsive, interactive website.
                                </p>
                            </article>
                            <article className="card-footer text-muted">
                                <Link href="https://github.com/bessy-carelle/Campus-Explorer-Site" className="btn btn-outline-dark">
                                    View Project
                                </Link>
                            </article>
                        </section>
                    </article>

                </section>
            </article>
        </section>

            
    )
};

export default Projects;