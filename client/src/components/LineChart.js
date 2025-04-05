import { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const width = 600;
        const height = 400;
        const margin = { top: 20, right: 20, bottom: 40, left: 50 };

        // Create SVG container
        svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Prepare the data
        const x = d3
            .scaleTime()
            .domain([d3.min(data, (d) => new Date(d.label)), d3.max(data, (d) => new Date(d.label))])
            .range([0, width - margin.left - margin.right]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.value)])
            .nice()
            .range([height - margin.top - margin.bottom, 0]);

        // Draw the line
        const line = d3
            .line()
            .x((d) => x(new Date(d.label)))
            .y((d) => y(d.value));

        svg
            .append("path")
            .data([data])
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "#0d6efd")
            .attr("stroke-width", 2)
            .attr("d", line);

        // X-axis
        svg
            .append("g")
            .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
            .call(d3.axisBottom(x));

        // Y-axis
        svg
            .append("g")
            .call(d3.axisLeft(y));

    }, [data]);

    return (
        <div className="d-flex justify-content-center">
            <svg ref={chartRef}></svg>
        </div>
    );
};

export default LineChart;
