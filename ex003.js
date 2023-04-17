<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos Dom</title>
    <div>
      <style>
      div#area{
      font: normal 20pt Arial;
      background : rgb(174, 53, 53);
      color: white;
      width:200px;
      height: 200px;
      line-height:200px;
      text-align: center;

      

      }
      </style>
    </div>
</head>
<body> 
    <div>
      id = "area">
      Interaja...

    </div>
    <script>
        var a = window.document.getElementById('area') //objeto
        a.addEventListener('click',clicar)
        a.addEventListener ('mouseenter', entrar)     //eventos 
        a.addEventListener ('mouseout', sair)

        function clicar(){
          a.innertext = 'Clicou'  
          a.style.blackground = 'red'
        }
        function entrar(){
          a.innertext = 'Entrou'
            
        }
        function sair(){
            a.innertext = 'Saiu'
            a.style.background = 'green'
        }

    </script>
    
</body>
</html>
