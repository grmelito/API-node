const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const estabelecimentos = {}

function salvarEstabelecimento(estabelecimento) {
    if(!estabelecimento.id) estabelecimento.id = sequence.id
    estabelecimentos[estabelecimento.id] = estabelecimento
    return estabelecimento
}

function getEstabelecimento(id){
    return estabelecimentos[id] || {}
}

function getEstabelecimentos(){
    return Object.values(estabelecimentos)
}

function excluirEstabelecimento(id) {
    const estabelecimento = estabelecimentos[id]
    delete estabelecimentos[id]
    return
}

module.exports =  {salvarEstabelecimento, getEstabelecimento, getEstabelecimentos, excluirEstabelecimento}