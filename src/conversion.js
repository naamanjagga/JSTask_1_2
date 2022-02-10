function myfunction() {
    var input_1 = parseInt(document.getElementById('text_1').value);
    var input_2 = parseInt(document.getElementById('text_2').value);

    var area = input_1*input_2;
    var peri = 2*(input_1 + input_2);
   
    document.getElementById('div_4').innerHTML = "Area is " + area + " sq. mtrs";
    document.getElementById('div_5').innerHTML = "Perimeter is " + peri + " mtrs";

}