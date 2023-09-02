(function(){
    
    const sliders = [...document.querySelectorAll('.prod__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentProd = document.querySelector('.prod__body--show').dataset.id;
        value = Number(currentProd);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('prod__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('prod__body--show');

    }

})();