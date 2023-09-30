
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Response was not ok');
    })
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Problem fetching the books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Call the fetchBooks function when the HTML is loaded
document.addEventListener('DOMContentLoaded', fetchBooks);

