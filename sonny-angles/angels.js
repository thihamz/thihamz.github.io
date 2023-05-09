
/*
let sonnyAngels = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    function printSonnyAngles(){
        for (let i = 0; i < sonnyAngels.length; i++) {
            text += sonnyAngels[i];
            // text += "<img src="sonnyAngels[i]">";
          }
          
          document.getElementById("images").innerHTML = text;
        
        }

*/

function printSonnyAngles(){
    let images = [
        'images/apple.png', 'images/dragonfruit.png'
        ];
        
        let container = document.getElementById('image-container');
        
        for (let i = 0; i < images.length; i++) {
            let img = document.createElement('img');
            img.src = images[i];
            container.appendChild(img);
        }
}
   
