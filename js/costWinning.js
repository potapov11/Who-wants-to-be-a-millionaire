let arrcostWinning = [200000, 100000, 500000, 250000, 100000, 50000, 25000, 10000, 5000, 1000, 500, 400, 300, 200, 100];
arrcostWinning  = arrcostWinning .reverse();

export const costWiningColumn = document.querySelector('.costWinning');

arrcostWinning.forEach(elem => {
  costWiningColumn.innerHTML += `<li class="costWinning-item">${elem}</li>`;
});


export const expCostWiningColumn = costWiningColumn.innerHTML;
