function calcular() {
  let renda = Number(document.getElementById("renda").value);
  let gastos = Number(document.getElementById("gastos").value);

  let saldo = renda - gastos;
  let percentual = (gastos / renda) * 100;

  let mensagem = "";

  if (percentual <= 70) {
    mensagem = "Situação saudável 😎";
  } else if (percentual <= 90) {
    mensagem = "Alerta ⚠️: cuidado com os gastos";
  } else {
    mensagem = "Crítico 🚨: você está gastando demais!";
  }

  document.getElementById("resultado").innerHTML =
    `Saldo: R$ ${saldo.toFixed(2)} <br>
     Gastos: ${percentual.toFixed(1)}% <br>
     ${mensagem}`;
}