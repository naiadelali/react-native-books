import axios from "axios";
import { BookModel, LibraryDatasource } from "../../data/Data";

export class LibraryDatasourceImpl implements LibraryDatasource {
  private baseURL = "https://gutendex.com";
  public constructor() {}

  async listBooks(page: number): Promise<BookModel[]> {
    try {
      const response = await axios.get(`${this.baseURL}/books`, {
        params: {
          page: page,
        },
      });

      if (response.status === 200) {
        const { count, next, previous, results } = response.data;
        const booksData = results as any[];
        const books: BookModel[] = [];

        for (const bookData of booksData) {
          const authors = bookData.authors;
          const authorNames = authors.map((author) => author.name).join(", ");
          const book: BookModel = {
            id: bookData.id.toString(),
            title: bookData.title,
            author: authorNames,
            cover: "",
            previous: null,
            next: null,
          };

          // Obtain the cover image URL from the bookData object
          if (bookData.hasOwnProperty("formats")) {
            const formats = bookData.formats;
            const imageFormats = Object.keys(formats)
              .filter((format) => format.startsWith("image/"))
              .map((format) => formats[format]);

            // Assume the first image format as the cover image URL
            if (imageFormats.length > 0) {
              book.cover = imageFormats[0];
            }
          }

          books.push(book);
        }

        // Extract the page numbers from the URLs
        const extractPageNumber = (url: string) => {
          const match = url && url.match(/page=(\d+)/);
          return match ? parseInt(match[1]) : null;
        };

        // Assign the previous and next page numbers
        const previousPage = extractPageNumber(previous);
        const nextPage = extractPageNumber(next);

        // Assign the previous and next page numbers to each book
        books.forEach((book) => {
          book.previous = previousPage;
          book.next = nextPage;
        });

        return books;
      } else {
        throw new Error(`Received status code ${response.status}`);
      }
    } catch (error) {
      console.error("Error listing books:", error);
      throw error;
    }
  }
}
