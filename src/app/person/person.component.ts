import { Component, OnInit } from '@angular/core';
import { PersonService  } from "../shared/person.service";

@Component({
 selector: 'app-person',
 templateUrl: './person.component.html',
 styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

 constructor(private personService: PersonService) { }
 submitted: boolean;
 formControls = this.personService.form.controls;
 showSuccessMessage: boolean;
 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.personService.form.valid){
           if(this.personService.form.get("$key").value == null ){this.personService.insertPersons(this.personService.form.value);
       this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=>this.showSuccessMessage=false,3000); // we used setTimeout here so after 3 second the showSuccessMessage value will be false
       this.submitted = false;
       this.personService.form.reset();// the form will be empty after new record created
         }else {
                 //update
         }
   }
 }
}