import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
 providedIn:'root'
})
export class PersonService {

 constructor(private firebase: AngularFireDatabase) { }
 personList: AngularFireList<any>;

 form = new FormGroup({
     $key:new FormControl(null),
     fullName:new FormControl('', Validators.required),//We add Validators option and we used required so the user must fill the input 
     mobile:new FormControl('', [Validators.required, Validators.minLength(8)]), // here we put an array because we want the user to fill the input and the input length must be at least 8 
         });

 getPersons(){
                 this.personList = this.firebase.list('persons');
                 return this.personList.snapshotChanges();
         }
         insertPersons(person){
                 this.personList.push({
                         fullName: person.fullName,
                         mobile: person.mobile,
                 });
         }
}