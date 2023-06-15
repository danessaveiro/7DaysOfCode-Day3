const msgInicial = `Nesse desafio faremos algumas perguntas sobre sua jornada. Vamos prosseguir?`;

alert(msgInicial);

const perguntaUm = prompt("Você gostaria de seguir para a área de 'Front-End' ou 'Back-End'?");

let linguagem = "";

if (perguntaUm === "Front-End") {
    linguagem = prompt("E você quer aprender React ou Vue?");
} else if (perguntaUm === "Back-End") {
    linguagem = prompt("E você quer aprender C# ou Java?");
} else {
    alert(`Você não digitou uma área válida.`);
}

let respostaUm = "";

if (linguagem === "React") {
    respostaUm = alert("React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.");
}
    else if (linguagem === "Vue") {
        respostaUm = alert("Vue é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.")
    }
    else if (linguagem === "C#") {
        respostaUm = alert("A linguagem C# destina-se a ser simples, moderna, de propósito geral e orientada a objetos.")
    }
    else if (linguagem === "Java") {
        respostaUm = alert("Java é o código que conecta a internet com o banco de dados, gerencia as conexões dos usuários e alimenta a aplicação web.")
    }

const perguntaDois = prompt("Digite '1' para seguir se especializando na área escolhida ou '2' para seguir se desenvolvendo para se tornar Fullstack.");

let respostaDois = "";

if (perguntaDois === "1") {
    respostaDois = alert(`Continue se especializando em ${linguagem} para dominar a área de ${perguntaUm}!`)
    } else if (perguntaDois === "2") {
        respostaDois = alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
    } else {
        alert(`Você não digitou uma área válida.`);
    }

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");

while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
    }

alert("Muito obrigada pela sua participação, ela é muito importante para que eu continue avançando na programação!");
