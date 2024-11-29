// let idProduto = document.getElementById('entradas-idProduto').value;
// let produto = document.getElementById('entradas-produto').value;
// let quantidade = document.getElementById('entradas-qtd').value;

// function InserirProdutos(){
//     tabela = document.getElementById('entradas-tabela-entrada');  
//     console.log('Entrou')  
// }

// Função para abrir o modal
// function AbrirModalConsultaCliente() {
//     var modalElement = document.getElementById('Modal-Consulta-Cliente');
//     if (modalElement) {
//         var ModalConsultaCliente = new bootstrap.Modal(modalElement);
//         ModalConsultaCliente.show();
//     } else {
//         console.error('Modal não encontrado.');
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     var modalElement = document.getElementById('Modal-Consulta-Cliente');
//     var ModalConsultaCliente = new bootstrap.Modal(modalElement);
//     // Agora a função de abrir o modal pode ser chamada normalmente
//     document.querySelector('#btn-vendas-localizar-cliente').addEventListener('click', function () {
//         ModalConsultaCliente.show();
//     });
// });


function AbrirModal(modal){
    let modalElement = document.getElementById(modal); // Seleciona o modal
        const modalInstance = new bootstrap.Modal(modalElement); // Cria a instância do modal
        modalInstance.show(); // Abre o modal
}


