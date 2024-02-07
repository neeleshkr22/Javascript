const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        //show the result
        if(bmi<18.6){
            result.innerHTML = `<span>Underweight</span>`;
        }else{
            result.innerHTML = `<span>Overweight</span>`
        }
        result.innerHTML = `<span>${bmi}</span>`
    }

})