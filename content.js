chrome.storage.sync.get(['buttonStyle'], (result) => {
    const style = result.buttonStyle || 'custom';
    console.log('Using button style:', style);

    const button = document.createElement('button');
    button.textContent = '↑ Top';
    button.id = 'scroll-to-top-button';

    if (style === 'simple') {
        button.style.fontFamily = 'inherit';
        button.style.fontSize = 'inherit';
        button.style.backgroundColor = 'transparent';
        button.style.border = '1px solid currentColor';
        button.style.color = 'inherit';
    } else if (style === 'copy') {
        const existing = document.querySelector('button, a');
        if (existing) {
            const computed = getComputedStyle(existing);
            button.style.fontFamily = computed.fontFamily;
            button.style.fontSize = computed.fontSize;
            button.style.backgroundColor = computed.backgroundColor;
            button.style.color = computed.color;
            button.style.borderRadius = computed.borderRadius;
            button.style.border = computed.border;
            button.style.padding = computed.padding;
        }
    }

    document.body.appendChild(button);

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.pointerEvents = 'auto';
        } else {
            button.style.opacity = '0';
            button.style.pointerEvents = 'none';
        }
    });
});
