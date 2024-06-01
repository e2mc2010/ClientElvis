const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
context.scale(20, 20);

// Define the shapes for Tetris blocks
const SHAPES = {
    I: [
        [1, 1, 1, 1],
    ],
    L: [
        [0, 0, 1],
        [1, 1, 1],
    ],
    J: [
        [1, 0, 0],
        [1, 1, 1],
    ],
};

// Function to draw the matrix (block)
function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
        row.forEach((value, x) => {
            if (value !== 0) {
                context.fillStyle = 'red';
                context.fillRect(x + offset.x, y + offset.y, 1, 1);
            }
        });
    });
}

// Function to rotate the matrix (block)
function rotate(matrix, dir) {
    for (let y = 0; y < matrix.length; ++y) {
        for (let x = 0; x < y; ++x) {
            [
                matrix[x][y],
                matrix[y][x],
            ] = [
                matrix[y][x],
                matrix[x][y],
            ];
        }
    }
    if (dir > 0) {
        matrix.forEach(row => row.reverse());
    } else {
        matrix.reverse();
    }
}

// Function to create a new piece
function createPiece(type) {
    return SHAPES[type];
}

// Initialize a piece
let piece = createPiece('L');
let position = {x: 5, y: 5};

// Function to draw everything
function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawMatrix(piece, position);
}

// Function to drop the piece
function drop() {
    position.y++;
    draw();
}

// Function to move the piece
function move(dir) {
    position.x += dir;
    draw();
}

// Function to rotate the piece
function rotatePiece() {
    rotate(piece, 1);
    draw();
}

// Event listeners for controls
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        move(-1);
    } else if (event.key === 'ArrowRight') {
        move(1);
    } else if (event.key === 'ArrowDown') {
        drop();
    } else if (event.key === 'ArrowUp') {
        rotatePiece();
    }
});

// Draw the initial state
draw();
