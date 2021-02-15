import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  knowledgeBackend = [
    {
      name: 'PHP',
      icon: 'assets/knowledge/php.png',
      level: 'SEMI-SENIOR',
      description: [
          'He desarrollado API\'S REST\'S con Laravel Framework y Lumen MicroFramework.',
          'Trabajo con implementación de capa service y repository para laravel.'
      ]
    },
    {
      name: 'Python',
      icon: 'assets/knowledge/python.png',
      level: 'JUNIOR',
      description: [
          'He desarrollado API REST con Django Ninja.',
          'Tengo conocimientos para web scraping con Beautiful Soup.',
          'Actualmente estoy desarrollando algoritmos para la clasificación de noticias mediante Stanza y Modelos de Clasificación.'
      ]
    },
    {
      name: 'Java',
      icon: 'assets/knowledge/java.png',
      level: 'JUNIOR',
      description: [
          'Cuento con conocimientos básicos de Spring boot, Spring Data, Spring JPA, Spring Security los cuáles fueron adquiridos en CJavaPerú.',
          'Así mismo también tengo conocimientos básicos en microservicios (Balanceadores, Circuit Breaker, Eureka, Edge server ... ).'
      ]
    }
  ];

  knowledgeFrontend = [
    {
      name: 'Vue',
      icon: 'assets/knowledge/vue-js.png',
      level: 'SEMI-SENIOR',
      description: [
          'He desarrollados proyectos apoyado con la estructura de trabajo Nuxtjs.'
      ]
    },
    {
      name: 'React',
      icon: 'assets/knowledge/reactjs.png',
      level: 'JUNIOR',
      description: [
          'He desarrollado aplicaciones android con React Native.'
      ]
    },
    {
      name: 'Angular',
      icon: 'assets/knowledge/angular.png',
      level: 'JUNIOR',
      description: [
          'Tengo conocimientos básicos de angular como framework.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
