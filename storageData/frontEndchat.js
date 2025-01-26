
function heightOfTextarea(){
    const textarea = document.querySelector("textarea");
textarea.addEventListener('keyup', e=>{
    textarea.style.height ="auto";
    let scHeight = e.target.scrollHeight;


    textarea.style.height = `${scHeight}px`
    
})
}

heightOfTextarea();

const textareas= document.querySelector("#sendreceiver1")
const sendButton = document.querySelector(".send-button")
const timeSend = new Date().toLocaleString('en-AD',{hour :'numeric', minute:"numeric", hour12:true});
let Boxmessage1 = document.querySelector(".Box-messageBE") 




sendButton.addEventListener('click',display)
const creatingHtmlTag = (message) =>
    `
    <div class="receiver">
        ${message.sender}
        <br><span class="message-time">${message.time}</span>
    </div>
    ` 

    export let sendMessage = JSON.parse(localStorage.getItem('sendmessage'))
    
   let NewMessage = JSON.parse(localStorage.getItem('newMessage1'))

  if(!sendMessage){
    sendMessage=[];
  }

 if(!NewMessage){
    NewMessage= [];
 }

 window.onload = ()=>{
    NewMessage.forEach( message => {
    Boxmessage1.innerHTML += message
    });

 }
  function saveTostorage(){
    localStorage.setItem('newMessage1', JSON.stringify(NewMessage)); 
    localStorage.setItem('sendmessage', JSON.stringify(sendMessage)); 
      
 }

 function display(){
    let  message = {
        dates : "",
        sender : textareas.value,
        time :timeSend
    };
      /* || send the message to the html file */
    
 
    
   
    Boxmessage1.innerHTML +=creatingHtmlTag(message); 
      NewMessage.push(creatingHtmlTag(message));
      sendMessage.push(creatingHtmlTag(message));
     textareas.value="";
    heightOfTextarea( textareas, textareas.style.height = `43px`)
     saveTostorage();
    };
    
  