let books = [
    {
        "id": "1",
        "title": "Philosopher's Stone"
    }, {
        "id": "2",
        "title": "Chamber of Secrets"
    }, {
        "id": "3",
        "title": "Prisoner of Azkaban"
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

export function getBooks() {
    return books;
}

export function deleteBook(id) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            return books.splice(i, 1);
        }
    }
}
