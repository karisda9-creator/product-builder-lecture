const foods = ['치킨', '피자', '마라탕', '삼겹살', '초밥', '돈까스', '냉면', '떡볶이', '햄버거', '파스타', '국밥', '쌀국수', '텐동', '보쌈', '족발'];

const foodDisplay = document.getElementById('food-display');
const recommendBtn = document.getElementById('recommend-btn');
const resetBtn = document.getElementById('reset-btn');
const themeToggle = document.getElementById('theme-toggle');

// 추천 기능
recommendBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * foods.length);
    foodDisplay.textContent = foods[randomIndex];
    foodDisplay.style.color = 'var(--primary-color)';
});

// 초기화 기능
resetBtn.addEventListener('click', () => {
    foodDisplay.textContent = '메뉴를 추천받으세요!';
    foodDisplay.style.color = 'var(--text-color)';
});

// 테마 변경 기능
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});
