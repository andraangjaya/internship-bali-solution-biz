import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private readonly router: Router) {}
  mobileMenuOpen = false;

  navigateToSection(fragment: string) {
    this.mobileMenuOpen = false;
    if (this.isHomeRoute()) {
      this.scrollToSection(fragment);
      window.history.replaceState(null, '', `/home#${fragment}`);
      return;
    }

    this.router.navigate(['/home'], {fragment}).then((navigated) => {
      if (!navigated) {
        this.scrollToSection(fragment);
        return;
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => this.scrollToSection(fragment));
      });
    });
  }

  private isHomeRoute() {
    return this.router.url.split('#')[0] === '/home';
  }

  private scrollToSection(fragment: string) {
    const element = document.getElementById(fragment);

    if (!element) {
      return;
    }

    const topOffset = Math.min(window.innerHeight * 0.1, 200);
    const targetTop = Math.max(
      0,
      element.getBoundingClientRect().top + window.scrollY - topOffset
    );

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }
}
