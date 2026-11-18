// ---- Ride carousel (3 visible slots: left / centre / right) ----
const cards = [...document.querySelectorAll('#carousel .card')];
let order = [0, 1, 2]; // order[i] = card index sitting in slot i
function render() {
  cards.forEach((c, i) => {
    c.className = 'card';
    const slot = order.indexOf(i);
    c.classList.add(slot === -1 ? 'pos-hide' : 'pos-' + slot);
  });
}
document.getElementById('next').onclick = () => { order.push(order.shift()); render(); };
document.getElementById('prev').onclick = () => { order.unshift(order.pop()); render(); };
cards.forEach(c => c.addEventListener('click', () => toast('Selected ' + c.dataset.name)));
render();

// ---- Nav active state ----
const links = document.querySelectorAll('[data-link]');
links.forEach(a => a.addEventListener('click', () => {
  links.forEach(l => l.classList.remove('active')); a.classList.add('active');
}));

// ---- Get started / upload / map / form ----
document.getElementById('upload').onclick = () => toast('Upload clicked');
document.getElementById('map').onclick = () => window.open('https://www.google.com/maps/search/?api=1&query=Tampo,+Botolan,+Zambales', '_blank');
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  if (!f.name.value.trim() || !f.email.value.trim() || !f.message.value.trim()) return toast('Please fill in all fields');
  toast('Message sent!'); f.reset();
});
function toast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2000);
}
