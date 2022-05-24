export function dobro(n){
    return n * 2;
}

export function somar(a, b){
    return a + b;
}

export function media(n1, n2, n3){
    return (n1 + n2 + n3) / 3;
}

export function tabuada(n) {
    let tabuada = [];
    for(let i=0;i<=10;i++)
        tabuada[i] = n * i;
    return tabuada;
}

export function temperatura(t){
    let stateTemp = false;
    if(t > 37.5)
        stateTemp = true;
    return stateTemp;
}

export function corPrimaria(cor){
    return cor == "azul" || cor == "amarelo" || cor == "vermelho"
}

export function freqCaractere(texto, caractere){
    let frequence = 0;
    for(let i=0;i<texto.length; i++)
        if(texto[i] == caractere)
            frequence++;
    return frequence
}

export function ingressoCinema(qtdi, qtdm, dsemana, nacionalidade) {
    let inteiras= 28.5;
    let meias= 14.25;

    if (dsemana=="quarta")
        inteiras= 14.25;
    if (nacionalidade=="brasileira"){
        inteiras= 5.0;
        meias= 5.0;
    }
    return (qtdi * inteiras) + (qtdm * meias);
}

export function maiorNumero(numeros){
    let r= 0;
    for (let i=0; i<numeros.length; i++)
        if(numeros[i]>r)
            r= numeros[i];
    return r;
}