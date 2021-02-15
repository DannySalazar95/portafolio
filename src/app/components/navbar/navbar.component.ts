import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title = 'DS';
  links = [
    {
      text: 'Experiencia',
      href: '#experience'
    },
    {
      text: 'Conocimientos',
      href: '#knowledge'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
