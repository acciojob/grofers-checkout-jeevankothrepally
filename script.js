const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let prices = document.querySelectorAll(".prices");
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += Number(prices[i].innerText);
    }
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerText = total;
    row.appendChild(cell);
    document.querySelector("table").appendChild(row);
};

getSum();
getSumBtn.addEventListener("click", getSum);