import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";

interface verifyMessage{
  message:string
}

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit{
  token:string|null = '';
  isEn:boolean = false;
  message = "Wait until verify your email"

  constructor(private router : Router,private activateRoute: ActivatedRoute,private userService:UserService) {

  }

  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('id');
    if (this.token == null) return;
    this.userService.verify(this.token).subscribe((response) => {
      this.isEn = true;
      this.message = (response as verifyMessage).message
      setTimeout(()=>{ this.router.navigate(['/login']) }, 4000)
      ;
    },(error)=>{
      console.log(error)
    });
  }
}
