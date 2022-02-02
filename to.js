

// HTML'deki elementleri seç.
let taskDOM = document.querySelector('#task')
let btnDOM = document.querySelector('#liveToastBtn')
let listDOM = document.querySelector('#list')
let ullength = document.getElementsByTagName("li");


// Hem çarpı hem de üzerini çizmek için yapılanlar
for (let i = 0; i < ullength.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; // Çarpı İşareti
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check;
}
// Butonu dinle. Buton click olduğunda elemanEkle fonksiyonunu çağır.
btnDOM.addEventListener('click', elemanEkle)


// Fonksiyonlar
function removeButton() {
    this.parentElement.remove(); // Maddeyi sildik.
}

function check() {
    this.classList.toggle("checked"); // Check edilen taskın üzerini çizdik
}

function elemanEkle() {

    // Task boşsa error classını çağır değilse success classını çağır.
    if (taskDOM.value == "") {
        $(".error").toast("show");
    } else {
        $(".success").toast("show");

        // Task'a yazılan veri listeye eklendi. 
        let liDom = document.createElement('li')
        listDOM.appendChild(liDom);
        liDom.innerHTML = task.value;
        taskDOM.value = ""; // Eklendikten sonra input tekrar silindi. 

       
        liDom.onclick = check;
        
        let closeButton = document.createElement("span");
            closeButton.textContent = "\u00D7";
            closeButton.classList.add("close");
            closeButton.onclick = removeButton;
            
            liDom.append(closeButton);
            listDOM.append(liDom);
            inputElement.value = ("");


    }
}








