// Filter project cards without external libraries.
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    cards.forEach(card => { card.hidden = category !== 'all' && card.dataset.category !== category; });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
// On GitHub Pages, link to the repository owner's GitHub profile automatically.
const match = window.location.hostname.match(/^([a-z0-9-]+)\.github\.io$/i);
if (match) document.getElementById('github-link').href = `https://github.com/${match[1]}`;
