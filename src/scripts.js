const app=document.getElementById('root')
const container=document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'http://localhost:8027/bagel', true)
request.onload = function (){
    var data = JSON.parse(this.response)
    if(request.status >=200 && request.status <400){
    data.forEach(item =>{

       const card=document.createElement('div')
       card.setAttribute('class', 'card')
       const h1 = document.createElement('h1')
       h1.textContent=item.bagel
       const p= document.createElement('p')
       p.textContent=`"$: "+${item.price}...`
       container.appendChild(card)
       card.appendChild(h1)
       card.appendChild(p)
      
    })
}else{const errorMessage = document.createElement('h2')
errorMessage.textContent=`Oh no, it's not working!`
app.appendChild(errorMessage)
    
}
}

request.send()