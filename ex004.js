<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Somando valores</title>
</head>
<body> 
    <h1>Somando valores</h1>
    <input type="number" name="txt1" id="txt1">
    <input type="number" name="txt2" id="txt2">
    <input type="button" value="somar" onclick = "somar()">
    <div id = "res"> RESULTADO</div>
    <script>
    function somar(){
           
        var tn1 = window.document.getElementById('txt1')
        var tn2 = window.document.getElementById('txt2')
        var n1 =  Number(tn1.value)
        var n2 =  Number(tn2.value)
        var s = n1 + n2
        var res = window.document.getElementById('res')
        res.innerHTML = s

    }

    </script>
</body>
</html> 
