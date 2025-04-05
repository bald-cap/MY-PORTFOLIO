"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

const BarChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
       console.log(data)

        // Flatten the data and aggregate language frequencies
        const aggregatedData = {};

        data.forEach((repo) => {
            Object.keys(repo).forEach((language) => {
                const frequency = repo[language];
                // If the language is already in the aggregated data, add the frequency to it
                if (aggregatedData[language]) {
                    aggregatedData[language] += frequency;
                } else {
                    // Otherwise, initialize it with the current frequency
                    aggregatedData[language] = frequency;
                }
            });
        });

        // Transform aggregated data into an array of {label, value}
        const chartData = Object.keys(aggregatedData).map((language) => ({
            label: language,
            value: aggregatedData[language],
        }));


        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const width = 400;
        const height = 500;
        const margin = { top: 20, right: 20, bottom: 30, left: 40 };

        svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3
            .scaleBand()
            .domain(chartData.map((d) => d.label))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(chartData, (d) => d.value)])
            .nice()
            .range([height - margin.bottom, margin.top]);

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

        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x));

        svg
            .append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));
    }, [data]);

    return (
        <div className="d-flex justify-content-center">
            <svg ref={chartRef}></svg>
        </div>
    );
};

export default BarChart;
