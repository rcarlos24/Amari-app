import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('mainContainer') mainContainer!: ElementRef;

  sidebarOpen = false;
  ocultarHeaderDesktop = false;


  ngAfterViewInit() {
    this.loadBackground();

    // ✅ Escuchar cuando otro componente cambia el fondo
    document.addEventListener('background-updated', () => {
      this.loadBackground();
    });
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  loadBackground() {
    const saved = localStorage.getItem('customBackground');

    if (saved) {
      this.mainContainer.nativeElement.style.backgroundImage = `url(${saved})`;
    } else {
      // ✅ Fondo por defecto (vacío)
      this.mainContainer.nativeElement.style.backgroundImage = '';
    }

    this.mainContainer.nativeElement.style.backgroundSize = 'cover';
    this.mainContainer.nativeElement.style.backgroundPosition = 'center';
  }
}
