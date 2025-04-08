import { useEffect, useRef } from "react";
import * as d3 from "d3";

const StarsAndForksChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const margin = { top: 20, right: 20, bottom: 40, left: 40 };
        const width = window.innerWidth < 768 ? window.innerWidth - margin.left - margin.right : 600; // Responsive width
        const height = 400;

        // Set up the scale for the x-axis (projects)
        const x = d3
            .scaleBand()
            .domain(data.map((d) => d.name))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        // Set up the scale for the y-axis (star count, fork count)
        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => Math.max(d.stargazers_count, d.forks_count))])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // Create SVG container
        svg
            .attr("width", "100%")
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet"); // Preserve aspect ratio

        // Line function for stars
        const starLine = d3
            .line()
            .x((d) => x(d.name) + x.bandwidth() / 4)
            .y((d) => y(d.stargazers_count));

        // Line function for forks
        const forkLine = d3
            .line()
            .x((d) => x(d.name) + 3 * x.bandwidth() / 4)
            .y((d) => y(d.forks_count));

        // Draw the lines for Stars and Forks
        svg
            .append("path")
            .data([data])
            .attr("class", "star-line")
            .attr("d", starLine)
            .attr("fill", "none")
            .attr("stroke", "#0d6efd")
            .attr("stroke-width", 2);

        svg
            .append("path")
            .data([data])
            .attr("class", "fork-line")
            .attr("d", forkLine)
            .attr("fill", "none")
            .attr("stroke", "#fedc3a")
            .attr("stroke-width", 2);

        // Add the x-axis for the project names
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        // Add the y-axis for the counts
        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        // Add labels for Stars and Forks using icons/emojis
        svg
            .selectAll("text.star")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (d) => x(d.name) + x.bandwidth() / 4)
            .attr("y", (d) => y(d.stargazers_count) - 10)
            .attr("text-anchor", "middle")
            .attr("fill", "#0d6efd")
            .text((d) => `⭐ ${d.stargazers_count}`);

        svg
            .selectAll("text.fork")
            .data(data)
            .enter()
            .append("text")
            .attr("x", (d) => x(d.name) + 3 * x.bandwidth() / 4)
            .attr("y", (d) => y(d.forks_count) - 10)
            .attr("text-anchor", "middle")
            .attr("fill", "#fedc3a")
            .text((d) => `🍴 ${d.forks_count}`);
    }, [data]);

    return (
        <article className="mb-5">
            <h4 className="text-center mb-3">Stars and Forks</h4>
            <div className="card p-3">
                <div className="d-flex justify-content-center" style={{ overflowX: "auto", width: "100%" }}>
                    <svg ref={chartRef}></svg>
                </div>
                <p>
                    While I don’t currently have any stars or forks on my public repositories,
                    this doesn’t reflect a lack of effort or skill.
                    As a student, many of my projects are either academic, private, or still in progress.
                    The purpose of this diagram is to showcase the kind of work I can do, rather than how widely it’s been shared.
                    It stands as proof of my growing capabilities and potential as a developer.
                </p>
            </div>
        </article>
    );
};

export default StarsAndForksChart;
