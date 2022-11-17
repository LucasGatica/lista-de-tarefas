const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click',deletarTarefa)
    return botaoDeleta
  }
  
  const deletarTarefa = (evento) =>{
        const botaoDelete = evento.target
        const tarefaDelete = botaoDelete.parentElement
        
        tarefaDelete.remove()
        return botaoDelete
  }

export default BotaoDeleta;