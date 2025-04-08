import Link from "next/link";

const About = () => {

    return (
        <section
            className="d-flex align-items-center justify-content-center text-center p-4 bg-dark text-white"
            style={{ minHeight: "80vh", fontFamily: "monospace", fontWeight: "bold" }}
        >
            <article className="container">
                <section className="row justify-content-center">
                    <article className="col-12 col-md-10 col-lg-8">
                        <h2
                            className="fw-bold mb-4"
                            style={{ color: "#FAFEF7" }}
                        >
                            My Journey
                        </h2>

                        <p
                            className="mt-4"
                            style={{ fontSize: "clamp(1rem, 3.5vw, 1.3rem)", color: "#9FBBC3" }}
                        >
                            My academic journey began at the{" "}
                            <Link href="https://www.ug.edu.gh/"
                                className="text-decoration-none text-white"
                            >
                                <strong>University of Ghana</strong>
                            </Link>
                            , where I studied Humanities, focusing on <strong>Geography and French</strong>. While I had an early interest in technology, it was during my time studying{" "}
                            <em>
                                Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS)
                            </em>{" "}
                            in the{" "}
                            <Link href="https://univ-tlse2.fr"
                                className="text-decoration-none text-white"
                            >
                                <strong>Université Toulouse 2 Jean Jaurès</strong>
                            </Link>{" "}
                            that I truly began to understand the core concepts of <strong>Programming</strong> and its real-world applications.
                        </p>

                        <p
                            className="mt-3"
                            style={{ fontSize: "clamp(1rem, 3.5vw, 1.3rem)", color: "#9FBBC3" }}
                        >
                            Since then, I’ve transitioned into the world of <strong>Computer Science</strong>, and I’m currently pursuing it as my field of study. Over time, I’ve gained hands-on experience and a deeper appreciation for both the theoretical and practical sides of the discipline.
                        </p>

                        <p
                            className="mt-3"
                            style={{ fontSize: "clamp(1rem, 3.5vw, 1.3rem)", color: "#9FBBC3" }}
                        >
                            Today, I’m particularly drawn to <strong>Web Development</strong> and <strong>Software Engineering</strong>, with a special passion for <strong>Full-Stack Development</strong>. I’ve worked on projects that integrate both front-end and back-end technologies, and I’m always looking for opportunities to build software that solves real-world problems.
                        </p>

                        <p
                            className="mt-3"
                            style={{ fontSize: "clamp(1rem, 3.5vw, 1.3rem)", color: "#9FBBC3" }}
                        >
                            My ambition is to grow as a <strong>Software Developer</strong> or <strong>Web Developer</strong>, and I’m committed to continuously learning, improving, and contributing to impactful digital solutions.
                        </p>
                    </article>
                </section>
            </article>
        </section>



    )
};

export default About;