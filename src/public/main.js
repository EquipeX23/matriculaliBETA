
function start(){
    var chars = "001122334455667788991010";
    var tokenLength = 4;
    var token = "";

    for (var i = 0; i < tokenLength; i++) {
      var access_token = Math.floor(Math.random() * chars.length);
      token += chars.substring(access_token, access_token + 1);
    }
    localStorage.setItem('token',token)
    document.getElementById('access_token_res').innerHTML='seu codigo de acesso é '+token
}





function authEntrar(){
    var token = localStorage.getItem('token')
    var username = document.getElementById('username').value
    var randomNumber = document.getElementById('randomNumber').value
    var id = Math.random().toString(32).substring(2)

    if(randomNumber == token){
        setTimeout(() => {
            
            location.href=`/user/${id}/home`
        }, 3000);
        document.getElementById('access_token_res').innerHTML='Seja bem vindo de volta '+username
    }
    else{
        alert('verefique o codigo de acesso')
    }
  }

  function matriAluno(){
    
  }
