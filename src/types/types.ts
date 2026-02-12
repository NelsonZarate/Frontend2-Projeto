export type Region = "EU" | "NA" | "BR" | "LATAM" | "ASIA";
export type TimeSlot = "Mornings" | "Afternoons" | "Nights" | "Weekends";

export type ValorantRank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Ascendant" | "Immortal" | "Radiant";
export type ValorantRole = "Duelist" | "Initiator" | "Controller" | "Sentinel";

export type LoLRank = "Iron" | "Bronze" | "Silver" | "Gold" | "Platinum" | "Emerald" | "Diamond" | "Master" | "Grandmaster" | "Challenger";
export type LoLRole = "Top" | "Jungle" | "Mid" | "ADC" | "Support";

export type CS2Rank = "Silver" | "Gold Nova" | "Master Guardian" | "Legendary Eagle" | "Supreme" | "Global Elite";
export type CS2Role = "Entry Fragger" | "Support" | "IGL" | "AWPer" | "Lurker";

export type FortniteRank = "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond" | "Elite" | "Champion" | "Unreal";
export type FortniteRole = "Fragger" | "IGL" | "Support" | "Builder";

interface ValorantGame {
    gameName: "Valorant";
    rank: ValorantRank;
    role: ValorantRole;
    platform: "PC" | "Console";
}

interface LoLGame {
    gameName: "League of Legends";
    rank: LoLRank;
    role: LoLRole;
    platform: "PC";
}

interface CS2Game {
    gameName: "CS2";
    rank: CS2Rank;
    role: CS2Role;
    platform: "PC";
}

interface FortniteGame {
    gameName: "Fortnite";
    rank: FortniteRank;
    role: FortniteRole;
    platform: "PC" | "PlayStation" | "Xbox" | "Mobile" | "Switch";
}

export type UserGame = (ValorantGame | LoLGame | CS2Game | FortniteGame) & {
    isCompetitive: boolean;
};

export interface UserProfile {
    discordId: string;
    bio: string;
    age: number;
    region: Region;
    userMic: boolean;
    languages: string[];
    availability: TimeSlot[];
    reputation: number;
    behaviorTags?: string[];
    games: UserGame[];
}

export interface User {
    id: string;
    name: string;
    userName: string;
    email?: string;
    image: string;
    joinedAt: Date;
    profile: UserProfile;
}