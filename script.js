// Матричный дождь (canvas)
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Установка размера canvas на весь экран
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Настройки символов
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}!?=+';
const fontSize = 14;
let columns = canvas.width / fontSize;

// Массив для хранения позиций капель
let drops = [];
function initDrops() {
    columns = canvas.width / fontSize;
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -canvas.height / fontSize);
    }
}
initDrops();
window.addEventListener('resize', initDrops);

// Цвета: зелёный/голубой оттенок
function draw() {
    // Чёрный фон с небольшим затуханием для эффекта следа
    ctx.fillStyle = 'rgba(10, 15, 31, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0ff'; // циановый
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        // Случайный символ
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Сброс капли вверх с random для разнообразия
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 35);

// Небольшое консольное приветствие (эффект присутствия)
console.log('%c🔥 fsociety terminal v1.0 🔥', 'color: #00ffff; font-size: 16px; font-weight: bold;');
console.log('%cДобро пожаловать, хакер. Доступ разрешён.', 'color: #ff66cc; font-style: italic;');
console.log('%c> Загрузка инструментов...', 'color: #00ff00;');
console.log('%c> Система готова.', 'color: #00ff00;');
