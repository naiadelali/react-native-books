import { api } from "../../../../services/api";

export class BooksApi {

    async getBooks() {
        try {
            const response = await api.get("/books");
            return response; // return the complete response
        }
        catch (error) {
            console.log(error);
        }
    }

}