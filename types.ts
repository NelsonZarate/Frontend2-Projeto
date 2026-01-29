interface User{
	id: string;
	name: string;
	userName: string;
	age: number;
	profile: UserProfile
}

interface UserProfile {
	discordId: string;
	bio: string;
	region: "EU" | "NA" | "BR";
	games: UserGame[];
	languages: string[];
	availability: TimeSlot[];
	userMic: boolean;
	reputation: number;
	behaviorTags?: string[];
	banner: BannerTheme;
}

interface UserGame {
	gameName: string;
	role?: string;
	rank: string;
	isCompetitive: boolean;
	platform: "PC" | "PlayStation" | "Xbox" | "Mobile";
}
type BannerTheme = "light-gray" | "dark" | "midnight-purple" | "sunset"
type TimeSlot = "Mornings" | "Afternoons" | "Nights" | "Weekends"