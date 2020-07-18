const nav = document.querySelector('.nav');
const level3 = document.querySelectorAll('.level-3');
const level4 = document.querySelectorAll('.level-4');
const level5 = document.querySelectorAll('.level-5');
const span = document.querySelectorAll('.toggle span');

for (const item of level3) {
    item.hidden = true;
}

for (const item of level4) {
    item.hidden = true;
}

for (const item of level5) {
    item.hidden = true;
}

nav.onclick = (e) => {
    if (e.target.tagName != 'SPAN') return;

    let childrenContainer = e.target.parentNode.parentNode.querySelector('ul');
    
    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}

for (const item of span) {
    item.onclick = (e) => {
        let childrenContainer = e.target.parentNode.parentNode.querySelector('ul');
    
        if (!childrenContainer.hidden) {
            item.style.transform = 'rotate(0deg)';
        } else {
            item.style.transform = 'rotate(-180deg)';
        }
    }
    
}


