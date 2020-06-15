window.onload = function(){
   
    for (let i = 0; i < 400; i++){
        // create new span element
        let pixel = document.createElement ('span');
        // Define the css of the new span element
        pixel.style.height = '8px';
        pixel.style.width = '8px';
        pixel.style.border = '1px solid black';
        // append the new span element to the canvas
        let canvas = document.querySelector ('#canvas');
        canvas.appendChild(pixel);
        }


  // Add eventListner to color pixels   
let ColorPixel = document.querySelectorAll('span');
let currentColor = 'red';
     // use loop to repeat each time pixel is clicked it colors in red
for (let pixel of ColorPixel) {
    pixel.addEventListener('click',function(event) {
        pixel.style.backgroundColor = currentColor;
    }
    )
 }


      // Add a colot pallet
let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

for (let color of colorChoices) {
   // create the div
     let newColor = document.createElement('div');
   // Define the css for the new div element
   newColor.style.height = '20px';
   newColor.style.width = '20px';
   newColor.style.border = '1px solid black';
   newColor.style.backgroundColor = color;
// add eventlister
    newColor.addEventListener ('click', function(){
    currentColor = color;
    let selected = document.querySelector ('#selected');
    selected.style.backgroundColor = color;
    });
   // append the new div elements to the canvas
   let pallet = document.querySelector ('#pallet');
   pallet.appendChild(newColor);
}
selected.style.height = '20px';
selected.style.width = '20px';
selected.style.border = '1px solid black';
selected.style.backgroundColor = CurrentColor;
  }

