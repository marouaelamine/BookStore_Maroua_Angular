import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  books: any;
  console=console;
  
  id:any;
  book:any;

  constructor(private route:ActivatedRoute,private bookService:BookService,private router:Router) {
   /** this.route.params.subscribe(res=>this.taskService.getTaskById(res['id'])
    .subscribe(data=>{
      console.log(res['id']);
      this.console.log(data);
      this.task=data;
      this.id=this.task.id;
    })
    );*/
  }
 
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    console.log(this.id);
    this.bookService.getBookById(this.id).subscribe(data=>{
      this.book=data;
    })
    console.log(this.book);
  }
  goToBooksList(){
    this.router.navigate(['books']);
  }
  onColse(){
    this.goToBooksList();
  }

}
