
myFilters = document.querySelectorAll(".filters-counter div.filtering-div")

for (f of myFilters){
    f.addEventListener("click", function(){

        filteringElements = f.closest(".filters-counter").querySelectorAll("div.filtering-div")

        for (el of filteringElements){
            el.classList.remove("selected")
        }
        
        this.classList.add("selected")

        filteringValue = this.getAttribute("data-filter")

        galleryImages = f.closest(".gallery-div").querySelectorAll(".gallery img")

        counter = 0
        for (el of galleryImages){

            imageFileName = el.getAttribute("src").split(/[\\/]/).pop()

            if ( !imageFileName.includes(filteringValue)){
                el.style.display = 'none'
            } else {
                el.style.display = 'block'
                counter++
            }
        }

        elementCounter = f.closest(".gallery-div").querySelector(".filtering-counter")

        if( counter == 1 ){
            elementCounter.innerText = counter + " fotka"
        } else if ( counter >= 2 && counter <= 4) {
            elementCounter.innerText = counter + " fotky"
        } else {
            elementCounter.innerText = counter + " fotek"
        }
        

    })
}




