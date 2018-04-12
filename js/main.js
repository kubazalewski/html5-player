const btnBig = document.querySelector('.player__button--bigger');

let isPlaying = false;

handleClick = () => {

    if(isPlaying) {
        btnBig.textContent = '►'
    } else {
        btnBig.textContent = '| |'
    }
    
    isPlaying = !isPlaying;
}

btnBig.addEventListener('click', handleClick);