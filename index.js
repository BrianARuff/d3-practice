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

function num(min = 12, max = 36) {
    return Math.ceil(Math.random() * (max - min) + min);
}

const fontSizes = [num(), num(), num(), num(), num(), num(), num(), num(), num(), num()];

const names = ["Brian", "Doris", "Shawn", "Thomas", "Mahayla", "Logan", "Shirley", "Allen", "Lewis", "Frankie"];

const p = d3
    .selectAll("p")
    .data(fontSizes).style("font-size", (d, i) => d + "px")
    .data([...Array(10)]).style("color", d => "hsl(" + Math.random() * 360 + ",100%,50%)").data(names).attr("title", (d) => d).data(names).on("click", (d) => alert(d));


p.enter().append("p").text((d) => d);
p.exit().remove();

// const si = setInterval(() => {
//     clearInterval(si);

//     window.location.reload()
// }, 100)