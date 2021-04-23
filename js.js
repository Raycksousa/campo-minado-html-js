function controle(num,k){
    k=k-1;
    if(num==0){
        var valor=document.getElementsByTagName("input");
        valor[k].getAttribute("con");
        valor[k].setAttribute('value','*');
        alert("booom");
        location.reload();
    }else{
        var valor=document.getElementsByTagName("input")
        valor[k].getAttribute("con");
        valor[k].setAttribute("value",num);
    }
    
}
