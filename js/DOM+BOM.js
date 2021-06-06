//Add Default Local Storage Class on Body
document.body.classList.add(localStorage.getItem('pageColor'));
var el =document.querySelectorAll('.color-switcher li'),
classList =[];
for(var i = 0; i < el.length; i++) {
//Get Class List 
    classList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener('click',function () {
        //Remove All Old Classes
        document.body.classList.remove(...classList);
        //Add Current class From Li Data Attribute
        document.body.classList.add(this.getAttribute('data-color'));
        //Add Data To Local Storage
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
        
    },false);
}
