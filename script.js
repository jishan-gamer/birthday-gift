function moveButton() {
    const btn = document.getElementById('noBtn');
    
    // Screen ki width aur height nikalna
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    // Button ki nayi position set karna
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}