let select1 = document.getElementsByTagName("select")[0];
let select2 = document.getElementsByTagName("select")[1];
let res = document.getElementsByTagName("p")[0];
select1.onchange = () => {
    let v1 = select1.value;
    for (let i = 0; i < select2.options.length; i++) {
        if (select2.options[i].value == v1) {
            if (i == select2.options.length - 1) {
                select2.options[0].selected = true;
            } else {
                select2.options[i + 1].selected = true;
            }
        }
    }
};

select2.onchange = () => {
    let v2 = select2.value;
    for (let i = 0; i < select1.options.length; i++) {
        if (select1.options[i].value == v2) {
            if (i == select1.options.length - 1) {
                select1.options[0].selected = true;
            } else {
                select1.options[i + 1].selected = true;
            }
        }
    }
};

function sub() {
    let temp = document.getElementById("num").value;
    let select1Val = select1.value;
    let select2Val = select2.value;

    // celcius to farenheit
    if (select1Val === "cs" && select2Val === "fr") {
        temp = ((temp * 9) / 5 + 32 ).toFixed(2);
        res.textContent = `Result : ${temp} F`;
    }

    else if (select1Val === "fr" && select2Val === "cs"){
        temp = (((temp - 32) * 5) / 9 ).toFixed(2);
        res.textContent = `Result : ${temp} °C`;
    }

    else if (select1Val === "cs" && select2Val === "kl"){
        temp = (parseInt(temp) + 273.15).toFixed(2);
        res.textContent = `Result : ${temp} K`
    }

    else if (select1Val === "kl" && select2Val === "cs"){
        temp = (temp - 273.15).toFixed(2);
        res.textContent = `Result : ${temp} °C`
    }
    else if (select1Val === "kl" && select2Val === "fr"){
        temp = ((temp - 273.15)*(9/5) + 32).toFixed(2);
        res.textContent = `Result : ${temp} F`
    }
    else{
        temp = ((temp-32) * (5/9) + 273.15).toFixed(2);
        res.textContent = `Result : ${temp} K`
    }
}

window.onload = function () {
    document.getElementsByTagName("button")[0].disabled = true;
};
document.getElementById("num").addEventListener("input", (e) => {
    if (e.target.value == undefined) {
        document.getElementsByTagName("button")[0].disabled = true;
    } else {
        document.getElementsByTagName("button")[0].disabled = false;
    }
});