let searchBox = document.querySelector('#searchbox')
let customers = document.querySelector('#customers')
let tags = document.getElementsByTagName('td')
let arr = Array.from(tags)



searchBox.addEventListener('keyup', function (e) {
    let searchElement = e.target.value;
    for (let i = 0; i < arr.length; i++) {

        let element = arr[i].innerText.toLowerCase();
        console.log(arr[i])
        // console.log(element.indexOf(searchElement.toLowerCase()))

        if (element.indexOf(searchElement.toLowerCase()) !== -1) {
            // console.log(searchElement)
            arr[i].style.display = 'block'
            console.log('found')
        }
        else {
            arr[i].style.display = 'none'
            console.log('not found')
        }
        // console.log(element.innerText.indexOf(searchElement))
        // console.log(element.indexOf(searchElement))



    }


})


