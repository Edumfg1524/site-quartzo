const modal = document.querySelector(".modal");
const mascara = document.querySelector(".mascara-modal");

function mostrarModal(event) {
    event.preventDefault()
    modal.style.display = "block";
    mascara.style.visibility = "visible";
  }

function esconderModal() {
  modal.style.display = "none";
  mascara.style.visibility = "hidden";
}



function enviarWhats() {
    const telefone = '5541991498368';
    const texto = "Olá! Gostaria de fazer um orçamento com vocês.";
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');
  }


  function toggleResposta(elemento) {
    const resposta = elemento.querySelector(".resposta");
    const isVisible = resposta.classList.contains("ativa");

    document.querySelectorAll(".faq .resposta").forEach(r => {
      r.classList.remove("ativa");
    });

    if (!isVisible) {
      resposta.classList.add("ativa");
    }
  }



  
  function enviarAvaliacao(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const avaliacao = document.getElementById('avaliacao').value;
    const nota = document.getElementById('nota').value;}






