const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => { 
    mario.classList.add('jump');

    setTimeout(() => { 

        mario.classList.remove('jump');
        
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    console.log(marioPosition);

    if(pipePosition <= 115 && pipePosition > 0 && marioPosition < 80) { 

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/turtle.png';
        mario.style.width = '80px';
        mario.style.margin = '1px';
        mario.style.paddingBottom = '20';

        clearInterval(loop);
    }

}, 10)
    

document.addEventListener('keydown', jump)