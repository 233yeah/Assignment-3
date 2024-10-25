const sideAh = document.getElementById("sideAh");
const sideBh = document.getElementById("sideBh");
const sideCh = document.getElementById("sideCh");
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
}

    function newton(g){
        let x1=0;
        do while(Math.abs(g-x1)<0.0001){
        x1=g-((6*Math.pow(g,4)-(13*Math.pow(g,3))-(18*Math.pow(g,2))+(7*g)+6)/(24*Math.pow(g,3)-(39*Math.pow(g,2))-(36*g)+7));
        g=x1;
    }
    }
    console.log(newton(1));

    function poly(c,e,x){

    }