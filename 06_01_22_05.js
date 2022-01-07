function run(){
    let q = parseInt(document.getElementById("a").value);
    let w = parseInt(document.getElementById("b").value);
    let e = (-w)/q
    if(q===0){
        alert("Phương trình vô nghiệm");
    }
    else{
        alert("x = " + e);
    }
}