import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIcon, MatIconRegistry} from "@angular/material/icon";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
