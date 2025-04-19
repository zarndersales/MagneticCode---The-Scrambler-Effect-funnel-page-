const track = document.querySelector('[data-carousel]');
const items = [...track.children];

// Clone items to ensure loop looks seamless
for (let i = 0; i < 50; i++) {

    items.forEach(item => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
    });
}