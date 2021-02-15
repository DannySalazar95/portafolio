import { Component, OnInit } from '@angular/core';
import {IWork} from './iwork';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  works: IWork[] = [
    {
      entity: 'Laboratorio Roe',
      direction: 'San isidro, Lima',
      web: 'https://www.labroe.com/',
      dates: 'Diciembre de 2020 – Febrero de 2021',
      descriptions: [
          'Motivo de contratación: Por proyecto',
          'Tipo de contrato: Temporal.',
          'Proyecto: Desarrollo de un sitio web administrable con módulos del modelo de negocio de la entidad.',
          'Tecnologías o herramientas: VueJs, NuxtJs, Vuex, Laravel, php, vuetify, WebStorm, Laragon, entre otros.'
      ]
    },
    {
      entity: 'Hitss Perú',
      direction: 'San isidro, Lima',
      web: 'https://globalhitss.com/',
      dates: 'Enero de 2020 – Septiembre de 2020',
      descriptions: [
          'Motivo de contratación: Por proyecto.',
          'Proyecto: Desarrollo de un api y una app web para automatización de procesos.',
          'Tipo de contrato: Temporal - renovable',
          'Tecnologías o herramientas: php – laravel, Lumen, NuxtJs, Oracle DB, MariaDb, Centos 7, Virtual Machine’s, websockets, Cron Job’s, Threads, Servicios Rest, entre otros.'
      ]
    },
    {
      entity: 'Santo Toribio de Mogrovejo',
      direction: 'Chiclayo, Lambayeque',
      web: 'https://web.stm.edu.pe/',
      dates: 'Marzo de 2019 – Octubre de 2019',
      descriptions: [
          'Motivo de contratación: Por proyecto.',
          'Proyecto: Desarrollo de Sistema Intranet',
          'Tipo de contrato: Pago por RHE',
          'Tecnologías o herramientas: Vuejs, vuex, jquery, Bootstrap, Laravel, php, Mysql, Git Lab, entre otros.'
      ]
    },
    {
      entity: 'SECREA',
      direction: 'San Borja, Lima',
      web: 'https://www.secundariacreativa.com/',
      dates: 'Mayo de 2018 – Enero de 2019',
      descriptions: [
          'Motivo de contratación: Desarrollo y mantenimiento de un startup.',
          'Trabajo a realizar: Desarrollo y mantenimiento de app SECREA (E- learning).',
          'Tipo de contrato: Temporal - renovable',
          'Tecnologías o herramientas: React Native, Redux, Redux thunk, Api REST, VueJs, Laravel, php, Mailgun, Pusher, WebSockets, entre otros.'
      ]
    },
    {
      entity: 'Universidad de Lambayeque',
      direction: 'Chiclayo, Lambayeque',
      web: 'http://www.udl.edu.pe/',
      dates: 'Noviembre de 2017 – Mayo de 2018',
      descriptions: [
          'Motivo de contratación: Mantenimiento temporal de sistemas académicos.',
          'Trabajo: Mantenimiento de los sistemas académicos de la Universidad de Lambayeque desarrollados en el framework Django'
      ]
    },
    {
      entity: 'SECREA',
      direction: 'San Borja, Lima',
      web: 'https://www.secundariacreativa.com/',
      dates: 'Julio de 2017 – Noviembre de 2017',
      descriptions: [
          'Motivo de contratación: Por proyecto',
          'Tipo de contrato: Temporal - renovable',
          'Trabajo: Apoyo para el desarrollo de plataforma E-learning',
          'Tecnologías o herramientas: Laravel, php, vuejs, vueJs, Pusher, Mailgun, Api’s.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
