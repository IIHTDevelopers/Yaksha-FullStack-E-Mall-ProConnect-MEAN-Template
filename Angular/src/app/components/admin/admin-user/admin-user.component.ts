import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivityLog, User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  users: any[] = [];
  newUserForm!: FormGroup;
  newUser: User = {
    username: '',
    email: '',
    password: '',
    profile: {},
    activityLog: [],
    favorites: []
  };
  error: string | null = null;
  isEditing: boolean = false;
  searchEmail: string = '';
  selectedUser: User | null = null;
  userActivity: ActivityLog[] = [];
  userFavorites: string[] = [];
  searchEmailControl!: FormControl;

  constructor() { }

  ngOnInit(): void {
    // write your logic here
  }

  initForm(): void {
    // write your logic here
  }

  loadUsers(): void {
    // write your logic here
  }

  onSubmit(): void {
    // write your logic here
  }

  updateUserProfile(): void {
    // write your logic here
  }

  editUserProfile(userId: string): void {
    // write your logic here
  }

  deleteUser(userId: string): void {
    // write your logic here
  }

  searchUser(): void {
    // write your logic here
  }

  getUserProfile(userId: string): void {
    // write your logic here
  }

  getUserActivity(userId: string): void {
    // write your logic here
  }

  getUserFavorites(userId: string): void {
    // write your logic here
  }
}
