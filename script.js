// Seleciona os botões "Saiba mais"
const buttons = document.querySelectorAll('.popup');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Dados dos produtos
const products = [
  {
    title: "Caderno CLIFF",
    text: "O Caderno CLIFF é perfeito para quem busca organização com um toque de sofisticação. Com capa dura resistente, design minimalista e páginas de alta gramatura, ele é ideal para anotações, planejamentos e criatividade.",
    image: "./util/produtos/caderno01.png"
  },
  {
    title: "Caderno de Anotações",
    text: "O Caderno de Anotações combina estilo e funcionalidade para tornar suas anotações ainda mais especiais. Com capa dura resistente, acabamento sofisticado e folhas de alta qualidade, ele é ideal para estudos, trabalho e criatividade.",
    image: "./util/produtos/caderno01.png"
  }
];

// Abrir modal ao clicar em "Saiba mais"
buttons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    modalTitle.innerText = products[index].title;
    modalText.innerText = products[index].text;
    modalImage.src = products[index].image;
    modal.style.display = "flex";
  });
});

// Fechar modal ao clicar no "X"
closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

// Fechar modal ao clicar fora dele
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
