let URL = " https://api.github.com/users/coder-ali-ba"
let input = document.getElementById("myInput");


const getData= async() => {
    let response=( await fetch(URL));  
    let data = await response.json();
    console.log(data);
    
    let butt =document.getElementById("myButton");
    butt.addEventListener("click" , ()=>{
    if(input.value=="coder-ali-ba"){
        document.getElementById("photo1").src=data.avatar_url;
        document.getElementById("para").innerText=data.login;
        let a=data.email='habibali8770@gmail.com'
        document.getElementById("inbut").innerText=a;
        let b=data.text="Uses HTML , CSS , JAVASCRIPT , BootStrap, for Development"
        document.getElementById("para2").innerText=b;
    }else{
        document.getElementById("container").innerHTML="User Not Found"
    }
   
    })
    
}
getData()




