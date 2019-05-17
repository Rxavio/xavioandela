  
    function validate(){
    let name=document.andelaChallenge.username.value;  
    let email=document.andelaChallenge.email.value;  
    let password=document.andelaChallenge.password.value;  
      
    if (name==null || name==""){  
      alert("Enter your First");  
      return false;  
    }

    else if(password.length<6){  
      alert("Password must be at least 6 characters");  
      return false;  
      }  
     
      else if (email==null || email=="")
      {  
       
            alert("Make sure that entered your email");  
            return false;  

    }
} 
