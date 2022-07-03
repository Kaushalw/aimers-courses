console.log('Hello World!');
var body=document.getElementById('exampleFormControlTextarea2').value;
var subject=document.getElementById('subject').value;
function send(){
        location.href='mailto: vk4783240@gmail.com?body='+body+'subject='+subject;
}
