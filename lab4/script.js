const submit_btn=document.getElementById('submit_btn');
const ask_form=document.getElementById("ask_form");

function checkForm(event){
  
    const elements=ask_form.elements;

    Array.from(elements).forEach((element) => {
      const { name, value } = element;
      console.log(name);
      if(name){
        
        if(name==="phone" && (value.length!==11 || value[0]!=="8")){
            alert('Неправильный формат номера');
            event.preventDefault();
        }
      }
    }
    
)

}


submit_btn.addEventListener('click',checkForm);