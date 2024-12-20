fetch("http://localhost:8000/booking").then((res)=>res.json())
.then(
    (data)=>{
        
        table=document.getElementById("booking_list").children[0];
        console.log(table.children[0]);
        for(let i=1;i<table.children.length;++i){
            
            row=table.children[i];
            row.children[0].innerText=data["dates"][i-1];
            row.children[1].innerText=data["status"][i-1];
            
        }
    }

)
.catch((error)=>{
    console.log("Error occured: "+error);
    table=document.getElementById("booking_list").children[0];
        console.log(table.children[0]);
        for(let i=1;i<table.children.length;++i){
            
            row=table.children[i];
            row.children[0].innerText="-";
            row.children[1].innerText="-";
            
        }
    alert("Проблема с сервером. Некоторые данные отсутствуют(");
})