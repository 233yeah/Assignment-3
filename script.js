
function heronf(a,b,c){
    return (1/4)*(Math.sqrt(4*Math.pow(a,2)*Math.pow(b,2)-(Math.pow((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2)),2))))
}

function ambf(a,b,angle){
    let h = b*Math.sin(angle*(Math.PI/180));
    if(a==0||b==0||angle==0){
        return("please enter a number in each field")
    }
    else if(angle<180){
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
    let x1=g-((6*Math.pow(g,4)-(13*Math.pow(g,3))-(18*Math.pow(g,2))+(7*g)+6)/(24*Math.pow(g,3)-(39*Math.pow(g,2))-(36*g)+7));
        while(Math.abs(g-x1)>0.000000000001){
            g=x1;
            x1=g-((6*Math.pow(g,4)-(13*Math.pow(g,3))-(18*Math.pow(g,2))+(7*g)+6)/(24*Math.pow(g,3)-(39*Math.pow(g,2))-(36*g)+7));
      }
    return (x1);
    }

    document.addEventListener("DOMContentLoaded", function() {
        const hbutton = document.getElementById("heronButton");
        hbutton.addEventListener("click", function() {
            const a = parseFloat(document.getElementById("sideAh").value);
            const b = parseFloat(document.getElementById("sideBh").value);
            const c = parseFloat(document.getElementById("sideCh").value);
            const area = heronf(a, b, c);
            if(a!=0||b!=0||c!=0){
                document.getElementById("resultH").value = Math.round(area * 100) / 100;}  
            else{ 
                document.getElementById("resultH").value = "please enter a number in each field";}
        });

        const abutton = document.getElementById("ambButton");
            abutton.addEventListener("click", function() {
            const acase = parseFloat(document.getElementById("sideAac").value);
            const bcase = parseFloat(document.getElementById("sideBac").value);
            const ccase = parseFloat(document.getElementById("angleAac").value);
            document.getElementById("resultAc").value =  ambf(acase, bcase, ccase);  });
        
        const newButton = document.getElementById("newButton");
            newButton.addEventListener("click", function() {
            const guess = parseFloat(document.getElementById("guess").value);
            document.getElementById("resultN").value =  newton(guess);  });

        });
   