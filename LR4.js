// ---------- Завдання 1: Робота з об'єктами ----------

// 1. Створюємо об'єкт book
const book = {
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  year: 1997,
  isRead: true,

  // 2. Метод bookInfo виводить інформацію про книгу
  bookInfo() {
    console.log(
      `Назва: ${this.title}, Автор: ${this.author}, ` +
      `Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`
    );
  },
};

console.log("=== Завдання 1: об'єкт book ===");
book.bookInfo();

// 3. Змінюємо isRead на протилежне значення і знову викликаємо метод
book.isRead = !book.isRead;
book.bookInfo();


// ---------- Завдання 2: Масиви та об'єкти ----------

// Фабрична функція: усі книги (в т.ч. додані пізніше) мають однакову
// структуру та однакові методи bookInfo() і markAsRead().
function createBook(title, author, year, isRead) {
  return {
    title,
    author,
    year,
    isRead,

    bookInfo() {
      console.log(
        `Назва: ${this.title}, Автор: ${this.author}, ` +
        `Рік видання: ${this.year}, Прочитана: ${this.isRead ? "Так" : "Ні"}`
      );
    },

    // Додаткове завдання 2.1: метод markAsRead
    markAsRead() {
      this.isRead = true;
    },
  };
}

// 1. Масив library (мінімум 3 об'єкти)
const library = [
  createBook("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1997, true),
  createBook("The Hobbit", "J.R.R. Tolkien", 1937, false),
  createBook("1984", "George Orwell", 1949, true),
  createBook("The Lord of the Rings", "J.R.R. Tolkien", 1954, false),
];

// 2. Функція displayLibrary перебирає масив і викликає bookInfo кожної книги
function displayLibrary() {
  console.log("--- Бібліотека ---");
  for (const item of library) {
    item.bookInfo();
  }
}

console.log("\n=== Завдання 2: масив library ===");
displayLibrary();

// 3. Додаємо нову книгу методом push() і знову виводимо бібліотеку
library.push(createBook("Dune", "Frank Herbert", 1965, false));
console.log("\nПісля додавання нової книги:");
displayLibrary();


// ---------- Завдання 3: Методи масивів ----------
console.log("\n=== Завдання 3: методи масивів ===");

// 1. Сортування за роком видання (за зростанням)
library.sort((a, b) => a.year - b.year);
console.log("Бібліотека, відсортована за роком видання:");
displayLibrary();

// 2. filter(): лише непрочитані книги
const unreadBooks = library.filter((item) => !item.isRead);
console.log("\nНепрочитані книги (unreadBooks):");
console.log(unreadBooks);

// 3. find(): перша книга Толкіна
const tolkienBook = library.find((item) => item.author === "J.R.R. Tolkien");
console.log("\nКнига J.R.R. Tolkien (метод find):");
console.log(tolkienBook);


// ---------- Індивідуальне завдання 2: додаткові завдання ----------
console.log("\n=== Додаткові завдання ===");

// 2.2 Функція calculateAverageYear: середній рік видання
function calculateAverageYear() {
  if (library.length === 0) return 0;
  const sum = library.reduce((total, item) => total + item.year, 0);
  return sum / library.length;
}

console.log("Середній рік видання:", calculateAverageYear().toFixed(1));

// 2.1 Перевірка методу markAsRead
const dune = library.find((item) => item.title === "Dune");
console.log("Dune до markAsRead:");
dune.bookInfo();
dune.markAsRead();
console.log("Dune після markAsRead:");
dune.bookInfo();


// ---------- Завдання 4: Взаємодія з користувачем ----------

// Запитує дані про нову книгу і додає її до library
function addBookFromUser() {
  const title = prompt("Введіть назву книги:");
  if (title === null || title.trim() === "") {
    alert("Назву не введено. Книгу не додано.");
    return false;
  }

  const author = prompt("Введіть автора книги:");
  if (author === null || author.trim() === "") {
    alert("Автора не введено. Книгу не додано.");
    return false;
  }

  const year = Number(prompt("Введіть рік видання:"));
  if (!Number.isInteger(year) || year <= 0) {
    alert("Некоректний рік видання. Книгу не додано.");
    return false;
  }

  const isRead = confirm("Книга прочитана? (OK – так, Скасувати – ні)");

  library.push(createBook(title.trim(), author.trim(), year, isRead));
  return true;
}

console.log("\n=== Завдання 4: додавання книг користувачем ===");
do {
  if (addBookFromUser()) {
    displayLibrary(); // після кожного додавання – оновлений список
  }
} while (confirm("Додати ще одну книгу?"));
