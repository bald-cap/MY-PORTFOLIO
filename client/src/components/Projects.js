import StatsSHSImage from "../../public/stats.png";
import NetworkingImage from "../../public/networking.png";
import LeagueOfStonesImage from "../../public/los.png";
import CampusExplorerImage from "../../public/campusExplorer.png";

import Image from "next/image";
import Link from "next/link";


// {repo}/languages
const Projects = () => {

    return (
        <section className="container my-5" id="projects">
            <h2 className="mb-4">Projects</h2>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

                {/* STATS SHS */}
                <div className="col">
                    <div className="card h-100 shadow">
                        <h5 className="card-header text-center">COVID ANALYSIS </h5>
                        <Image
                            src={StatsSHSImage}
                            alt="STATS SHS"
                            className="card-img-top"
                            width={300}
                            height={200}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                A project that highlights my proficiency in R and data analysis,
                                focusing on multi-dimensional data. Statistical analysis techniques
                                were applied to analyze and visualize data meaningfully.
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <Link href="https://link-to-stats-shs-project"
                                className="btn btn-outline-primary">View Project 
                            </Link>
                        </div>
                    </div>
                </div>

                {/* PROJET REZO */}
                <div className="col">
                    <div className="card h-100 shadow">
                        <h5 className="card-header text-center">CHAT ENCRYPTION</h5>
                        <Image
                            src={NetworkingImage}
                            alt="PROJET REZO"
                            className="card-img-top"
                            width={300}
                            height={200}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                A project where I worked with C programming to build an encrypted communication interface
                                using the TCP/IP protocol. End-to-end encryption ensures secure communication.
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <Link href="https://link-to-projet-rezo-project"
                                className="btn btn-outline-primary">View Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* LEAGUE OF STONES */}
                <div className="col">
                    <div className="card h-100 shadow">
                        <h5 className="card-header text-center">LEAGUE OF STONES</h5>
                        <Image
                            src={LeagueOfStonesImage}
                            alt="LEAGUE OF STONES"
                            className="card-img-top"
                            width={300}
                            height={200}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                A responsive web game built in React, using elements from the League of Legends universe.
                                Players are tasked with finding and submitting photos of places on campus to familiarize themselves with the environment.
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <Link href="https://link-to-league-of-stones-project"
                                className="btn btn-outline-primary">View Project
                            </Link>
                        </div>
                    </div>
                </div>

                {/* CAMPUS EXPLORER */}
                <div className="col">
                    <div className="card h-100 shadow">
                        <h5 className="card-header text-center">CAMPUS EXPLORER</h5>
                        <Image
                            src={CampusExplorerImage}
                            alt="CAMPUS EXPLORER"
                            className="card-img-top "
                            width={300}
                            height={200}
                            style={{ width: "fit-content" }}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                A PHP-based project designed to help students navigate campus using a responsive, interactive website.
                            </p>
                        </div>
                        <div className="card-footer text-muted">
                            <Link href="https://link-to-campus-explorer-project"
                                className="btn btn-outline-primary">View Project
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
            
    )
};

export default Projects;