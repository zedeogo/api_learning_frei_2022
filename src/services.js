export const dobro = n => n * 2;

export const somar = (a, b) => a+b;

export const media = (n1, n2, n3) => (n1 + n2 + n3) / 3;

export const tabuada = (n) => {
    let t = [];
    for(let i=0;i<=10;i++)
        t[i] = n * i;
    return t;
}

export const temperatura = t => {
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