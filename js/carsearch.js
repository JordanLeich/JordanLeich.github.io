import usedCars from "./usedCars.js";

const filterButton = document.getElementById("filter-button");
const carListings = document.getElementById("car-listings");

function filterCars() {
  const minYear = parseInt(document.getElementById("min-year").value);
  const maxYear = parseInt(document.getElementById("max-year").value);
  const make = Array.from(
    document.getElementById("make").selectedOptions,
    (option) => option.value
  );
  const maxMileage = parseInt(document.getElementById("max-mileage").value);
  const minPrice = parseInt(document.getElementById("min-price").value);
  const maxPrice = parseInt(document.getElementById("max-price").value);
  const color = Array.from(
    document.getElementById("color").selectedOptions,
    (option) => option.value
  );

  const filteredCars = usedCars.filter(
    (car) =>
      car.year >= minYear &&
      car.year <= maxYear &&
      (make.length === 0 || make.includes(car.make)) &&
      car.mileage <= maxMileage &&
      car.price >= minPrice &&
      car.price <= maxPrice &&
      (color.length === 0 || color.includes(car.color))
  );

  displayCars(filteredCars);
}

function displayCars(cars) {
  carListings.innerHTML = "";

  if (cars.length === 0) {
    carListings.innerHTML =
      "<p>No cars match your criteria. Please try again.</p>";
    return;
  }

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");
    carCard.innerHTML = `
            <h2>${car.make} ${car.model}</h2>
            <p>Year: ${car.year}</p>
            <p>Mileage: ${car.mileage} miles</p>
            <p>Price: $${car.price}</p>
            <p>Color: ${car.color}</p>
            <p>Gas Mileage: ${car.gasMileage}</p>
        `;
    carListings.appendChild(carCard);
  });
}

filterButton.addEventListener("click", filterCars);
filterCars(); // Initial filter
