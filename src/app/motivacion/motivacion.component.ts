import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-motivacion',
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.css'],
})
export class MotivacionComponent implements OnInit {
  @ViewChild('mainContainer') mainContainer!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  motivationalMessages: string[] = [
    'Eres valiente, fuerte y mereces ser feliz',
    'Hoy es un buen día para creer en ti',
    'Lo que haces hoy te acerca a tus sueños',
    'Eres más capaz de lo que imaginas',
    'Tu esfuerzo vale la pena, sigue adelante',
    'Nunca te rindas, lo mejor está por venir',
    'Tu luz es única, no la apagues',
  ];

  currentMessage: string = '';

  goals: string[] = []; // Metas guardadas
  newGoal: string = '';

  ngOnInit() {
    this.loadDailyMessage();
    this.loadGoals();
  }

  ngAfterViewInit() {
    this.loadBackground();
  }

  loadDailyMessage() {
    const saved = localStorage.getItem('motivationalMessageData');

    if (saved) {
      const data = JSON.parse(saved);
      const lastChange = new Date(data.timestamp);
      const now = new Date();

      // ✅ Si han pasado más de 6 horas → cambiamos el mensaje
      const hoursPassed =
        (now.getTime() - lastChange.getTime()) / (1000 * 60 * 60);

      if (hoursPassed < 6) {
        this.currentMessage = data.message;
        return;
      }
    }

    // ✅ Elegir nuevo mensaje aleatorio
    const randomIndex = Math.floor(
      Math.random() * this.motivationalMessages.length
    );
    this.currentMessage = this.motivationalMessages[randomIndex];

    // ✅ Guardar en localStorage con timestamp actual
    localStorage.setItem(
      'motivationalMessageData',
      JSON.stringify({
        message: this.currentMessage,
        timestamp: new Date().toISOString(),
      })
    );
  }

  // ✅ Cargar metas desde localStorage
  loadGoals() {
    const saved = localStorage.getItem('goals');

    if (saved) {
      this.goals = JSON.parse(saved);
    }
  }

  // ✅ Guardar después de cada cambio
  saveGoals() {
    localStorage.setItem('goals', JSON.stringify(this.goals));
  }

  // ✅ Agregar nueva meta
  addGoal() {
    const text = this.newGoal.trim();

    if (text.length === 0) return;

    this.goals.push(text);
    this.saveGoals();
    this.newGoal = ''; // limpiar input
  }

  // ✅ (Opcional) Eliminar meta
  deleteGoal(index: number) {
    this.goals.splice(index, 1);
    this.saveGoals();
  }

  openFilePicker() {
    this.fileInput.nativeElement.click();
  }

  onBackgroundSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      const base64 = reader.result as string;

      // ✅ Guardar fondo
      localStorage.setItem('customBackground', base64);

      // ✅ Avisar a TODOS los componentes que hay un fondo nuevo
      document.dispatchEvent(new Event('background-updated'));
    };

    reader.readAsDataURL(file);
  }

  loadBackground() {
    const saved = localStorage.getItem('customBackground');
    if (saved && this.mainContainer) {
      this.mainContainer.nativeElement.style.backgroundImage = `url(${saved})`;
      this.mainContainer.nativeElement.style.backgroundSize = 'cover';
      this.mainContainer.nativeElement.style.backgroundPosition = 'center';
    }
  }

  resetBackground() {
    // ✅ Eliminar fondo guardado
    localStorage.removeItem('customBackground');

    // ✅ Avisar al componente principal que debe quitar el fondo
    document.dispatchEvent(new Event('background-updated'));
  }
}
