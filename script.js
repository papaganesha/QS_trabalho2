

function mostrarAlertaWarning(titulo, texto) {
  var alert = document.getElementById("statusAlerta");
  var div = document.createElement("div");
  div.classList.add("alert");
  div.classList.add("alert-warning");
  div.classList.add("alert-dismissible");
  div.classList.add("fade");
  div.classList.add("show");
  div.classList.add("mx-auto");
  div.classList.add("w-75");
  div.classList.add("mb-5");
  div.setAttribute("role", "alert");
  var btn = document.createElement("button");
  btn.classList.toggle("btn-close");
  btn.setAttribute("data-bs-dismiss", "alert");
  btn.setAttribute("aria-label", "Close");
  var strong = document.createElement("strong");
  strong.setAttribute("id", "alerta");
  strong.textContent = titulo;
  var text = document.createElement("p");
  text.textContent = texto;
  div.append(strong);
  div.append(text);
  div.append(btn);
  alert.innerHTML = "";
  alert.append(div);
}

function mostrarAlertaSuccess(titulo, texto) {
  var alert = document.getElementById("statusAlerta");
  var div = document.createElement("div");
  div.classList.add("alert");
  div.classList.add("alert-success");
  div.classList.add("alert-dismissible");
  div.classList.add("fade");
  div.classList.add("show");
  div.classList.add("mx-auto");
  div.classList.add("w-75");
  div.classList.add("mb-5");
  div.setAttribute("role", "alert");
  var btn = document.createElement("button");
  btn.classList.toggle("btn-close");
  btn.setAttribute("data-bs-dismiss", "alert");
  btn.setAttribute("aria-label", "Close");
  var strong = document.createElement("strong");
  strong.setAttribute("id", "alerta");
  strong.textContent = titulo;
  var text = document.createElement("p");
  text.textContent = texto;
  div.append(strong);
  div.append(text);
  div.append(btn);
  alert.innerHTML = "";
  alert.append(div);
}



function cadastro(e) {
  e.preventDefault();
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var cpf = document.getElementById("inputCPF");
  var dataNasc = document.getElementById("inputDT");
  var senha = document.getElementById("senha");
  var confirmaSenha = document.getElementById("confirmaSenha");
  if (nome.value && email.value && cpf.value && dataNasc.value && senha.value && confirmaSenha.value) {
    //SE SENHAS COMBINAREM
    if (!verificaSenhas(senha.value, confirmaSenha.value)) {
      mostrarAlertaWarning("As senhas n??o combinam.", "Por favor digite novamente.");
    } else {
      if (!verificaCpf(cpf.value)) {
        mostrarAlertaWarning("CPF inv??lido.", "Por favor digite um CPF correto.");
      } else {
        if (!verificaNasc(dataNasc.value)) {
          mostrarAlertaWarning("Data de nascimento inv??lida.", "Por favor digite uma data correta, idade minima 12 anos.");
        } else {
          mostrarAlertaSuccess("Logado com sucesso.", "Aproveite a plataforma!!!");
        }
      }
    }
  } else {
    mostrarAlertaWarning("Faltam dados.", "Preencha todos os campos.");
  }

}

var btnCadastro = document.getElementById("btnCadastro");
if (btnCadastro) {
  btnCadastro.addEventListener("click", cadastro)
}


const login = (e) => {
  e.preventDefault();
  //const users = [
  //{
  //email: "joaopedro@gmail.com",
  //senha: "12345678"
  //},
  //{
  //email: "sandro@gmail.com",
  //senha: "12345678"
  //}
  //]

  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

  if (email.value && senha.value) {
    if (verificaEmail(email.value)) {
      if (email.value == "joaopedro@gmail.com" || email.value == "sandro@gmail.com") {
        if (senha.value == "12345678") {
          mostrarAlertaSuccess("Logado com sucesso.", "Aproveite a plataforma!!!");
        } else {
          mostrarAlertaWarning("Senha inv??lida.", "Senha n??o confere, tente novamente.");
        }
      } else {
        mostrarAlertaWarning("Email n??o existe.", "Email n??o encontrado, tente novamente.");
      }
    } else {
      mostrarAlertaWarning("Email inv??lido.", "Email digitado ?? invalido, tente novamente.");
    }

  } else {
    mostrarAlertaWarning("Faltam dados.", "Preencha todos os campos.");
  }
}

var btnLogin = document.getElementById("btnLogin");
if (btnLogin) {
  btnLogin.addEventListener("click", login);
}

function verificaEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function verificaSenha(senha) {
  console.log(senha.length);
  if (senha.length >= 8 && senha.length <= 50) {
    return true
  } else {
    return false
  }
}

verificaSenha("123456734567891011230491230123941204123012391420310");

function verificaSenhas(senha, confirmaSenha) {
  if (senha == confirmaSenha) {
    return true
  } else {
    return false
  }
}


function verificaCpf(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf == '') return false;
  // Elimina CPFs invalidos conhecidos	
  if (cpf.length != 11 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999")
    return false;
  // Valida 1o digito	
  add = 0;
  for (i = 0; i < 9; i++)
    add += parseInt(cpf.charAt(i)) * (10 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(9)))
    return false;
  // Valida 2o digito	
  add = 0;
  for (i = 0; i < 10; i++)
    add += parseInt(cpf.charAt(i)) * (11 - i);
  rev = 11 - (add % 11);
  if (rev == 10 || rev == 11)
    rev = 0;
  if (rev != parseInt(cpf.charAt(10)))
    return false;
  return true;
}

//Verificar se usuario tem 12 anos ou mais
function verificaNasc(data) {
  var dataNasc = new Date(data);
  var anoNasc = dataNasc.getFullYear();
  var anoAtual = new Date().getFullYear();
  var anoMinimo = anoAtual - 12;
  if (anoNasc <= anoMinimo && anoNasc != anoAtual) {
    return true
  } else {
    return false
  }

}

module.exports = { verificaEmail, verificaCpf, verificaNasc, verificaSenha, verificaSenhas};
