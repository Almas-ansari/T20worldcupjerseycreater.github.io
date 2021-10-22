
document.getElementById('screenshot').addEventListener('click', function() {
        html2canvas(document.querySelector('#tshirtFacing'), {
            onrendered: function(canvas) {
                //document.body.appendChild(canvas);
            return Canvas2Image.saveAsPNG(canvas);


            }
        });
    });
