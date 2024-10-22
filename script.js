let sideA=2;
let sideB=2;
let sideC=2;
function heronF(a,b,c){
    return (1/4)*(Math.sqrt(4*Math.pow(a,2)*Math.pow(b,2)-(Math.pow((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2)),2))))
}
let area = heronF(sideA,sideB,sideC);
console.log(heronF(sideA,sideB,sideC));