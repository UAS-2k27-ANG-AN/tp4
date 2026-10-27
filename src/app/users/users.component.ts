import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users = ['Alice', 'Bob'];
  newUser = '';
  addUser(): void { if (this.newUser.trim()) { this.users.push(this.newUser.trim()); this.newUser = ''; } }
}
