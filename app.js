document.getElementById("loan-form").addEventListener("submit", function (e) {
    document.getElementById("result").style.display = "none";
    document.getElementById("loading").style.display = "block";
    setTimeout(calculate, 2000);
    e.preventDefault();
  });
  
  function calculate(e) {
    const amount = document.getElementById("loan_amount");
    const interest = document.getElementById("interest_amount");
    const years = document.getElementById("years");
    const monthlyPayment = document.getElementById("monthly_payment");
    const totalAmount = document.getElementById("total_amount");
    const totalInterest = document.getElementById("total_interest");
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
  
    if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalAmount.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  
      document.getElementById("result").style.display = "block";
      document.getElementById("loading").style.display = "none";
    } else {
      showAlert("Please enter the amounts");
    }
    e.preventDefault();
  }
  
  function showAlert(error) {
    const errorDiv = document.createElement("div");
  
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(error));
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
  
    card.insertBefore(errorDiv, heading);
  
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }