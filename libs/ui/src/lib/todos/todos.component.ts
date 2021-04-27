import { Component, Input } from '@angular/core';
import { Todo } from '@devops/data';

@Component({
  selector: 'devops-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  @Input() todos: Todo[];

}
