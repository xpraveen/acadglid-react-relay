let books = [
    {
        "id": "1",
        "title": "Lady Midnight"
    }, {
        "id": "2",
        "title": "Midnight Children"
    }, {
        "id": "3",
        "title": "Parent and children"
    }
];

let idCounter = 100;



export function addBook(title) {
    idCounter++;
    const book = {
        "id": "" + idCounter,
        "title": title
    };

    books.push(book);
    return book;
}

function serachBookByFilter(filterBy) {

    const filteredBooks = books.filter((book) => {
        if (book.title.search(new RegExp(filterBy, "i")) >= 0) {
            return true;
        } else {
            return false;
        }
    });

    if(filteredBooks){
        return filteredBooks;
    }else{
        return [];
    }
}

export function getBooks(filterBy) {

    if (filterBy) {
        return serachBookByFilter(filterBy);
    }
    return books;
}

export function deleteBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books.splice(i, 1);
        }
    }
}
