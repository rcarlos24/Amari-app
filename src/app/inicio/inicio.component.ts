import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {


  daysInMonth: number[] = [];
  selectedDay: number | null = null;

  // ✅ Ahora se cargará del localStorage si existe
  selectedEmotions: { [day: number]: string } = {};

  emotions = [
    { emoji: '😊', name: 'Feliz' },
    { emoji: '😢', name: 'Triste' },
    { emoji: '😡', name: 'Enojado' },
    { emoji: '😴', name: 'Cansado' },
    { emoji: '😎', name: 'Genial' },
  ];

  responses: { [key: string]: string } = {
    '😊': '¡Qué alegría! Me encanta verte feliz 💜',
    '😢': 'Lo siento mucho 😢 ¿Quieres contarme qué te pasó?',
    '😡': 'A veces enojarse es normal, respira profundo conmigo 🫶',
    '😴': 'Descansa un poco, tu cuerpo también necesita pausa 😴',
    '😎': '¡Qué flow! Se nota que estás con buena energía 😎',
    '❤️': 'El amor siempre es un gran motivo 💕'
  };

  selectedEmotion: string | null = null;
  liaMessage: string = 'Hola, soy Lía. Estoy aquí para acompañarte. ¿Cómo te sientes hoy?';

  ngOnInit() {
    // ✅ Genera los días del mes
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysCount = new Date(year, month + 1, 0).getDate();

    this.daysInMonth = Array.from({ length: daysCount }, (_, i) => i + 1);

    // ✅ Cargar emociones guardadas
    const saved = localStorage.getItem('selectedEmotions');
    if (saved) {
      this.selectedEmotions = JSON.parse(saved);
    }
  }

  selectDay(day: number) {
    this.selectedDay = this.selectedDay === day ? null : day;
  }

  selectEmotion(emotion: { emoji: string; name: string }) {
    if (this.selectedDay !== null) {
      // ✅ Guardar emoción en el objeto
      this.selectedEmotions[this.selectedDay] = emotion.emoji;

      // ✅ Mostrar mensaje de Lía
      this.liaMessage = this.responses[emotion.emoji] || this.liaMessage;

      this.selectedEmotion = emotion.emoji;

      // ✅ Guardar en localStorage siempre que cambie
      localStorage.setItem('selectedEmotions', JSON.stringify(this.selectedEmotions));

      // Cerrar card
      this.selectedDay = null;
    }
  }

  

}
