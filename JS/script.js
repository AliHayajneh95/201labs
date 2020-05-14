'use strict';
            
var i = true;
while (i)
{
    var str = prompt('his hair color is black or white');
    if(str.toLowerCase() == 'black')
    {
        alert('right!')
        i = false;
        console.log(str);
    } 
    else
        alert('wronge!')
}
i = true;
while (i)
{
    var str = prompt('he has a bach in cs or engineering');
    if(str.toLowerCase() == 'cs')
    {
        alert('right!')
        i = false;
        console.log(str);
    }
    else
        alert('wronge!')
}
i = true;
while (i)
{
    var str = prompt('he is 25 or 30 years old?');
    if(str.toLowerCase() == '25')
    {
        alert('right!')
        i = false;
        console.log(str);
    }
    else
        alert('wronge!')
}
i = true;
while (i)
{
    var str = prompt('he eats so much food, yes/no?');
    if(str.toLowerCase() == 'no')
    {
        alert('right!')
        i = false;
        console.log(str);
    }
    else
        alert('false!')
}

var elements = document.getElementsByClassName("hide");
var x = elements.length

while(x != 0)
{
    elements.item(x).style.display = "block";

    x--;
}
