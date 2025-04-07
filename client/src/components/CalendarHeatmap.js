import { useEffect, useRef } from "react";
import * as d3 from "d3";

const CalendarHeatmap = ({ data }) => {
    const chartRef = useRef();

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove(); // Clear previous render

        const width = 1000;
        const height = 150;
        const cellSize = 17;

        // Format for the label dates
        const parseDate = d3.timeParse("%Y-%m-%d");
        const formatDate = d3.timeFormat("%Y-%m-%d");

        // Set up the color scale for commit activity (value based)
        const color = d3.scaleSequential([0, d3.max(data, d => d.value)], d3.interpolateYlGnBu);

        // Get the range of dates we are dealing with
        const startDate = d3.min(data, d => parseDate(d.label));
        const endDate = d3.max(data, d => parseDate(d.label));

        // Generate all days between the start and end date for the calendar
        const days = d3.timeDays(startDate, endDate);

        const g = svg
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", `translate(40,20)`);

        // Create a day rectangle for each day in the time range
        g.selectAll("rect")
            .data(days)
            .enter()
            .append("rect")
            .attr("width", cellSize)
            .attr("height", cellSize)
            .attr("x", d => d3.timeWeek.count(startDate, d) * cellSize)
            .attr("y", d => d.getDay() * cellSize)
            .attr("fill", d => {
                // Find corresponding data for each day
                const found = data.find(item => item.label === formatDate(d));
                return found ? color(found.value) : "#FAFEF7"; // Fallback color if no data
            })
            .append("title")
            .text(d => {
                const found = data.find(item => item.label === formatDate(d));
                return `${formatDate(d)}: ${found?.value || 0} commits`;
            });

        // Add month labels for better readability
        const months = d3.timeMonths(startDate, endDate);
        g.selectAll("text")
            .data(months)
            .enter()
            .append("text")
            .attr("x", d => d3.timeWeek.count(startDate, d) * cellSize)
            .attr("y", -5)
            .text(d => d3.timeFormat("%b")(d))
            .style("fill", "#161E34")
            .style("font-size", "12px");

    }, [data]);

    return (
        <article className="mb-5">
            <h4 className="text-center mb-3">Commit Frequency</h4>
            <div className="card p-3 shadow">
                <div className="d-flex justify-content-center">
                    <svg ref={chartRef}></svg>
                </div>
                <p>
                    This tech stack breakdown gives an overview of the technologies I work with most often.
                    My primary tools include Python, JavaScript, HTML, and CSS—languages I’ve used across personal, academic, and collaborative projects.
                    Whether on the front end or back end, I’m comfortable working across the full stack to build responsive, functional, and user-friendly applications.
                </p>
            </div >
        </article>
    );
};

export default CalendarHeatmap;
