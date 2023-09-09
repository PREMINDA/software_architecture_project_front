import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent {
  @Input()desLink: string[] = ["/"];
  @Input()icon?: string;

  constructor(private router: Router) {}

  navigateToChild() {
    this.router.navigate(this.desLink);
  }

}
