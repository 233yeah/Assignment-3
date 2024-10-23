let sideAh=2;
let sideBh=2;
let sideCh=2;
function heronf(a,b,c){
    return (1/4)*(Math.sqrt(4*Math.pow(a,2)*Math.pow(b,2)-(Math.pow((Math.pow(a,2)+Math.pow(b,2)-Math.pow(c,2)),2))))
}
let area = heronf(sideAh,sideBh,sideCh);
console.log(area);

let sideAac=2;
let sideBac=2;
let angleAac=2;
function ambf(a,b,angle){
    angle = angle*180/Math.PI
    console.log(angle);
    let h = b*Math.sin(angle)
    if(h<a<b){
        return("There are two triangles")
    }
    return 
}
console.log(ambf(0.5,1,1));
