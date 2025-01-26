import { sendMessage } from "./frontEndchat.js";
function heightOfTextarea(){
    const textarea = document.querySelector("textarea");
    textarea.addEventListener('keyup', e=>{
    textarea.style.height ="auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`
    
})
}   
const textareas = document.querySelector("#sendreceiver1")
const sendButton = document.querySelector(".send-button")
const timeSend = new Date().toLocaleString('en-AD',{hour :'numeric', minute:"numeric", hour12:true});
let Boxmessage = document.querySelector(".Box-message");
   



window.onload = ()=>{
    newMessage.forEach( message => {
    Boxmessage.innerHTML += message
    });

 }


    sendButton.addEventListener('click',display)
    const creatingHtmlTag = (message) =>
        `
        <div class="sender">
            ${message.sender}
            <br><span class="message-time">${message.time}</span>
        </div>
        ` 
      
        export let sendMessage1 = JSON.parse(localStorage.getItem('sendMessage1'))
         if (!sendMessage1){
            sendMessage1=[];
        }
     
              let newMessage= JSON.parse(localStorage.getItem('newMessage'))
            
    
     if(!newMessage){
        newMessage= [];
     }
     
      
    
      function saveTostorages(){
        localStorage.setItem('newMessage', JSON.stringify(newMessage)); 
        localStorage.setItem('sendMessage1', JSON.stringify(sendMessage1));
     }


    function display(){
        let  message = {
            dates : "",
            sender:textareas.value,
            time :timeSend
        };
          /* || send the message to the html file */
        Boxmessage.innerHTML += creatingHtmlTag(message); 
        newMessage.push(creatingHtmlTag(message))
        sendMessage1.push(creatingHtmlTag(message))

         
         
        textareas.value="";
        heightOfTextarea( textareas, textareas.style.height = `43px`)
         saveTostorages();
        };
        
      
  if(sendMessage != ""){
        newMessage.push(sendMessage[sendMessage.length -1])
        localStorage.removeItem('sendmessage', JSON.stringify(sendMessage))
        saveTostorages();
    }
  