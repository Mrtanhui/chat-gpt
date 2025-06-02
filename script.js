let balance = 0;

const incomeInput = document.getElementById('income');
const expenseInput = document.getElementById('expense');
const balanceDisplay = document.getElementById('balance');
const recordsList = document.getElementById('records');
const addBtn = document.getElementById('add-btn');
const currencySelect = document.getElementById('currency');

const exchangeRates = {
    CNY: 1,
    USD: 7.25,
    EUR: 8.0,
    GBP: 9.2,
    JPY: 0.05
};

addBtn.addEventListener('click', () => {
    const income = parseFloat(incomeInput.value);
    const expense = parseFloat(expenseInput.value);
    const currency = currencySelect.value;
    const rate = exchangeRates[currency] || 1;

    if (!isNaN(income) && income > 0) {
        const cnyAmount = income * rate;
        balance += cnyAmount;
        const li = document.createElement('li');
        li.textContent = `收入 +${income} ${currency} (¥${cnyAmount.toFixed(2)})`;
        li.classList.add('income');
        recordsList.appendChild(li);
    }

    if (!isNaN(expense) && expense > 0) {
        const cnyAmount = expense * rate;
        balance -= cnyAmount;
        const li = document.createElement('li');
        li.textContent = `支出 -${expense} ${currency} (¥${cnyAmount.toFixed(2)})`;
        li.classList.add('expense');
        recordsList.appendChild(li);
    }

    balanceDisplay.textContent = balance.toFixed(2);

    incomeInput.value = '';
    expenseInput.value = '';
});
