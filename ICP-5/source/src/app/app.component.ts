import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'import_test';
  tasks: string[] = [];
  //let update_list = document.getElementById("todolist");
  getInput(user_input: string)
  {
    this.tasks.push(user_input);
    console.log(this.tasks)
  }
}
