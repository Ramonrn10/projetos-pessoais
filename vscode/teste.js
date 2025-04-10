function responderMensagem() {
    const input = document.getElementById("user-message");
    const mensagem = input.value.trim();
    const chat = document.getElementById("chat-box");
  
    if (mensagem === "") return;
  
    // Adiciona a mensagem do usuário
    chat.innerHTML += `<p><strong>Você:</strong> ${mensagem}</p>`;
  
    // Gera uma resposta baseada em palavras-chave simples
    let resposta = "Desculpe, não entendi. Poderia reformular?";
  
    if (mensagem.toLowerCase().includes("trabalhista")) {
      resposta = "Atuamos fortemente em causas trabalhistas. Você pode explicar melhor sua situação?";
    } else if (mensagem.toLowerCase().includes("indenização")) {
      resposta = "Você sofreu algum tipo de dano ou acidente? Podemos te orientar sobre o processo de indenização.";
    } else if (mensagem.toLowerCase().includes("demissão")) {
      resposta = "Você foi demitido recentemente? Podemos analisar se seus direitos foram respeitados.";
    } else if (mensagem.toLowerCase().includes("horas extras")) {
      resposta = "Você tem trabalhado além do seu horário sem receber por isso? Fale mais sobre sua jornada.";
    } else if (mensagem.toLowerCase().includes("obrigado") || mensagem.toLowerCase().includes("valeu")) {
      resposta = "Estamos à disposição! Se precisar, entre em contato com um de nossos advogados.";
    }
  
    // Adiciona a resposta ao chat
    setTimeout(() => {
      chat.innerHTML += `<p><strong>Atendente:</strong> ${resposta}</p>`;
      chat.scrollTop = chat.scrollHeight;
    }, 600);
  
    input.value = "";
  }
  