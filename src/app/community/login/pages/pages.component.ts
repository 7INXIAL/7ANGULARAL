import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-pages',
  standalone: true,
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  items: any;
  timer: any;
  constructor(private router: Router) {}

  onSubmit() {
    this.animation(50, 200);
    setTimeout(() => {
      // sessionStorage.setItem('code', '7INXIAL');
      this.router.navigate(['/helloworld']);
    }, 500);
  }

  animation = (interval = 100, skip = 50) => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    window.requestAnimationFrame(() => {
      this.timer = setInterval(() => {
        const innerHeight = window.innerHeight;
        this.items = this.items.map(
          (el: {
            y: number;
            size: number;
            bottom: number;
            opacity: number;
          }) => {
            el.y += skip;
            const h = (el.y / 100) * el.size;
            if (el.y > 0) {
              el.opacity = 1;
            }
            if (h - el.bottom > el.size * 6) {
              el.y = -300;
              el.bottom = innerHeight * 2;
              el.opacity = 0;
            }
            return el;
          }
        );
      }, interval);
    });
  };

  ngOnInit() {
    const innerWidth = window.innerWidth;
    const innerHeight = window.innerHeight * 2;
    this.items = Array(300)
      .fill(1)
      .map(() => {
        const size = this.randomInteger(60, 10);
        const left = this.randomInteger(innerWidth, 0);
        const bottom = this.randomInteger(innerHeight, 10);
        return {
          size,
          left,
          bottom,
          background: this.randomRgba(),
          zIndex: this.randomInteger(9, 1),
          opacity: 1,
          y: 0,
        };
      });
    this.animation();
  }

  randomRgba() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.8)`;
  }

  randomInteger(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
