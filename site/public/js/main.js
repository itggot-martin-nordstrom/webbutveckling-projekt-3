function mouseCoordinates(event){
    yCoord = Math.trunc(event.clientY/10) + "° " + Math.floor(Math.random(100)*100) + "' " + Math.floor(Math.random()*1000000)/10000 + "'' S"
    xCoord = Math.trunc(event.clientX/10) + "° " + Math.floor(Math.random(100)*100) + "' " + Math.floor(Math.random()*1000000)/10000 + "'' E"
    
    document.querySelector(".x-coords").innerHTML = xCoord
    document.querySelector(".y-coords").innerHTML = yCoord
}

function toggleSidebar(){
    sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("sidebar-active")
}

function notificationSquad(input){
    holder = document.querySelector(".notifications-holder")
    // baseNotification = document.querySelector("#base-notification")
    // clone = baseNotification.cloneNode(true)
    if(holder.childElementCount != 0){
        holder.removeChild(holder.childNodes[0])
    }
    
    notification = document.createElement("div")
    holder.appendChild(notification)
    
    notification.classList.add("notification")
    header = document.createElement("h1")
    notification.appendChild(header)
    header.innerHTML = "Gucci coat : blue : M"
    
    subtitle = document.createElement("h2")
    notification.appendChild(subtitle)
    subtitle.innerHTML = "Item added"
    
    icon = document.createElement("i")
    notification.appendChild(icon)
    icon.classList.add("material-icons")
    icon.innerHTML = "arrow_right"

    if(input == top){
        notification.classList.add("top-notification")
    }else{
        notification.classList.add("bottom-notification")
    }

    console.log(notification)

    setTimeout(function(){
        notification.remove()
    }, 3000)
}

function toggleOption(input){
    if(input == 2){
        option = document.body.querySelector(".options-colour")
        option.classList.toggle("option-active")

        icon = document.body.querySelector("#colour-toggle")

        if(icon.innerHTML == "keyboard_arrow_down"){
            icon.innerHTML = "keyboard_arrow_up"
        }else{
            icon.innerHTML = "keyboard_arrow_down"
        }
    }
}