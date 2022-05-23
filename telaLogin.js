// cria variaveis e vetores para armazenar valores
let nome, senha
let nomeArmazenado
let senhaArmazenada
let nomeLogin
let senhaLogin
let op
let nomes = []
let senhas = []

// Recebe a opção digitada pelo usuário e armazena na variável
op = Number(prompt("MINI SISTEMA DE CADASTRO E LOGIN\n\n1 - Cadastro\n 2 - Login\n 3 - Sair"))

// Realiza o SWOTCH na variável
switch (op) {

    // Caso opção escolhida seja 1
    case 1:
        //Recebe valores salvos das chaves do localStorage e armazena na variável
        nomes = JSON.parse(localStorage.getItem('nomes'))
            //Recebe valores salvos das chaves do localStorage e armazena na variável
        senhas = JSON.parse(localStorage.getItem('senhas'))
            //Verifica se o vetor do localstorage é null

        if (nomes == null) {
            //Recria os vetores
            nomes = []
            senhas = []
                //Chama a função "Cadastro"
            Cadastro()
                //Senão
        } else {
            //Chama a função "Cadastro"
            Cadastro()
        }

        // Finaliza o encadeamento do switch 
        break
        // Caso opção escolhida seja 2
    case 2:
        //Cria uma variável boleana auxiliar "flag"    
        let logou = false
            // Recebe o nome para login e armazena        
        nomeLogin = prompt("Digite seu Usuário para LOGIN") // novo nome para loguin porque o anterior ficou salvo no local storage
            // Recebe a senha para login e armazena
        senhaLogin = prompt("Digite sua senha para LOGIN")
            //Recebe valores salvos das chaves do localStorage e armazena na variável
        nomes = JSON.parse(localStorage.getItem('nomes'))
            //Recebe valores salvos das chaves do localStorage e armazena na variável
        senhas = JSON.parse(localStorage.getItem('senhas'))

        //Cria um loop do tamanho do vetor
        for (i = 0; i < nomes.length; i++) {

            alert("Entrou")
                //Verifica se o nome e a senha digitados são iguais ao nome e a senha da vez salva dos localStorage
            if (nomeLogin == nomes[i] && senhaLogin == senhas[i]) {

                //Troca o estado da variavel logou para true
                logou = true


            }

            if (logou) {

                alert("Logou")

            } else {

                alert("Falha no login")

            }

        }
        // Finaliza o encadeamento do switch 
        break

        // Caso opção escolhida seja 3
    case 3:
        //Mostra mensagem
        alert("OP SAIR")
            // Finaliza o encadeamento do switch 
        break
        //Caso opção seja diferente de 1, 2 ou 3
    default:
        //Mostra mensagem
        alert("OP Opção inválida")

}


function Cadastro() {
    // Nome cadastro
    nome = prompt("Digite seu nome de usuario para cadastro") // joga no local storage
        // Adiciona nome digitado no vetor de nomes
    nomes.push(nome)
        // Salva o nome digitado no localStorage na chave 'nomes'
    localStorage.setItem('nomes', JSON.stringify(nomes)) // joga no local storage
        // Salva a senha digitado no localStorage na chave 'senhas'
    senha = prompt("Digite sua senha para cadastro") // joga no local storage
        // Adiciona a senha digitada no vetor de senhas
    senhas.push(senha)
        // Salva a senha digitada no localStorage na chave 'senhas'
    localStorage.setItem('senhas', JSON.stringify(senhas)) // joga no local storage


}