const between = (number , min , max) => number >= min && number <= max;

const elegirMedioDeTransporte = (distancia) => {
    if(between(distancia , 0 , 1000)) return "pie";
    if(between(distancia , 1000 , 10000)) return "auto";
    if(between(distancia , 10000 , 30000)) return "colectivo";
    if(between(distancia , 30000 , 100000)) return "auto";
    if(distancia > 100000) return "avion";
}