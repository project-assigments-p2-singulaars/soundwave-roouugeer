import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-landpage',
  standalone: true,
  imports: [HeaderComponent, RouterLink, FooterComponent],
  templateUrl: './landpage.component.html',
  styleUrl: './landpage.component.scss'
})
export class LandpageComponent {

}
