import { Component } from '@angular/core';
import { Igames } from '../../igames';

@Component({
  selector: 'app-more-games',
  imports: [],
  templateUrl: './more-games.html',
  styleUrl: './more-games.css'
})
export class MoreGames {
  moreGamesList: Igames[] = [
  {
    "title": "Valorant",
    "image": "https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6"
  },
  {
    "title": "PUBG: Battlegrounds",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg"
  },
  {
    "title": "Apex Legends",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"
  },
  {
    "title": "Fortnite",
    "image": "https://www.webassetscdn.com/avira/prod-blog/wp-content/uploads/2019/11/fortnite_head.jpg"
  },
  {
    "title": "Tom Clancy's Rainbow Six Siege",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/359550/header.jpg"
  },
  {
    "title": "Battlefield V",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1238840/header.jpg"
  },
  {
    "title": "Overwatch 2",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/8/89/Overwatch_2_Steam_artwork.jpg/250px-Overwatch_2_Steam_artwork.jpg"
  },
  {
    "title": "DOOM Eternal",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/header.jpg"
  },
  {
    "title": "The Division 2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2221490/header.jpg"
  },
  {
    "title": "Escape from Tarkov",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2321460/header.jpg"
  },
  {
    "title": "Far Cry 6",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2369390/header.jpg"
  },
  {
    "title": "Metro Exodus",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/412020/header.jpg"
  }
];

}
