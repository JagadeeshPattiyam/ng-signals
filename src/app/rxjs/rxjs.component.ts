import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, first, from, map, mergeMap, of, Subject, switchMap } from 'rxjs';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [FormsModule, JsonPipe, DynamicFormComponent],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
searchedTxt:string='';
constructor(public http: HttpClient){
 
}
userData!:any;
searchSubject = new Subject<string>();

  returnUserName(name:string){
 return new Promise((resolve, reject) => {
   this.http.get(`https://randomuser.me/api/?results=1&seed=${name}`)
   .pipe(first()).subscribe({
    next: (res: any) => resolve(res),
    error: (error: any) => reject(error),
    complete: ()=> console.log('completed')
   }
  );
 });
 
}

checkUserName(){
  const name:string =this.searchedTxt;
    if(name===''){
      this.userData=null;
      return;
    }
  //  this.returnUserName(name).then((res:any)=>{
  //     this.userData=res;
  //     console.log('userData', res)
  //   })
    of(name).pipe(
          debounceTime(300),
          distinctUntilChanged(),
          filter((name)=> name.length>=3),
          switchMap(() => this.http.get(`https://randomuser.me/api/?results=1&seed=${name}`)),
          map((res:any) => res.info)
    )
    .subscribe((res:any) => {
          this.userData = res;
          console.log(res)  
    })
  }
}
