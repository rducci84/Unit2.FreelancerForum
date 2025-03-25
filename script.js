//Test line

// Arrays
const names = ['Carol', 'Dave', 'Eve', 'Frank', 'Grace'];
const occupations = ['Programmer', 'Designer', 'Chef', 'Musician', 'Artist'];

// Freelancers
const freelancers = [
  { name: 'Alice', occupation: 'Writer', price: 30 },
  { name: 'Bob', occupation: 'Teacher', price: 50 }
];

const tableBody = document.querySelector('#freelancer-table-body');
const avgPriceEl = document.querySelector('#average-price');

function render() {
  tableBody.innerHTML = '';
  freelancers.forEach(freelancer => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${freelancer.name}</td>
      <td>${freelancer.occupation}</td>
      <td>$${freelancer.price}</td>
    `;
    tableBody.appendChild(row);
  });

  const avgPrice = (
    freelancers.reduce((sum, f) => sum + f.price, 0) / freelancers.length
  ).toFixed(2);
  avgPriceEl.textContent = `Average Starting Price: $${avgPrice}`;
}

function generateFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 71) + 30; // $30 - $100
  return { name, occupation, price };
}

setInterval(() => {
  freelancers.push(generateFreelancer());
  render();
}, 3000);

render();