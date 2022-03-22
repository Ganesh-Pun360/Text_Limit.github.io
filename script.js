
// alert("hello");


let forme = () => {

    let myTex = document.getElementById("myText").value;
    let newTex=myTex.slice(0,21);
    let TextLength = newTex.length;
  

    if(myTex != ''){

        console.log(TextLength);

                 if( TextLength < 20){

                    if(TextLength < 3){

                        document.getElementById("notify").innerHTML = "this is not enough , write more words 🤨";
                        document.getElementById("notify").style.display = "block";
                        document.getElementById("notify").style.color = "#fff";
                        document.getElementById("notify").style.backgroundColor = "crimson ";

                    }else{
                        
                    document.getElementById("notify").innerHTML = "Submitted Successfully 🥳";
                    document.getElementById("notify").style.backgroundColor = "green";
                    document.getElementById("notify").style.display = "block";
                    document.getElementById("notify").style.color = "#fff";
                    }
                
                }else{

                    document.getElementById("notify").innerHTML = "can not be more than 20 words 🤨";
                    document.getElementById("notify").style.display = "block";
                    document.getElementById("notify").style.backgroundColor = "red ";
                    document.getElementById("notify").style.color = "#fff";

                }

    }else{

        document.getElementById("notify").innerHTML = "cann't be empty 👀";
        document.getElementById("notify").style.display = "block";
        document.getElementById("notify").style.backgroundColor = "crimson ";
        document.getElementById("notify").style.color = "#fff";
    }

};