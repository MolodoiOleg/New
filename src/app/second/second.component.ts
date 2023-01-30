import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  players: Array <string> = ["Coby Bryant", "Leberon James", "Shaquille O'neal", "Michael Jordan "];
  playersCleveland: Array <string> = ['Donovan Mitchell', 'Isaac Okoro', 'Jedi Osman', 'Karis Levert'];
  playersLakers: Array <string> = ['Scotty Pippen', 'Lonna Walker', 'Max Kristy', 'Austin Reeves'];
  playersDallas: Array <string> = ['Luka Doncic', 'Dwight Powell', 'Maxi Kleber', 'Jaden Hardy'];
  expression = true
}

