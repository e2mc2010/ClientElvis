#include <iostream>
#include <vector>
#include <string>

class Book {     //classes for object-oriented concepts, public
public:
    Book(const std::string& title, const std::string& author, int id)
        : title(title), author(author), id(id), isIssued(false) {}

    void display() const {
        std::cout << "ID: " << id << ", Title: " << title << ", Author: " << author 
                  << ", " << (isIssued ? "Issued" : "Available") << std::endl;
    }

    bool issueBook() {
        if (!isIssued) {      // (c) Decision-making statement
            isIssued = true;
            return true;
        }
        return false;
    }

    bool returnBook() {
        if (isIssued) {
            isIssued = false;
            return true;
        }
        return false;
    }

    int getId() const { return id; }

private:
    std::string title;
    std::string author;
    int id;
    bool isIssued;
};

class Library {      //class for object-oriented concepts, private
public:
    static int bookCount;    // (b) Static data member

    void addBook(const std::string& title, const std::string& author) {
        books.emplace_back(title, author, ++bookCount);
    }

    void displayBooks() const {
        for (const auto& book : books) {
            book.display();
        }
    }

    void issueBook(int id) {
        for (auto& book : books) {
            if (book.getId() == id) {         // (c) Decision-making statement
                if (book.issueBook()) {
                    std::cout << "Book issued successfully.\n";
                } else {
                    std::cout << "Book is already issued.\n";
                }
                return;
            }
        }
        std::cout << "Book not found.\n";
    }

    void returnBook(int id) {
        for (auto& book : books) {
            if (book.getId() == id) {
                if (book.returnBook()) {
                    std::cout << "Book returned successfully.\n";
                } else {
                    std::cout << "Book was not issued.\n";
                }
                return;
            }
        }
        std::cout << "Book not found.\n";
    }

private:
    std::vector<Book> books; // (d) Derived data type: vector<Book>
};

int Library::bookCount = 0;

int main() {
    Library library;
    library.addBook("The Catcher in the Rye", "J.D. Salinger");
    library.addBook("To Kill a Mockingbird", "Harper Lee");
    library.addBook("1984", "George Orwell");

    std::cout << "List of books in the library:\n";
    library.displayBooks();

    std::cout << "\nIssuing book with ID 2:\n";
    library.issueBook(2);

    std::cout << "\nList of books after issuing book with ID 2:\n";
    library.displayBooks();

    std::cout << "\nReturning book with ID 2:\n";
    library.returnBook(2);

    std::cout << "\nList of books after returning book with ID 2:\n";
    library.displayBooks();

    return 0;
}
