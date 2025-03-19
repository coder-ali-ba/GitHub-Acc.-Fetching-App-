
let a= "https://api.github.com/users/rizwanjamal";
 
const getphoto = async () => {
    let res = await fetch(a);
    let da = await res.json();
    document.getElementById("photo1").src=da.avatar_url;
    document.getElementById("para").innerText=da.bio;
    document.getElementById("div1").innerText=da.followers + " Followers";
    document.getElementById("div2").innerText=da.following + " Following";
}

getphoto()


document.getElementById('generate-url').addEventListener('click', function() {
        let userName = document.getElementById('username').value;
        let url = `https://api.github.com/users/${userName}`;
        if(userName==""){
            alert("Please Write User Name")
        }
        else{
            const getData= async () => {
                let response= await fetch(url);
                let data = await response.json()
            
                document.getElementById("photo1").src=data.avatar_url;
                
                document.getElementById("para").innerText=data.bio;
                document.getElementById("div1").innerText=data.followers + " Followers";
                document.getElementById("div2").innerText=data.following + " Following";
                
            }
            getData() 
        }
});

// document.getElementById("mode").addEventListener("click", ()=>{
//     document.getElementById("container").style.backgroundColor="white";
//     document.getElementById("div1").style.color="black";
//     document.getElementById("div2").style.color="black";
//     document.getElementById("para").style.color="black";
//     document.getElementById("generate-url").style.color="black"
// })

