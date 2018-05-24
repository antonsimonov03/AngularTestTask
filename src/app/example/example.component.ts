import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  people: Person[] = [];

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.personService.getData()
      .subscribe(
      (data: Person[]) => {
        this.people = [...data];
      }
    );
  }

}
