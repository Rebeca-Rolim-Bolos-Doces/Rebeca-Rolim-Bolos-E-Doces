// CONFIGURAÇÕES GERAIS
// Substitua o número abaixo pelo número real do WhatsApp da loja (com DDD e Código do País)
const TELEFONE_LOJA = "+558899014914"; 

/**
 * Função para gerar o pedido de Pronta-Entrega e enviar direto para o WhatsApp
 */
function pedirProntaEntrega(nomeProduto) {
    const mensagem = `Olá, Rebeca! Gostaria de encomendar o item da pronta entrega: *${nomeProduto}*. Ele ainda está disponível?`;
    const url = `https://wa.me/${TELEFONE_LOJA}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

/**
 * Evento do Formulário de Orçamento para Encomendas
 */
document.getElementById('formOrcamento').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio tradicional da página

    // Captura os dados inseridos pelo usuário
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const convidados = document.getElementById('convidados').value;
    const tipo = document.getElementById('tipo').value;
    const detalhes = document.getElementById('detalhes').value;

    // Formata a data para o padrão Brasileiro (DD/MM/AAAA)
    const dataFormatada = data.split('-').reverse().join('/');

    // Monta a mensagem personalizada para o WhatsApp
    let mensagem = `*Solicitação de Orçamento - Rebeca Rolim Bolos*\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `📅 *Data do Evento:* ${dataFormatada}\n`;
    mensagem += `👥 *Convidados:* ${convidados} pessoas\n`;
    mensagem += `🍰 *Interesse:* ${tipo}\n`;
    
    if (detalhes.trim() !== '') {
        mensagem += `📝 *Detalhes:* ${detalhes}\n`;
    }

    // Abre o WhatsApp da loja com o texto pré-preenchido
    const url = `https://wa.me/${TELEFONE_LOJA}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
});