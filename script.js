document.getElementById("calcBtn").addEventListener("click", calculatePrice);

const priceData = {
  jaipur: 3500,
  udaipur: 3000,
  jodhpur: 2800,
  kota: 2500,
};

function calculatePrice() {
  const location = document.getElementById("location").value;
  const areaInput = document.getElementById("area").value;
  const area = parseFloat(areaInput);
  const resultBox = document.getElementById("result");

  if (!location || isNaN(area) || area <= 0) {
    resultBox.textContent = "⚠️ Please select a location and enter valid area.";
    return;
  }

  const pricePerSqFt = priceData[location];
  const totalPrice = pricePerSqFt * area;

  resultBox.textContent = `💰 Estimated Price: ₹${totalPrice.toLocaleString()} (${pricePerSqFt} per sq.ft)`;
}