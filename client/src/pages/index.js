import Head from "next/head";

import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";


export default function Home() {

  const router = useRouter()
  return (
    <>
      <Head>
        <title>Porfolio Site</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        {/* 👇 Hero Hook */}
        <section
          className="d-flex align-items-center justify-content-center text-center p-4 bg-dark"
          style={{ minHeight: "80vh", color: "#FEDCC3" }}
        >
          <article className="container">
            <section className="row justify-content-center">
              <article className="col-12 col-md-10 col-lg-8">
                <h1
                  className="fw-bold"
                  style={{ fontSize: "clamp(2rem, 6vw, 3rem)", color: "#FAFEF7" }}
                >
                  I build digital experiences <br />
                  that people{" "}
                  <span style={{ color: "#811D45", fontStyle: "italic" }}>*want*</span> to use — and keep using.
                </h1>
                <p
                  className="mt-4"
                  style={{ fontSize: "clamp(1rem, 3.5vw, 1.5rem)", color: "#9FBBC3" }}
                >
                  I&apos;m a software developer passionate about helping businesses, brands, and creators
                  bring their services online in a way that&apos;s elegant, engaging, and efficient.
                </p>
              </article>
            </section>
          </article>
        </section>

        {/* Main Site Content */}
        <Skills />
        <About />
        <Projects />
      </main>


      <Contact />
    </>
  );
}
