import { Component, OnInit } from '@angular/core';
import { PersonService } from "../shared/person.service";

@Component({
 selector:'app-person-list',
 templateUrl:'./person-list.component.html',
 styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
 personArray =[];
 constructor(private personService: PersonService) { }

 ngOnInit() {
         this.personService.getPersons().subscribe(
                 (list) => {
                         this.personArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

}