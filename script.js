// スキルタグを動的に生成
const skills = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker', 'SQL'];

const container = document.getElementById('skillTags');
skills.forEach(skill => {
  const span = document.createElement('span');
  span.className = 'tag';
  span.textContent = skill;
  container.appendChild(span);
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
  });
});
