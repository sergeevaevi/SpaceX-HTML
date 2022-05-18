let blocks = document.querySelectorAll('.profit > div');
for (const block of blocks)
    block.addEventListener('mousemove', e => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        block.style.setProperty('--x', x + 'px');
        block.style.setProperty('--y', y + 'px');
    });
let btn = document.querySelector('button');

let line = document.querySelector('.hint');
let extra_line = document.querySelector('.hint-content');
line.style.setProperty('--page_center', document.documentElement.scrollWidth / 2 - extra_line.getBoundingClientRect().x+10 + 'px');
console.log(line.style.cssText)

window.addEventListener('resize', e => {
    line = document.querySelector('.hint');
    extra_line = document.querySelector('.hint-content');
    console.log(line.style.cssText)
    line.style.setProperty('--page_center', document.documentElement.scrollWidth / 2 - extra_line.getBoundingClientRect().x+10 + 'px');
})

let menu = document.querySelector('.nav__links li:first-child');

menu.addEventListener('click', e => {

        const links = document.querySelectorAll(".nav__links li");
        for (const link of links)
            if (link.className === "") {
                console.log(link)
                link.className += " responsive";
            } else {
                link.className = "";
            }
    }
);
