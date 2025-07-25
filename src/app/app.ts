import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { Home } from "./components/home/home";
import { About } from "./components/about/about";
import { GamingSetup } from "./components/gamingSetup/gamingSetup";
import { Contact } from "./components/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Home, About, GamingSetup , Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('start-framework');
}
