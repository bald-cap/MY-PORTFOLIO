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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main style={{ color : "#161E34"}}>
        <About />

        <Skills />

        <Projects />
      </main>

      <Contact />
    </>
  );
}
