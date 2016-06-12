let books = [];

for (let i = 1; i <= 100; i++) {
    books.push({"id": `${i}`, "title": `Book ${i}`});
}

export function getBooks() {
    return books;
}
