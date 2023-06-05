// Your Code Here
//let response = await fetch('http://localhost:3001/updateBook',{
//    method:'PATCH',
//    headers:{'Content-Type':'application/json'},
//    body: JSON.stringify({
//        'id':3,
//        'title':'Legend of Arathrae',
//    })
//})
//let updatedBook= await response.json()
//console.log(updatedBook)
async function loadBooks(){
    let result = await fetch('http://localhost:3001/listBooks')        
    
    let books= await result.json()

    books.forEach(book => {
        let booksList = document.getElementById('books')

        let listItem = document.createElement('li')
        listItem.textContent = book.title

        let listQuantity = document.createElement('input')
        listQuantity.value = book.quantity

        let saveButton = document.createElement('button')
        saveButton.textContent = "Save"
        saveButton.addEventListener('click',() =>{
            fetch('http://localhost:3001/updateBook',{
                method:'PATCH',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    id: book.id,
                    quantity: listQuantity.value
                })
            })
        })
        
        listItem.append(listQuantity,saveButton)

        booksList.append(listItem)
    })

}
loadBooks()



