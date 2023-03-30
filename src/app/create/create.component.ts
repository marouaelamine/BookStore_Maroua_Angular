import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit{


  constructor(private bookService:BookService,private router:Router){}

  book:any={
    id:'',
    name:'',
    author:'',
    categories:'',
    isbn:'',
    description:''
  }

  ngOnInit(): void {
    
  }
  saveBook(){
     this.bookService.createBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBooksList();
     },
     error=>console.log(error));
  
  }
  
  
  goToBooksList(){
    this.router.navigate(['books']);
  }

  
  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
