import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  profilesLinks = [
    {
      href: 'https://platzi.com/p/danny-salazar/',
      text: 'Certificados en Platzi'
    },
    {
      href: 'https://github.com/DannySalazar95',
      text: 'Mi cuenta GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/danny-alexander-salazar-namuche-393a48147/',
      text: 'Mi perfil en Linkedin'
    }
  ];

  contacts = [
    {
      value: 'danny.namuche.1995@gmail.com'
    },
    {
      value: '970 679 867'
    }
  ];

  questions = [
    {
      value: '¿Disponiblidad para trabajar en Lima-Perú? Sí'
    },
    {
      value: '¿Trabajo en equipo? Sí'
    },
    {
      value: '¿Disponibilidad? Consúltame por favor...'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
