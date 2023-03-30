import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  books:any={
    id:'',
    name:'',
    author:'',
    categories:'',
    isbn:'',
    description:''
  };
  
  searchByName:string='';
  searchByCategories:string='';
  searchByAuthor:string='';
  search(){
    this.bookService.search(this.searchByName ,this.searchByAuthor,this.searchByCategories).subscribe(books=>this.books=books)
  }
  constructor(private bookService: BookService,private router:Router){}
  
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.bookService.getBookList().subscribe(data => this.books = data);
  }
 /**  getBooksAfterFilteringByName(){
    this.bookService.getBookList().subscribe(data=>this.books=this.filterNames(data));
  }*/
  getBooksAfterFilteringByAuthor(){
    this.bookService.getBookList().subscribe(data => this.books = this.filterAuthors(data));
  }
  /**getBooksAfterFilteringByCategory(){
    this.bookService.getBookList().subscribe(data=>this.books = this.filterCategories(data))
  }*/

  updateBook(id:number){
   this.router.navigate(['edit',id])
  }

  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(data=>{
      console.log(data);
      this.getBooks();
    })
  }
  

  BookDetails(id:number){
    this.router.navigate(['details',id])
  }
  
  filters={
    keywordName:'',
    keywordAuthor:'',
    keywordCategories:''
  }


 /**filterNames(books: any) {
    return books.filter((e:any) => {
      return e.name.toLowerCase().includes(this.filters.keywordName.toLowerCase());
    })
  }*/

  filterAuthors(books: any) {
    return books.filter((e:any) => {
      return e.author.toLowerCase().includes(this.filters.keywordAuthor.toLowerCase());
    })
  }

  /**filterCategories(books:any){
    return books.filter((e:any) => {
      return e.categories.toLowerCase().includes(this.filters.keywordCategories.toLowerCase());
    })
  }*/

}
