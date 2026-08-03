import {computed, effect, Injectable, signal} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ThemeService {
  private systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)');
  private systemIsLight = signal(this.systemPrefersLight.matches);
  pref = signal(localStorage.getItem('theme') ?? 'auto');

  resolved = computed(() =>
    this.pref() === 'auto'
      ? (this.systemIsLight() ? 'light' : 'dark')
      : this.pref()
  );

  constructor() {
    effect(() => {
      document.documentElement.setAttribute('data-bs-theme', this.resolved());
      localStorage.setItem('theme', this.pref());
    });

    this.systemPrefersLight.addEventListener('change', (e) => {
      this.systemIsLight.set(e.matches); // aqui SIM muda de valor, dispara o effect
    });
  }

  setTheme(choice: string) {
    this.pref.set(choice);
  }
}
