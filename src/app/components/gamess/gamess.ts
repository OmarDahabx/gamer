import { Component } from '@angular/core';
import { Igames } from '../../igames';
import { LineBreak } from "../line-break/line-break";
import { MoreGames } from "../more-games/more-games";

@Component({
  selector: 'app-gamess',
  imports: [LineBreak, MoreGames],
  templateUrl: './gamess.html',
  styleUrl: './gamess.css'
})
export class Gamess {
  gamesList:Igames[]= [
  {
    "title": "Counter-Strike: Global Offensive",
    "image": "https://media.steampowered.com/apps/csgo/blog/images/fb_image.png?v=6"
  },
  {
    "title": "FIFA 2023",
    "image": "https://www.hankerz.com.eg/wp-content/uploads/2022/11/banner-fifa-2023.png"
  },
  {
    "title": "FIFA 2024",
    "image": "https://images.news18.com/ibnlive/uploads/2023/07/ea-sports-fc-24-releases-on-september-29-check-price-gameplay-features-here-16893304883x2.jpg"
  },
  {
    "title": "FIFA 2025",
    "image": "https://s25.q4cdn.com/103200307/files/doc_multimedia/2024/7/1008625192/EA_SPORTS_FC_25_Reveal_Trailer.jpg"
  },
  {
    "title": "Call of Duty: Modern Warfare",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/10180/header.jpg"
  },
  {
    "title": "Call of Duty: Black Ops",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/42700/header.jpg"
  },
  {
    "title": "Call of Duty: Warzone",
    "image": "https://image.api.playstation.com/vulcan/ap/rnd/202503/2819/346190abf755e3883d1353fbc8d8ccb7e1acf076f1138d6b.jpg"
  },
  {
    "title": "Left 4 Dead",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/500/header.jpg"
  },
  {
    "title": "Left 4 Dead 2",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/550/header.jpg"
  },
  {
    "title": "DayZ",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg"
  },
  {
    "title": "Mafia II",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/50130/header.jpg"
  },
  {
    "title": "GTA V",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/250px-Grand_Theft_Auto_V.png"
  }
]
}
