import sqlite3 from "sqlite3";

const db = new sqlite3.Database("lds-scriptures-sqlite.db");

export async function getScripture(book, chapter, verse) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM scriptures WHERE verse_title LIKE ?", [`${book} ${chapter}:${verse}`], (err, rows) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

export async function getVolumes() {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM volumes", [], (err, rows) => {
      resolve(rows);
    });
  });
}

export async function getBooks(volumeId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT books.book_title AS book_long_title, books.id AS book_id, volumes.id AS volume_id, volumes.volume_long_title, volumes.volume_subtitle FROM books INNER JOIN volumes ON books.volume_id = volumes.id WHERE volume_id = ?", [volumeId], (err, rows) => {
      resolve(rows);
    });
  });
}

export async function getChapters(bookId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT chapters.id AS chapter_id, chapters.chapter_number, books.id AS book_id, books.book_long_title, books.book_subtitle FROM chapters INNER JOIN books ON chapters.book_id = books.id WHERE book_id = ?", [bookId], (err, rows) => {
      resolve(rows);
    });
  });
}

export async function getVerses(chapterId) {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM verses INNER JOIN chapters ON verses.chapter_id = chapters.id INNER JOIN books ON chapters.book_id = books.id WHERE chapter_id = ?", [chapterId], (err, rows) => {
      resolve(rows);
    });
  });
}
