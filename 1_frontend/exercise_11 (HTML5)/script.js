// Example of creating a simple bar chart with D3.js
const data = [30, 80, 45, 60, 20, 90, 50];
const svg = d3.select("svg");
const margin = 200;
const width = svg.attr("width") - margin;
const height = svg.attr("height") - margin;
const g = svg.append("g").attr("transform", `translate(${margin / 2}, ${margin / 2})`);
const xScale = d3.scaleBand().range([0, width]).padding(0.4);
const yScale = d3.scaleLinear().range([height, 0]);

xScale.domain(data.map((d, i) => i));
yScale.domain([0, d3.max(data, d => d)]);

g.append("g")
  .attr("transform", `translate(0, ${height})`)
  .call(d3.axisBottom(xScale));

g.append("g")
  .call(d3.axisLeft(yScale));

g.selectAll(".bar")
  .data(data
