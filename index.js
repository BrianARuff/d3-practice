// d3.selectAll("p").transition("ease-in-out").duration(1000).style("color", "blue");

function randomVal() {
    const values = "0123456789abcdef";
    const len = values.length;
    const res = values[Math.floor(Math.random() * len)];

    if (typeof res === "string") {
        return res;
    } else {
        return String(res);
    }
}

function num(min = 16, max = 36) {
    const rangeArr = [...Array(36).splice(15)]
    return rangeArr;
}

const fontSizes = [num(), num(), num(), num(), num(), num(), num(), num(), num(), num()];


d3
    .selectAll("p")
    .data(fontSizes).style("font-size", (d, i) => d + "px")
    .data([...Array(10)]).style("color", d => "hsl(" + Math.random() * 360 + ",100%,50%)")
    .data(["Brian", "Doris", "Shawn", "Logan", "Mahayla", "Thomas", "Shirley", "Lewis", "Randolph", "Robert", ]).data(["Brian", "Doris", "Shawn", "Thomas", "Mahayla", "Logan", "Shirley", "Allen", "Lewis", "Frankie"]).attr("title", (d) => d);

const si = setInterval(() => {
    clearInterval(si);

    window.location.reload()
}, 100)