# Criando uma LandingPage e comitado no GitHub

APRENDENDO A COMMITAR O PROJETO NO GITHUB
1-  criamos um repositorio no GitHub com um arquivo READ.md
2-  Abrimos o VS code e abrimos o nosso projeto - Projeto_Landingpage - abrimos um novo terminal- testamos se o git esta instalado como o comando:
-> git -v

3-  Para baixar o repositorio do GitHub para meu projeto, lá no Github na aba <>Code copiamos o HTTPS, voltamos no VS Code e damos o comando:

-> git clone +  o HTTPS copiado, assim ja conseguimos ver o arquivo README no projeto local.

4- Agora podemos fazer alguma alteracao nesse arquivo README para configurar o projeto local e conectalo com o repositorio do GitHub

5 depois da alteracao no aquivo ou no projeto, no terminal digitamos: 

-> git add . (adiciona as alteraçoes na area de stage-area de preparacao do git). OBS: Se você quiser verificar quais arquivos foram adicionados à área de stage, pode usar o comando:

-> git status. Ele mostrará algo como:
- Arquivos na área de stage (prontos para commit) aparecerão em verde.
- Arquivos não rastreados ou modificados, mas ainda não adicionados, aparecerão em vermelho.

Agora podemos dar um:

-> git commit -m "aqui descrevemos o nome do comite" .

6 Se aparecer uma mensagem dizendo que o Autor identidade desconhecida:

 - Please tell me whu you are -  
 
 é porque e necessario configurar o git config:
  --global user.name "digirar o seu email do github" e 
  git config --global user.name "seu nome". 
  
  Para saber qual é o meu email no github clicamos no icone da direita em cima, configuracao, E-mail e ali aparece o meu email cadastrado no github.

7 Então vou configurar o meu:

git config --global user.name "waloa30@gmail.com"
git config --global user.name "walquiria"

8 agora que ja configuramos(se necessario), ja podemos novamente dar o:

-> git commit , depois damos um:

-> git push origin main ou master (dependendo do branche raiz que esteja la no meu repositorio no  github, nesse caso é a main) 

Para saber qual é a nossa branche clicamos o repositorio LandingPage e embaixo no nome esta escrito main, depois desse passo pode que ele peca a configuracao da minha conta no github, clicamos em continuar em coneccao com o navegador, se eu ja estiver conectado na conta do github ele ja Autentica o github ou o Git na minha maquina automaticamente.

9  nesse momento o Git na maquina local ja "SUBIU" lá no GitHub todas as minhas alteracoes realizadas no projeto.
