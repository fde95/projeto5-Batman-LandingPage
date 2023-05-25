document.addEventListener('DOMContentLoaded', function() {


var lighter = document.documentElement;
lighter.addEventListener('mousemove', e => {
    lighter.style.setProperty('--x', e.clientX + 'px')
    lighter.style.setProperty('--y', e.clientY + 'px')
})
})