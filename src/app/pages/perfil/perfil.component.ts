import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: {
    empresa: string;
    representante: string;
    posicion: string;
    email: string;
    telefono: string;
    direccion: string;
    descripcion: string;
    productos: string[];
    linkedin?: string;
    twitter?: string;
    website?: string;
  };

  constructor() {
    // Inicializamos los datos del usuario
    this.usuario = {
      empresa: 'Tech Solutions S.A.',
      representante: 'Juan Pérez',
      posicion: 'CEO',
      email: 'juan.perez@techsolutions.com',
      telefono: '+34 123 456 789',
      direccion: 'Calle Falsa 123, Ciudad, País',
      descripcion:
        'Tech Solutions es una empresa líder en el desarrollo de soluciones tecnológicas a medida. Nos especializamos en software empresarial, IoT y consultoría IT.',
      productos: ['Smartphone X Pro', 'Smartwatch Series 5', 'Cámara Digital HD'],
      linkedin: 'https://www.linkedin.com/in/juanperez',
      twitter: 'https://twitter.com/juanperez',
      website: 'https://www.techsolutions.com'
    };
  }

  ngOnInit(): void {
    // Aquí se puede agregar cualquier lógica que deba ejecutarse cuando el componente se inicialice
  }
}
