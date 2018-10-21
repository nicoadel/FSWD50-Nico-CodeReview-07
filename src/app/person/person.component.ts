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
     if(this.personService.form.get('$key').value == null)
       this.personService.insertPersons(this.personService.form.value);
     else 
        this.personService.updateCustomer(this.personService.form.value);
      this.showSuccessMessage = true;
     setTimeout(()=> this.showSuccessMessage=false,3000);
     this.submitted = false;
     this.personService.form.reset();
     }
         }
}