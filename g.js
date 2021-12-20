function func() {


    let rand_num = Math.floor(Math.random()*6)+1

    console.log(rand_num)

    let num = Math.floor(Math.random()*6)+1

    console.log(num)

    document.getElementById('dice-1').innerHTML='<img src="img/' + rand_num + '.jpg"  alt="" />'

    document.getElementById('dice-2').innerHTML='<img src="img/'+num+'.jpg"   alt="" />'

    if (rand_num>num)
        document.getElementById('result').innerHTML='Player 1 won';

    else if (num>rand_num)
        document.getElementById('result').innerHTML='Player 2 won';

    else if(num===rand_num)
        document.getElementById('result').innerHTML='Draw';

    else
        alert("EROOR")
}

func()
