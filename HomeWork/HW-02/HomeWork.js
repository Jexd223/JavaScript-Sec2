const library = {
    books : [],

    addBook: function (book) {
        if (!book || !book.title) {
            console.log("Invalid book object!");
            return;
        }

        const existingBook = this.books.find(b => b.title === book.title);
        if (existingBook) {
            console.log(`Book with title "${book.title}" already exists!`);
            return;
        }

        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    },

    // ฟังก์ชันลบหนังสือตามชื่อ
    removeBook: function (title) {
        const index = this.books.findIndex(book => book.title === title);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`\n********Removed book : ${title}********\n`);
        } else {
            console.log(`Book not found : ${title}`);
        }
    },

    // ฟังก์ชันแสดงรายการหนังสือทั้งหมด
    listBooks: function () {
        console.log("\n******** List Book********");
        
        this.books.forEach((book, index) => {
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            console.log(`${index + 1}. ชื่อ : ${book.title} , ผู้แต่ง : ${book.author}, ปีที่พิมพ์ : ${book.year}, สถานะ : ${status}`);
        });
    },

    // ฟังก์ชันดึงรายการหนังสือที่ยังไม่ได้อ่าน
    getUnreadBooks: function () {
        
        return this.books.filter(book => !book.isRead);
    },

    findBook : function(title){
        console.log("\n********Find Book********");
        
        const book = this.books.find(book => book.title === title);
    
        if (book) {
            const status = book.isRead ? "อ่านแล้ว" : "ยังไม่ได้อ่าน";
            console.log(`ชื่อ: ${book.title}, ผู้แต่ง: ${book.author}, ปีที่พิมพ์: ${book.year}, สถานะ: ${status}\n`);
        } else {
            console.log(`Book with title "${title}" not found.`);
        }
    },
    countBook : function(){
        console.log(`Count Book : ${this.books.length}`);
    }
};


library.addBook({ title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isRead: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false });
library.addBook({ title: "1984", author: "George Orwell", year: 1949, isRead: true });

library.listBooks();
library.countBook();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
3. ชื่อ: 1984, ผู้แต่ง: George Orwell, ปีที่พิมพ์: 1949, สถานะ: อ่านแล้ว
*/

library.findBook("The Great Gatsby")

console.log(library.getUnreadBooks());
// Output: [ { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isRead: false } ]
library.removeBook("1984");
library.countBook();
library.listBooks();
/* Output:
1. ชื่อ: The Great Gatsby, ผู้แต่ง: F. Scott Fitzgerald, ปีที่พิมพ์: 1925, สถานะ: อ่านแล้ว
2. ชื่อ: To Kill a Mockingbird, ผู้แต่ง: Harper Lee, ปีที่พิมพ์: 1960, สถานะ: ยังไม่ได้อ่าน
*/


module.exports = library;