"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        console.log(data);

        // Flatten the data and aggregate language frequencies
        const aggregatedData = {};

        data.forEach((repo) => {
            Object.keys(repo).forEach((language) => {
                const frequency = repo[language];
                if (aggregatedData[language]) aggregatedData[language] += frequency;
                else aggregatedData[language] = frequency;
            });
        });

        // Transform aggregated data into an array of {label, value}
        const chartData = Object.keys(aggregatedData).map((language) => ({
            label: language,
            value: aggregatedData[language],
        }));

        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const margin = { top: 20, right: 20, bottom: 30, left: 40 };
        const width = window.innerWidth < 768 ? window.innerWidth - margin.left - margin.right : 600;
        const height = 500;

        svg
            .attr("width", "100%")
            .attr("height", height)
            .attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMidYMid meet") // Preserve aspect ratio
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3
            .scaleBand()
            .domain(chartData.map((d) => d.label))
            .range([0, width - margin.left - margin.right])
            .padding(0.4);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(chartData, (d) => d.value)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        // Setting up each bar
        svg
            .append("g")
            .attr("fill", "#0d6efd")
            .selectAll("rect")
            .data(chartData)
            .join("rect")
            .attr("x", (d) => x(d.label))
            .attr("y", (d) => y(d.value))
            .attr("height", (d) => y(0) - y(d.value))
            .attr("width", x.bandwidth());

        // Setting up the x-axis
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        // Setting up the y-axis
        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
    }, [data]);

    return (
        <article className="mb-5">
            <h4 className="text-center mb-3">Tech Stack Breakdown</h4>
            <div className="card p-3">
                <div className="d-flex justify-content-center" style={{ overflowX: "auto", width: "100%" }}>
                    <svg ref={chartRef}></svg>
                </div>
                <p>
                    The commit frequency chart highlights how consistently I contribute to my projects.
                    While some of my most active repositories are private, this visual shows that I’m regularly coding, learning, and improving.
                    My public contributions might be limited in scope, but my overall activity reflects steady progress and hands-on experience in real-world development.
                </p>
            </div>
        </article>
    );
};

export default BarChart;
