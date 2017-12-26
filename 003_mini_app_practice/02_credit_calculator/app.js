const form = document.getElementById('loan-form');
const calculator = document.querySelector('#calculator');
const heading = calculator.querySelector('.heading');
const loading = document.querySelector('#loading');
const results = document.querySelector('#results');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  hideResults(false, true);
  setTimeout(() => {
    calculateResults();
  }, 2000);
});

hideResults();

function calculateResults(ev) {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = principal * x * calculatedInterest / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    hideResults(true, false);
  } else {
    showError();
  }
}

function showError() {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'alert alert-danger';
  errorDiv.textContent = 'Форма заполнена некорректно';
  hideResults();
  calculator.insertBefore(errorDiv, heading);
  setTimeout(() => {
    errorDiv.remove();
  }, 2000);
}

function hideResults(hideSpinner = true, hideCalculations = true) {
  loading.style.display = hideSpinner ? 'none' : '';
  results.style.display = hideCalculations ? 'none' : '';
}
