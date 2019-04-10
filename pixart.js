//when I input a value into the field, the div should change to the value I input


//JS with querySelectors

// let newColor = 'pink'

// document.querySelector('#set-color').addEventListener('click',()=>{
// newColor = document.querySelector('#color-field').value
// document.querySelector('.brush').style.backgroundColor = newColor;
// event.preventDefault();
// })

// for(let i = 0; i<8000; i++){
// let newSquare = document.createElement('div')
// newSquare.classList.add('square')
// newSquare.addEventListener('mouseover', function() {
// newSquare.style.backgroundColor = newColor

// })
// document.body.appendChild(newSquare);
// }

//jQuery
//When I type a value into the input field, it change the display of the div to the color of

let newValue = 'pink';

$('#set-color').click(function() {
newValue = $('#color-field').val();
$('.brush').css('background-color', newValue)
event.preventDefault();
})

console.log(newValue);


for (let i = 0; i<8000; i++){
    let newSqu = $('<div/>')
    newSqu.addClass('square')
    newSqu.on('mouseover', function(){
        newSqu.css('background-color', newValue) 
    })
    $('body').append(newSqu)

}


// let newColor = 'pink'

// document.getElementById('set-color').addEventListener('click', function(){
// newColor = document.getElementById('color-field').value
// document.getElementsByClassName('brush')[0].style.backgroundColor = newColor;
// event.preventDefault() 
// })



//  for(let i = 0; i<8000; i++){
// let newSquare= document.createElement('div')
// newSquare.classList.add("square")
// newSquare.addEventListener('mouseover', function(){
// newSquare.style.backgroundColor = newColor
    
// })
// document.body.appendChild(newSquare);

// }



