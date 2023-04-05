let arrcostWinning = [1000000, 500000, 250000, 100000, 50000, 25000, 10000, 5000, 1000, 500, 400, 300, 200, 100];
arrcostWinning  = arrcostWinning .reverse();

export const costWiningColumn = document.querySelector('.costWinning');

arrcostWinning.forEach(elem => {
  costWiningColumn.innerHTML += `<li class="costWinning-item">${elem}</li>`;
});

costWiningColumn.childNodes.forEach(item => {
  if(item.textContent == 100 || item.textContent == 1000 || item.textContent == 1000000) {
    item.style.color = '#ffffff';
  }
});

export const expCostWiningColumn = costWiningColumn.innerHTML;
