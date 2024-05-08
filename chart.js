const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [`${products[0].name}`, `${products[1].name}`, `${products[2].name}`, `${products[3].name}`, `${products[4].name}`, `${products[5].name}`],
    datasets: [{
      label: 'Price',
      data: [`${products[0].cost}`, `${products[1].cost}`, `${products[2].cost}`, `${products[3].cost}`, `${products[4].cost}`, `${products[5].cost}`],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});