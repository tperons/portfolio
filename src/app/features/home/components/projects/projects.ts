import {Component} from '@angular/core';
import {Project} from '../../../../core/models/project.model';
import {FadeUp} from '../../../../shared/directives/fade-up';
import {ProjectCard} from './project-card/project-card';

@Component({
  selector: 'app-project-section',
  imports: [
    FadeUp,
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Marginalia API',
      description: 'API REST hipermídia (HATEOAS) de leitura social em Spring Boot 4, com segurança JWT assimétrica, rate limiting distribuído via Redis, erros padronizados por RFC 7807 e arquitetura hexagonal por módulos de domínio.',
      githubUrl: 'https://github.com/tperons/marginalia-api',
      techs: [
        {name: 'Java', color: 'cyan'},
        {name: 'Spring Boot', color: 'green'},
        {name: 'Spring Security', color: 'purple'},
        {name: 'PostgreSQL', color: 'orange'},
        {name: 'Redis', color: 'pink'},
        {name: 'Docker', color: 'cyan'},
      ]
    },
    {
      title: 'Posts API',
      description: 'API REST de posts e usuários em Spring Boot, com persistência em MongoDB via Spring Data, relacionamentos por DBRef e arquitetura em camadas (Resource, Service, Repository, Domain).',
      githubUrl: 'https://github.com/tperons/spring-posts-demo',
      techs: [
        {name: 'Java', color: 'cyan'},
        {name: 'Spring Boot', color: 'green'},
        {name: 'MongoDB', color: 'purple'},
        {name: 'Docker', color: 'orange'},
        {name: 'Git', color: 'pink'},
      ]
    },
    {
      title: 'Ecomm API',
      description: 'API REST de e-commerce em Spring Boot, com modelagem de domínio orientada a objetos, persistência via Spring Data JPA/Hibernate e suporte a múltiplos perfis (H2 para testes, PostgreSQL em produção).',
      githubUrl: 'https://github.com/tperons/spring-ecommerce-demo',
      techs: [
        {name: 'Java', color: 'cyan'},
        {name: 'Spring Boot', color: 'green'},
        {name: 'Spring Data JPA', color: 'purple'},
        {name: 'PostgreSQL', color: 'orange'},
        {name: 'H2', color: 'pink'},
      ]
    },
  ];
}
