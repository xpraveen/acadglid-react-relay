let books = [
    {
        "id": "1",
        "title": "Philosopher's Stone",
        "authorId": "1"
    }, {
        "id": "2",
        "title": "Chamber of Secrets",
        "authorId": "1"
    }, {
        "id": "3",
        "title": "The Monk Who Sold His Ferrari",
        "authorId": "2"
    }
];

export function getAuthor(authorId) {
    if (authorId === "1") {
        return {"firstName": "J.K.", "lastName": "Rowling"};
    } else if (authorId === "2") {
        return {"firstName": "Robin", "lastName": "Sharma"};
    }
}
export function getBooks() {
    return books;
}
