const properties = [
  {
    name: "Azure Crest Residences",
    type: "Apartment",
    location: "Lagos",
    price: 85000000,
    beds: 3,
    baths: 3,
    area: "2,300 sq ft",
    tag: "Featured",
    color: "linear-gradient(135deg, #66b9a0, #265c51)"
  },
  {
    name: "Cedar Green Villas",
    type: "Duplex",
    location: "Abuja",
    price: 180000000,
    beds: 5,
    baths: 4,
    area: "4,100 sq ft",
    tag: "Luxury",
    color: "linear-gradient(135deg, #9fb3d4, #36577e)"
  },
  {
    name: "Harbor Bay Office Suites",
    type: "Office",
    location: "Port Harcourt",
    price: 65000000,
    beds: 0,
    baths: 2,
    area: "3,500 sq ft",
    tag: "Commercial",
    color: "linear-gradient(135deg, #ffbf69, #d57d0a)"
  },
  {
    name: "Sunrise Acres",
    type: "Land",
    location: "Ibadan",
    price: 18500000,
    beds: 0,
    baths: 0,
    area: "1,200 sqm",
    tag: "Land",
    color: "linear-gradient(135deg, #8ab981, #3f704d)"
  },
  {
    name: "Palm Grove Homes",
    type: "Apartment",
    location: "Lagos",
    price: 42000000,
    beds: 2,
    baths: 2,
    area: "1,650 sq ft",
    tag: "Popular",
    color: "linear-gradient(135deg, #8ec8d8, #3e6a83)"
  },
  {
    name: "Kubwa Terrace Estate",
    type: "Duplex",
    location: "Abuja",
    price: 98000000,
    beds: 4,
    baths: 3,
    area: "3,200 sq ft",
    tag: "New",
    color: "linear-gradient(135deg, #b8a0d9, #5d4d88)"
  }
];

const propertyGrid = document.getElementById("propertyGrid");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const budgetFilter = document.getElementById("budgetFilter");
const showListBtn = document.getElementById("showList");
const contactForm = document.getElementById("contactForm");

function formatMoney(value) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(value);
}

function getFilteredProperties() {
  const location = locationFilter.value;
  const type = typeFilter.value;
  const budget = budgetFilter.value;

  return properties.filter((property) => {
    const matchLocation = location === "all" || property.location === location;
    const matchType = type === "all" || property.type === type;

    let matchBudget = true;
    if (budget === "low") matchBudget = property.price < 20000000;
    if (budget === "mid") matchBudget = property.price >= 20000000 && property.price <= 60000000;
    if (budget === "high") matchBudget = property.price > 60000000 && property.price <= 150000000;
    if (budget === "luxury") matchBudget = property.price > 150000000;

    return matchLocation && matchType && matchBudget;
  });
}

function renderProperties() {
  const filtered = getFilteredProperties();

  if (!filtered.length) {
    propertyGrid.innerHTML = `
      <div class="property-card" style="grid-column: 1 / -1; padding: 24px;">
        <h3>No properties match your filters.</h3>
        <p style="color: var(--muted); margin-top: 8px;">Try another city or budget range.</p>
      </div>
    `;
    return;
  }

  propertyGrid.innerHTML = filtered
    .map(
      (property) => `
        <article class="property-card">
          <div class="property-image" style="background: ${property.color};">
            <span class="tag">${property.tag}</span>
            <span>${property.location}</span>
          </div>
          <div class="card-body">
            <div class="card-top">
              <h3>${property.name}</h3>
              <span class="price">${formatMoney(property.price)}</span>
            </div>
            <span class="location">${property.type} • ${property.location}</span>
            <div class="card-details">
              ${property.beds ? `<span>${property.beds} Beds</span>` : "<span>Land</span>"}
              ${property.baths ? `<span>${property.baths} Baths</span>` : ""}
              <span>${property.area}</span>
            </div>
            <div class="card-actions">
              <span class="ghost">Investment ready</span>
              <button class="primary-btn">Book visit</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function calculateMortgage() {
  const price = Number(document.getElementById("propertyPrice").value) || 0;
  const downPayment = Number(document.getElementById("downPayment").value) || 0;
  const loanTerm = Number(document.getElementById("loanTerm").value) || 0;
  const rate = Number(document.getElementById("interestRate").value) || 0;

  const loanAmount = Math.max(0, price - downPayment);
  const monthlyRate = rate / 100 / 12;
  const totalMonths = loanTerm * 12;

  let monthlyPayment = 0;

  if (loanAmount > 0 && totalMonths > 0 && monthlyRate > 0) {
    monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  } else if (loanAmount > 0 && totalMonths > 0) {
    monthlyPayment = loanAmount / totalMonths;
  }

  const totalRepayment = monthlyPayment * totalMonths;
  const interestPayable = totalRepayment - loanAmount;

  document.getElementById("loanAmount").textContent = formatMoney(loanAmount);
  document.getElementById("monthlyPayment").textContent = formatMoney(monthlyPayment);
  document.getElementById("totalRepayment").textContent = formatMoney(totalRepayment);
  document.getElementById("interestPayable").textContent = formatMoney(interestPayable);
}

showListBtn.addEventListener("click", renderProperties);
locationFilter.addEventListener("change", renderProperties);
typeFilter.addEventListener("change", renderProperties);
budgetFilter.addEventListener("change", renderProperties);

document.getElementById("calculateBtn").addEventListener("click", calculateMortgage);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Your property request has been received. A NestNigeria agent will contact you shortly.");
  contactForm.reset();
});

renderProperties();
calculateMortgage();
