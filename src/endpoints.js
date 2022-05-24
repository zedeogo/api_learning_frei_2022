import { Router } from "express";
import { dobro, somar, media, tabuada, temperatura } from './services.js'

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
        const a= Number(req.query.a);
        const b= Number(req.query.b);
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

export default server;