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

