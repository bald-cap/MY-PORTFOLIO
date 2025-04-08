import get from "@/lib/axiosConfig";
import { useEffect, useState } from "react";
import Link from "next/link";


import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import BarChart from "@/components/BarChart";
import CalendarHeatmap from "@/components/CalendarHeatmap";
import StarsAndForksChart from "@/components/StarsAndForksChart";

const DataAnalysis = () => {
    const [projects, setProjects] = useState([]);
    const [stack, setStack] = useState([]);
    const [commits, setCommits] = useState([]);

    const [error, setError] = useState("");


    const handleFetchProjs = async () => {
        try {
            const res = await get("/users/bald-cap/repos")
            setProjects(res)
        } catch (error) {
            setError(error)
        }
    }

    const handleFetchStack = async (repos) => {
        try {
            const res = await Promise.all(
                repos.map(async ({ name }) => await get(`/repos/bald-cap/${name}/languages`))
            );
            setStack(res);
        } catch (error) {
            setError(error)
        }
    }

    const handleFetchCommits = async(repos) => {
        try {
            const res = await Promise.all(
                repos.map(async ({ name }) => {
                    const commits = await get(`/repos/bald-cap/${name}/commits`);
                    return aggregateCommitsByDay(commits);
                })
            );
            console.log(res.flat())
            setCommits(res.flat())
        } catch (error) {
            setError(error)
        }
    }

    // Utility function to aggregate commit frequency by day
    const aggregateCommitsByDay = (commits) => {
        const frequency = {};

        commits.forEach((commit) => {
            const commitDate = new Date(commit?.commit?.author?.date).toISOString().split('T')[0]; // Format to YYYY-MM-DD
            if (frequency[commitDate]) frequency[commitDate] += 1;
            else frequency[commitDate] = 1;
        });

        // Convert the frequency object into an array of objects suitable for the line chart
        const data = Object.keys(frequency).map((date) => ({
            label: date,
            value: frequency[date]
        }));

        return data;
    };



    useEffect(() => {
        (async () => {
            await handleFetchProjs()
        })();
    }, [])


    useEffect(() => {
        (async () => {
            await handleFetchCommits(projects)
            await handleFetchStack(projects)
        })();
    }, [projects])


    return (
        <>
            <Head>
                <title>Data Analysis Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                <section className="container my-5">
                    {/* Error */}
                    {error && (
                        <article className="alert alert-danger text-center" role="alert">
                            {error}
                        </article>
                    )}

                    {projects && (
                        <>
                            {/* Project List */}
                            <article className="mb-5">
                                <h3 className="mb-3 text-center">My GitHub Repositories</h3>
                                <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                    {projects.map(({ name, id, html_url }) => (
                                        <article className="col" key={id}>
                                            <div className="text-center">
                                                {/* <div className="card-body d-flex align-items-center justify-content-center"> */}
                                                    <Link className="card-title btn btn-outline-dark" href={html_url}>{name}</Link>
                                                {/* </div> */}
                                            </div>
                                        </article>
                                    ))}
                                </section>
                            </article>

                            {/* Stars and Forks */}
                            <StarsAndForksChart data={projects} />
                        </>
                    )}

                    {/* Stack/Languages Chart */}
                    {stack && <BarChart data={stack} />}

                    {/* Commit History and Frequency Chart */}
                    {commits && <CalendarHeatmap data={commits} />}
                </section>
            </main>

            <Contact />
        </>
    )
};

export default DataAnalysis;