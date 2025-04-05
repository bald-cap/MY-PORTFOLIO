import Image from 'next/image';
import Link from 'next/link';

import gitlab from "../../public/gitlab.png"
import github from "../../public/github.png"
import gmail from "../../public/gmail.png"

const Contact = () => {

    return (
        <footer className="border bg-dark text-white rounded mx-3 mb-3 py-3" >

            <section className="container d-flex justify-content-evenly align-items-center">
                <article className="row">
                    <div className="col">
                        <p className='text-center'>&copy; {new Date().getFullYear()} <br></br> Michael  Nyanyuie</p>

                    </div>
                    <div className="col">
                        <article className="d-flex flex-column align-items-center justify-content-center">
                            <p>My GitHub</p>
                            <Link href="https://github.com/your-username" className="btn btn-outline-light">
                                <Image src={github} height={25} width={25} alt="GitHub" />
                            </Link>
                        </article>
                    </div>

                    <div className="col">
                        <article className="d-flex flex-column align-items-center justify-content-center">
                            <p>My Gitlab</p>
                            <Link href="https://gitlab.com/your-username" className="btn btn-outline-light">
                                <Image src={gitlab} height={25} width={25} alt="Gitlab" />
                            </Link>
                        </article>
                    </div>

                    <div className="col">
                        <article className="d-flex flex-column align-items-center justify-content-center">
                            <p>mnyanyuie@gmail.com</p>
                            <Image src={gmail} height={25} width={25} alt="Gmail" />
                        </article>
                    </div>
                </article>

            </section>
        </footer>
    )
};

export default Contact;