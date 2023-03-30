import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) {}
  
  getBookList(){
    return this.httpClient.get('http://localhost:8080/api/books')
  }
  
  createBook(book:any){
    return this.httpClient.post('http://localhost:8080/api/books', book);
  }
  updateBook(book: any){
    return this.httpClient.put('http://localhost:8080/api/books', book);
  }

  getBookById(id: number){
    return this.httpClient.get('http://localhost:8080/api/books/'+id);
  }

  deleteBook(id: number){
    return this.httpClient.delete('http://localhost:8080/api/books/'+id);
  }

  search(name:string,author:string,categories:string){
    let params=new HttpParams();
    params=params.append('name',name)
    params=params.append('categories',categories)
    return this.httpClient.get('http://localhost:8080/api/books/titlesAndCategories', {params: params});
  }

  

}
