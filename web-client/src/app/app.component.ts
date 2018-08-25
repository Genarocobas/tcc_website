import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: String;
  email: String;
  password: String;
  cardId: String;

  constructor(private http: HttpClient) {

  }

  createUser() {
    const User = { username: this.username, email: this.email, password: this.password, idCard: this.cardId }
    console.log(this.username + "-" + this.email + "-" + this.password + "-" + this.cardId)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    let options = { headers: headers };
    this.http.post("http://localhost:3000/api/employees", User, options).subscribe(
      (response) => console.log("Topzera: " + response),
      (error) => console.log(error)
    )
  }
}
