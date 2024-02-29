import { Component } from '@angular/core';
import { faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  twitter = faTwitter;
  discord = faDiscord;
  instagram = faInstagram;
}
