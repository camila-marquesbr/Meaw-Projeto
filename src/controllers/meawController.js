const petsCollection = require('../models/petsSchema')


//getAll lugares
const getPets = (req,res)=>{
    console.log(req.url)

    petsCollection.find((error,pets)=>{ 
        if(error){
            return res.status(500).send(error)
        }else{
            return res.status(200).send({
                mensagem: "Todos os pets",
                pets
            })
        }
    })
}




//GET getNomePets - busca os pets pelo nome
const getNomePets = (req, res) => {
  petsCollection.findOne({ nome: req.params.nome }, (error, nome) => {
    if (nome) {
      return res.status(200).json({
        mensagem: "Nome encontrado",
        nome

      })

    } else {
      return res.status(500).send({
        mensagem: "Nome não encontrado",
        error
      })
    }
  })
}


//POST para add pets 
const addPet = (req, res) => {
  const petBody = req.body
  const cadastro = new petsCollection(petBody)

  cadastro.save((error) => {
    if (error) {
      return res.status(400).send(error)
    } else {
      return res.status(200).send({
        mensagem: `${"Obrigado! Cadastro de pet realizado com sucesso"}`,
        cadastro
      })
    }
  })
}


//atualiza cadastro
const updatePet = (req, res) => {
  const idParam = req.query
  const contatoBody = req.body
  const update = { new: true }

  petsCollection.findByIdAndUpdate(idParam, contatoBody, update, (error, pets) => {

    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao atualizar!",
        error
      })

    } else {
      return res.status(200).send({
        mensagem: "Cadastro do pet foi atualizado com sucesso",
        pets
      })
    }
  }
  )
}



//DELETE - deleta Pet por id específico e retorna mensagem 

const deleteByIdPet = (req, res) => {
  const idParam = req.query._id
  petsCollection.findByIdAndDelete(idParam, (error, pets) => {
    if (error) {
      return res.status(500).send({
        mensagem: "Algo inesperado aconteceu ao deletar",
        error
      })

    } else {
      if (pets) {
        return res.status(200).send({
          mensagem: "O cadastro do pet foi apagado com sucesso"
        })
      } else {
        return res.sendStatus(404)
      }
    }
  })
}


module.exports = {
  getPets,
  getNomePets,
  addPet,
  updatePet,
  deleteByIdPet
}