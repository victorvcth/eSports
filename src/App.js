import "./styles.css";

import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url:
      "https://www.twitch.tv/directory/game/Counter-Strike%3A%20Global%20Offensive",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-144x192.jpg",
    alt: "Imagem do jogo Counter Strike: GO"
  },
  {
    url: "https://www.twitch.tv/directory/game/God%20of%20War%20Ragnar%C3%B6k",
    imageUrl:
      "https://static-cdn.jtvnw.net/ttv-boxart/102007682_IGDB-144x192.jpg",
    alt: "Imagem do jogo God Of War: Ragnarok"
  },
  {
    url: "https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Warzone",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg",
    alt: "Imagem do jogo Warzona 2.0"
  }
];

const streamersListData = [
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    altImg: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-150x150.png",
    alt: "Imagem de Cellbit"
  },
  {
    url: "https://www.twitch.tv/gaules",
    imageUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png",
    alt: "Imagem de Gaules"
  }
];

const socialListData = [
  {
    url: "https://www.instagram.com/victorhbarros",
    imageUrl: "/assets/instagram.svg",
    alt: "Instagram do Victor"
  }
];

export default function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
          className="games-list"
        >
          {gamesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
        <Section
          title="Canais e Streamers"
          subtitle="Lista de canais e transmissões que não perco!"
          className="channel-list"
        >
          {streamersListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="Se conecte comigo agora mesmo!"
          className="social-list"
        >
          {socialListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
