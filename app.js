console.log("Ola mundo")
console.log(2+2)
console.log(2*2)
console.log(10/2)
console.log(10-8)

console.log(10*2)
console.log(30+1)
console.log(100/2)
console.log(35.7*3.8)
console.log(99+21+125)
console.log(32-3/4.5)
console.log(4+4+4+4/4)
console.log(127.75+53.82)
console.log(355-22.7)

/* comentário de carias linhas */

// comentário de uma linha

/* variáveis */
/* 
- variável é um espaço reservado na memória para armazenar um valor 
- toda variável tem um nome e um tipo
- a varaável deve ter um nome significativo, exemplo:
   - uma variável que vai armazear a informação idade pode ter o nome de IDADE, uma variaável que vai armazenar o preço de venda de um produto pode ter o nome PRECOVENDA
   - a recomendação é que o nome da variaável seja simples e significatico, sem caracteres especiais, sem acento, sem espaço e  lembrando que o javascript diferencia maiúsculas de minúsculas, isso significa que PrecoVenda é difente de precovenda */
   //var nome
   let nome = 'Marcio'
   let idade = 28
   let nota1 = 10
   let fumante = false
   //nome

   console.log(nome)
   console.log(idade, nota1, fumante)
   console.log('Sua nota é ' + nota1)

   /* Tipos */
   console.log(typeof nome) // 'Marcio' é string
   console.log(typeof idade) // 36 é number
   console.log(typeof nota1) // 10 é number
   console.log(typeof fumante) // fase é boolean

   let veiculos = ('carro', 'moto', 'avião')
   console.log(veiculos)
   console.log(typeof veiculos)

   let cliente = {
    nome:'Marcio',
    idade: 28

   }
   console.log(cliente)
   console.log(typeof cliente)

   let salvar = function(){

   }
   console.log(typeof salvar)

   /* operadores relacionais */
   console.log(10>3) // maior
   console.log(5<3) // menor
   console.log(15 >= 10) // maior ou igual
   console.log(15 <= 10) // menor ou igual
   console.log(10 == 10) // igual 
   console.log(10 != 10) // diferente

   /* operadores lógicos */
   console.log('===========')
   console.log(10>3 && 10>5) // Operador E (AND) - com operador E todas as expressões devem ser verdadeiras para o resultado ser verdadeiro

   console.log(10>3 || 10>15 || 10>8) // Operador OU (OR) - com operador OU apenas uma expressão precisa ser verdadeira para o resultado ser verdadeiro

   console.log(!10>3) // Operador NÃO(NOT) - o operador NOT inverte o resultado da expressão, se for verdadeiro ele inverte para falso e se for falso ele invere para verdadeiro
    
   //alert("Olá mundo")
   //document.write("<h3>Olá mundo</h3>")


   function Rosa(){
   // inserir um valor em um elemento da página
   document.getElementById('titulo').innerHTML = 'Aula 02 de JS'
   document.getElementById('texto').innerHTML = 'Vamos estudar interação com o DOM'

   document.body.style.backgroundColor='violet'
   document.body.style.color = 'white'

   document.getElementById('titulo').style.color='yellow'

   //pagar o valor de um elemento da página
   let titulo = document.getElementById('titulo').innerHTML

   console.log(titulo)
   }

   function Laranja(){
      document.body.style.backgroundColor = 'orangered'
      document.body.style.color = 'lighblue'

   }


   

   