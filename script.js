
const container = document.querySelector(".container");
const resetButton = document.querySelector('.reset-button');

const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return { r, g, b}
}

const createGrid = (amtOfGrid) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < amtOfGrid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

        for(let j = 0; j < amtOfGrid; j++) {
            const { r, g, b} = createRandomRGB();
            const widthAndHeight = 960 / amtOfGrid;
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseenter', () => {
                const bgColor = "rgb(" + r + "," + g + "," + b + ")";
                gridBox.style.background = bgColor;
            })
            row.appendChild(gridBox)
        }

        wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('what dimension do you want for the new grid'));

    while (userSize > 100) {
        userSize = Number(prompt('Pick a smaller number and make sure its 100 or less'));
    }
    const wrapper = document.querySelector('.wrapper')

    if (!wrapper) {
        createGrid(userSize);
    } else {
        wrapper.remove()
        createGrid(userSize)
    }
})