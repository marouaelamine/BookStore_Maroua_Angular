import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  constructor(private bookService:BookService,private router:Router,private route: ActivatedRoute){}

  id:any;
  book:any;

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
    
  }
 
  onSubmit(){
    console.log(this.book);
    this.updateTheBook();
  }
  updateTheBook(){
    this.bookService.updateBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBooksList();
   },
   error=>console.log(error));
    
  }
  goToBooksList(){
    this.router.navigate(['books']);
  }

}
