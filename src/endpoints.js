import { Router } from "express";
import { dobro, somar, media, tabuada, temperatura, corPrimaria, freqCaractere, ingressoCinema, maiorNumero } from './services.js'

const server = Router()

server.get('/ping', (req, resp) => {
    try{
        resp.send('pong');
    } catch(err){
        resp.send({
            erro: err.message
        })
    }
} )

server.get('/dobro/:numero', (req, resp) => {
    try{
        const numero = Number(req.params.numero);
        if(isNaN(numero))
            throw new Error('Valor invalido')
        const response = dobro(numero);
        resp.send({x: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
} )

server.get('/somar', (req, resp) => {
    try{
        const a = Number(req.query.a);
        const b = Number(req.query.b);
        if(isNaN(a, b))
            throw new Error('Valor invalido')
        const response= somar(a, b);
        resp.send({x: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/somarp', (req, resp) => {
    try{
        const { a:aa, b:bb } = req.body;
        if(isNaN(aa, bb))
            throw new Error('Valor invalido')
        const response = somar(aa, bb);
        resp.send({soma: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/media', (req, resp) => {
    try{
        const {nota1:n1, nota2:n2, nota3:n3} = req.body;
        if(isNaN(n1, n2, n3))
            throw new Error('Valor invalido')
        const response= media(n1, n2, n3);
        resp.send({x:response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/tabuada', (req, resp) => {
    try{
        const numero= Number(req.query.t);
        if(isNaN(numero))
            throw new Error('Valor invalido')
        const response = tabuada(numero);
        resp.send(response)
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/temperatura', (req, resp) => {
    try{
        const temp = Number(req.query.t);
        if(isNaN(temp))
            throw new Error('Valor invalido')
        const response = temperatura(temp);
        resp.send({febre: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dia2/corPrimaria/:cor', (req, resp) => {
    try{
        const cor = req.params.cor;
        const response = corPrimaria(cor);
        resp.send({primaria: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.get('/dia2/freqCaracter/:texto/:caracter', (req, resp) => {
    try{
        const texto = req.params.texto;
        const caracter = req.params.caracter;
        const response = freqCaractere(texto, caracter)
        resp.send({freq: response})
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/ingressoCinema', (req, resp) => {
    try{
        const { 
            qtdinteiras:qtdinteiras, 
            qtdMeias:qtdmeias,
            diaSemana:diasemana,
            nacionalidade:nacionalidade
        } = req.body;
        
        let x= ingressoCinema(qtdinteiras, qtdmeias, diasemana, nacionalidade);
        resp.send({total:x});
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

server.post('/dia2/maiorNumero', (req, resp) => {
    try{
        const array = req.body;
        const response = maiorNumero(array);
        resp.send ({maior: response});
    } catch(err){
        resp.status(404).send({
            erro: err.message
        })
    }
})

export default server;