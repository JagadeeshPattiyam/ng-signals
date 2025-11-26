import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SignalsService {

  constructor() { 
  }
  buttonCLicked = signal<boolean>(false);
  getUser = signal<userList[]>([])

  getformData = signal<any>({});

  setFormData(data: formList){
    this.getformData.set(data);
  }

  getUserData(){
    var filteredUser = [...this.dummyData].map(user=>{
      return {id:user.id,name:user.name};
    });
    this.getUser.set(filteredUser);
  }
  updateUserData(){
    var filteredUser = [...this.dummyDataUpdate].map(user=>{
      return {id:user.id,name:user.name};
    });
    this.getUser.set(filteredUser);
  }

  dummyData = [
    {id:1,name:'Alpha', company:'Alpha'},
    {id:2,name:'Beta', company:'Alpha'},
    {id:3,name:'Gamma', company:'Alpha'}
  ];
  dummyDataUpdate = [
    {id:1,name:'Alpha123', company:'Alpha'},
    {id:2,name:'Beta123', company:'Alpha'},
    {id:3,name:'Gamma123', company:'Alpha'}
  ];
}
interface userList {
  id: number;
  name: string;
}
interface formList {
  name: string;
  email: string;
}