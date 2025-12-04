const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");

const spanYears  = document.querySelector("#resultYears .num");
const spanMonths = document.querySelector("#resultMonths .num");
const spanDays   = document.querySelector("#resultDays .num");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let yearValue = "";
    let monthValue = "";
    let dayValue = "";

    inputs.forEach(input => {
        if (input.name === "year")  yearValue = parseInt(input.value);
        if (input.name === "month") monthValue = parseInt(input.value);
        if (input.name === "day")   dayValue = parseInt(input.value);
    });

    const today = new Date();
    const birth = new Date(yearValue, monthValue - 1, dayValue);

    let ageYear  = today.getFullYear() - birth.getFullYear();
    let ageMonth = today.getMonth() - birth.getMonth();
    let ageDay   = today.getDate() - birth.getDate();

    if (ageDay < 0) {
        ageDay += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageMonth--;
    }

    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;
    }

    spanYears.textContent = ageYear;
    spanMonths.textContent = ageMonth;
    spanDays.textContent = ageDay;
});
