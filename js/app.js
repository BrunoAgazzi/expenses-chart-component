

fetch("../data.json")
.then(response => {
    return response.json();
})
.then(jsondata => jsondata.map(dat =>{
    let container = document.getElementById("chart-bars");
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    let bar = document.createElement("div");
    bar.style.height= `${dat.amount * 2}px`;
    bar.className= dat.day === "wed" ? "bar bar-max" :"bar";
    h4.innerHTML = `$${dat.amount}`;
    bar.addEventListener("mouseover", function(event){
        h4.style.display= "block";
    });
    bar.addEventListener("mouseout", function(event){
        h4.style.display= "none";
    });
    div.className= "bar-container";
    h3.innerHTML = dat.day;
    div.appendChild(h4);
    div.appendChild(bar);
    div.appendChild(h3);
    container.appendChild(div);
}));