  import BotaoDeleta from "./components/deletaTarefa.js"
  import BotaoConclui from "./components/concluiTarefa.js"
  
  const criarTarefa = (evento)=>{

    const input = document.querySelector('[data-form-input]')
    evento.preventDefault()
    console.log(input.value)
    

    const lista = document.querySelector('[data-list]')
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content"> ${input.value}</p>`
    tarefa.innerHTML = conteudo
    lista.appendChild(tarefa)
    
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

  input.value=""

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click',criarTarefa)

