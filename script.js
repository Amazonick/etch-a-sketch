const mainContainer = document.querySelector('#container');
const body = document.querySelector('body');

function makeGrid(rows, columns) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-columns', columns);
  container.style.width = '600px';
  for (i = 0; i < rows * columns; i++) {
    let cell = document.createElement('div');
    container.appendChild(cell).className = 'grid-item';
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
  }
}
createButton();

makeGrid(16, 16);

function createButton() {
  const btn = document.createElement('button');
  btn.style.width = '256px';
  btn.style.height = '32px';
  btn.innerText = 'RESET!';
  body.appendChild(btn).className = 'btn';
  btn.addEventListener('click', () => {
    document.querySelectorAll('.grid-item').forEach((e) => e.remove());
    let gridInput = prompt(
      'How many squares per one side would you like? (max. 100)'
    );
    if (gridInput > 100) {
      alert('NO MORE THAN 100 YOU DUMB FCK!');
      return;
    }
      rows = gridInput;
      columns = gridInput;
      makeGrid(rows, columns)
  });

  function resetGrid() {
    makeGrid(16, 16);
  }
}
