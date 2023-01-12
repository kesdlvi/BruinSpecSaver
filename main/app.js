const text = document.getElementsByTagName("body");
const links = document.getElementsByTagName("a");

// const colors  = ["#3b0944","#5f1854", "#1abb9c"]
const colors  = ["#3b0944","#5f1854", "#1abb9c","#f38181","#2b2024", "#272343", "#1abb9c" ]
const fonts = ["Comic Sans MS", "Helvetica", "Georgia", "ariel", "Times New Roman", "Verdana", "Georgia", "Courier New", "Trebuchet MS"]

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request,sender,sendResponse)
    if (request.task === "iamTesting") {
        for(let i = 0; i < text.length; i++){
            text[i].style.fontFamily = "Comic Sans MS";
            text[i].style.backgroundColor = "#e1f4f3";
            text[i].style.color = "black";
            text[i].style.lineHeight = "2";
        
            
           
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#7c73e6";
        }
        
    } 
     if (request.task === "iamTesting1") {
        for(let i = 0; i < text.length; i++){
            text[i].style.fontFamily = "Helvetica";
            text[i].style.backgroundColor = "#fafafa";
            text[i].style.color = "black";
            text[i].style.lineHeight = "2";
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#7c73e6";
        }
        
    }     

    if (request.task === "iamTesting2") {
        for(let i = 0; i < text.length; i++){
            text[i].style.backgroundColor = "#272343";
            text[i].style.color = "#ffffff";
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#bae8e8";
        }
        
    }     

    if (request.task === "iamTesting3") {
        for(let i = 0; i < text.length; i++){
            text[i].style.backgroundColor = "white";
            text[i].style.color = "black";
            text[i].style.fontFamily = "ariel";
            text[i].style.lineHeight = "1.2";
        
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#7c73e6";
        }
        
    }     


    if (request.task === "iamTesting4") {
        for(let i = 0; i < text.length; i++){
            text[i].style.backgroundColor = "beige";
            text[i].style.color = "black";
            text[i].style.fontFamily = "Georgia";
            text[i].style.lineHeight = "2";
        
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#7c73e6";
        }
        
    }    
    
    if (request.task === "iamTesting5") {
        for(let i = 0; i < text.length; i++){
            const randomNum = Math.floor(Math.random() * colors.length);
            const randomNum2 = Math.floor(Math.random() * fonts.length);
            text[i].style.backgroundColor = "white";
            text[i].style.color = colors[randomNum];
            text[i].style.fontFamily = fonts[randomNum2];
            text[i].style.lineHeight = "2";
        
        }
        for (let i = 0; i < links.length; i++) {
            links[i].style.color = "#7c73e6";
        }
        
    }    

    //create button for 'fun'    
    //fix sizing 

    const response = {status: "done"};
    sendResponse(response);
});
