let sideAh=2;
let sideBh=2;
let sideCh=2;
function heronf(a,b,c){
    return (1/4)*(Math.sqrt(4*Math.pow(a,2)*Math.pow(b,2)-(Math.pow((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2)),2))))
}
let area = heronf(sideAh,sideBh,sideCh);
console.log(area);
console.log(Math.round((area*100))/100);

let sideAac=2;
let sideBac=2;
let angleAac=2;
function ambf(a,b,angle){
    let h = b*Math.sin(angle*(Math.PI/180));
    console.log(h);
    console.log(a);
    console.log(b);

    if(angle<180){
        if(a==h){
            return("Right Triangle.")
        }
        else if(a>b){
            return("Acute. There is one triangle")
        }
        else if(h>a){
            return("No triangle")
        }
        else {
            return("Acute. There are two triangles")
        }
    }
    else{
        if(a==(h*-1) || a<b){
            return("No triangle")
        }
        else{
            return("Obtuse. One triangle")
        }
    }

    return 
}
console.log(ambf(5.209445330007909,30,170));
