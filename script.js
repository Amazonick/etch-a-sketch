const mainContainer = document.querySelector('#container');
const body = document.querySelector('body');

makeGrid(16, 16);
createButton();

function makeGrid(rows, columns) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    container.style.width = '600px';
    container.style.height = '600px';
    container.style.overflow = 'hidden';
    for (i = 0; i < rows * columns; i++) {
        let cell = document.createElement('div');
        cell.style.backgroundColor = 'white';
        cell.style.minHeight = '0';
        cell.style.minWidth = '0';
        cell.style.overflow = 'hidden';
        cell.style.padding = '0';
        cell.style.border = '0';
        container.appendChild(cell).className = 'grid-item';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
    }
}

function createButton() {
    const btn = document.createElement('button');
    btn.style.width = '256px';
    btn.style.height = '32px';
    btn.style.margin = '24px';
    btn.innerText = 'RESET!';
    btn.addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach((e) => e.remove());
        let gridInput = prompt(
            'How many squares per one side would you like? (max. 100)'
        );
        if (gridInput > 100) {
            alert('NO MORE THAN 100!');
            return;
        }
        rows = gridInput;
        columns = gridInput;
        makeGrid(rows, columns);
    });
    body.insertBefore(btn, container).className = 'reset-btn';
}
