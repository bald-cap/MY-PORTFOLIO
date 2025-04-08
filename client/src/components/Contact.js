import Image from 'next/image';
import Link from 'next/link';

import gitlab from "../../public/gitlab.png"
import github from "../../public/github.png"
import gmail from "../../public/gmail.png"

const Contact = () => {

    return (
        <footer className="border bg-dark text-white py-3">
            <section className="container">
                <article className="row text-center gy-4">
                    <div className="col-12 col-sm-6 col-md-3">
                        <p className='mb-0'>&copy; {new Date().getFullYear()}<br />Michael Nyanyuie</p>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <article className="d-flex flex-column align-items-center">
                            <p className="mb-1">My GitHub</p>
                            <Link href="https://github.com/bald-cap" className="btn btn-outline-light">
                                <Image src={github} height={25} width={25} alt="GitHub" />
                            </Link>
                        </article>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <article className="d-flex flex-column align-items-center">
                            <p className="mb-1">My Gitlab</p>
                            <Link href="https://mi-git.univ-tlse2.fr/Michael-kofi.NYANYUIE" className="btn btn-outline-light">
                                <Image src={gitlab} height={25} width={25} alt="Gitlab" />
                            </Link>
                        </article>
                    </div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <article className="d-flex flex-column align-items-center">
                            <p className="mb-1">mnyanyuie@gmail.com</p>
                            <Image src={gmail} height={25} width={25} alt="Gmail" />
                        </article>
                    </div>
                </article>
            </section>
        </footer>
    )
};

export default Contact;