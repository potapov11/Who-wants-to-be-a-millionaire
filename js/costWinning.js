let arrcostWinning = [100, 200, 300, 400, 500, 1000, 5000, 10000, 15000, 25000, 50000, 100000, 200000];
arrcostWinning  = arrcostWinning .reverse();

export const costWiningColumn = document.querySelector('.costWinning');

arrcostWinning.forEach(elem => {
  costWiningColumn.innerHTML += `<li class="costWinning-item">${elem}</li>`;
});


export const expCostWiningColumn = costWiningColumn.innerHTML;
