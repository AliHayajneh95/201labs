'use strict';
var score = 0;
var i = true;
while (i)
{
    var str = prompt('his hair color is black or white');
    if(str.toLowerCase() == 'black')
    {
        alert('right!')
        i = false;
        console.log(str);
        score = score + 1;
    } 
    else
    {
        alert('wronge!');
    }
        i = false;
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
        score = score + 1;
    } 
    else
    {
        alert('wronge!');
    }
        i = false;
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
        score = score + 1;
    } 
    else
    {
        alert('wronge!');
    }
        i = false;
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
        score = score + 1;
    } 
    else
    {
        alert('wronge!');
    }
        i = false;
    }

i = true;
while (i)
{
    var str = prompt('hes learnin coding? yes/no');
    if(str.toLowerCase() == 'yes')
    {
        alert('right!')
        i = false;
        console.log(str);
        score = score + 1;
    } 
    else
    {
        alert('wronge!');
    }
        i = false;
}






i = true;
var a = 1;
while (i)
{
    var str = prompt('his gpa is? pick number from 0-100, ${a}/4 attempts');
    if(str.toLowerCase() == '89')
    {
        
        alert('right!')
        i = false;
        console.log(str);
        console.log('on attempt ' + a + 'solved');
        score = score + 1;
    }
    else if (str.toLowerCase() < 89)
    {
        if(a == 4)
        {
            alert('89');
            i = false;
        }
        else
        {
        alert('higher');
        a = a + 1;
        }
    }
    else if (str.toLowerCase() > 89)
    {
        if(a == 4)
        {
            alert('89');
            i = false;
        }
        else
        {
        alert('lower');
        a = a + 1;
        }
    }
    console.log(a + 'attempts taken');
}








i = true;
a = 1;
var arr = ['c#, javascript, java'];
while (i)
{
    var str = prompt('what programming languages he knows?, ${a}/6 attempts');
    if(str.toLowerCase() == 'c#' || str.toLowerCase() == 'javascript' || str.toLowerCase() == 'java')
    {
        score = score + 1;
        alert('right!, i know c#, javascript, and even java')
        i = false;
        console.log(str);
        console.log('on attempt ' + a + 'solved');

    }
    else
    {
        a = a + 1;
        if(a == 6)
        {
            alert('c#, javascript, java');
            i = false;
        }
    }
    console.log(a + 'attempts taken');
}

alert('your score is ' + score + '/7');


var elements = document.getElementsByClassName("hide");
var x = elements.length;

while(x != 0)
{
    elements.item(x).style.display = "block";

    x--;
}
