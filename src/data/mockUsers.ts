import { User } from "../types/types";

export const MOCK_USERS: User[] = [
  {
    id: "user_1",
    name: "Ricardo Silva",
    userName: "Rikardz_FPS",
    email: "ricardo@test.com",
    image: "https://i.pravatar.cc/150?u=user_1", 
    joinedAt: new Date("2023-11-15"),
    profile: {
      discordId: "rikardz#8821",
      age: 22,
      bio: "Só jogo Valorant à noite. Procuro duo para subir a Diamante. Sem toxicidade!",
      region: "EU",
      userMic: true,
      languages: ["PT", "EN"],
      availability: ["Nights", "Weekends"],
      reputation: 15,
      behaviorTags: ["Chill", "Tryhard"],
      games: [
        {
          gameName: "Valorant",
          rank: "Platinum", // O TypeScript deixa passar porque é válido
          role: "Duelist",
          platform: "PC",
          isCompetitive: true,
        },
        {
          gameName: "CS2",
          rank: "Gold Nova",
          role: "Entry Fragger",
          platform: "PC",
          isCompetitive: false, // Joga for fun
        }
      ]
    }
  },
  {
    id: "user_2",
    name: "Ana Beatriz",
    userName: "BiaLoL",
    image: "https://i.pravatar.cc/150?u=user_2",
    joinedAt: new Date("2024-01-10"),
    profile: {
      discordId: "bia_legends#1234",
      age: 20,
      bio: "Main Support à procura de ADC agressivo.",
      region: "BR",
      userMic: true,
      languages: ["PT"],
      availability: ["Afternoons"],
      reputation: 42,
      behaviorTags: ["Friendly", "Shotcaller"],
      games: [
        {
          gameName: "League of Legends",
          rank: "Emerald",
          role: "Support",
          platform: "PC",
          isCompetitive: true
        }
      ]
    }
  },
  {
    id: "user_3",
    name: "João Pedro",
    userName: "JotaFortnite",
    image: "https://i.pravatar.cc/150?u=user_3",
    joinedAt: new Date("2024-02-01"),
    profile: {
      discordId: "jota#9999",
      age: 16,
      bio: "Grind para Unreal. Construo rápido.",
      region: "NA", // Exemplo de região diferente
      userMic: false, // Não usa mic
      languages: ["EN", "ES"],
      availability: ["Weekends"],
      reputation: 5,
      games: [
        {
          gameName: "Fortnite",
          rank: "Elite",
          role: "Builder", // Role específica de Fortnite
          platform: "PlayStation",
          isCompetitive: true
        }
      ]
    }
  }
];