import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';
import { Comentario } from 'src/app/model/comentario';
import { ComentarioService } from 'src/app/services/comentario.service';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HotelService } from 'src/app/services/hotel.service';
import { Hotel } from 'src/app/model/hotel';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.page.html',
  styleUrls: ['./estadistica.page.scss'],
})
export class EstadisticaPage implements OnInit {
  
  @ViewChild('barCanvas',  { static: true }) barCanvas;
  @ViewChild('doughnutCanvas',  { static: true }) doughnutCanvas;
  @ViewChild('lineCanvas',  { static: true }) lineCanvas;



  
  nUsuarios: number = 0;
  nHoteles: number = 0;
  nComentarios: number = 12;
  hotels: Hotel[];
  comentarios: Comentario[];
  usuarios: User[];

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  


  constructor(public comentarioService: ComentarioService, public usuarioService: UsuarioService, public hotelService: HotelService) { }

  ngOnInit() {





    this.usuarioService.getUsuario().subscribe(usuario => {
      this.usuarios = usuario;
      this.usuarios.forEach(usuario => {
        this.nUsuarios++;


      
        
    });
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  
  
  });

   
    this.comentarioService.getComentarios().subscribe(comentario => {
      this.comentarios = comentario;
      this.comentarios.forEach(comentario => {

       

        
      
        
    });
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  
  });

    this.hotelService.getHotel().subscribe(hotel => {
      this.hotels = hotel;
      this.hotels.forEach(hotel => {
        this.nHoteles++;

     
        
    }); 
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  
  });

    


    
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Nº USUARIOS', 'Nº HOTELES', 'Nº COMENTARIOS'],
        datasets: [{
          label: 'Estadisticas de la APP',
          data: [this.nUsuarios, this.nHoteles, this.nComentarios],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Nº USUARIOS', 'Nº HOTELES', 'Nº COMENTARIOS'],
        datasets: [{
          label: 'Estadisticas de la APP',
          data: [this.nUsuarios, this.nHoteles, this.nComentarios],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['Nº USUARIOS','Nº HOTELES', 'Nº COMENTARIOS'],
        datasets: [
          {
            label: 'Estadisticas de la app',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [this.nUsuarios,this.nHoteles,this.nComentarios],
            spanGaps: false,
          }
        ]
      }
    });
  }
  
  
    

 }
