import express, { Express, Request, Response } from 'express';
import cors from "cors"

const app: Express = express();
const port = 3000;

app.use(cors());
app.use(express.json());

interface Counrty {
  name: string;
  code: string
}

const usernames: string[] = [
  'CodingNinja', 'Gamer99', 'BookWorm123', 'TravelBug', 'NightOwl', 'CoffeeLover', 'MusicFanatic', 'ArtLover', 'Foodie', 'SportsFan', "CosmicExplorer,", "StarryNightDreams,", "CodingNinja42,", "GamerGirl999,", "BookWorm1234,", "TravelBugAdventurer,", "NightOwlCoder,", "CoffeeLoverExtraordinaire,", "MusicFanaticBeats,", "ArtLoverPalette,", "FoodieAdventures,", "SportsFanaticMVP,", "NatureLoverHiking,", "FantasyWorldBuilder,", "SciFiGeekGalaxy,", "HistoryBuffTimeTraveler,", "LanguageLearnerPolyglot,", "PuzzleSolverEnigma,", "AdventurerExplorer,", "DreamerVisionary,", "InnovatorCreator,", "EmpathHeartfelt,", "OptimistSunshine,", "RealistGrounded,", "SarcasticWitty,", "FunnyHilarious,", "QuietIntrospective,", "LoudExtrovert,", "MysteriousEnigmatic,", "CalmZen,", "EnergeticVibrant,", "PassionateFierce,", "KindCompassionate,", "HumbleGrounded,", "ConfidentAssertive,", "CuriousInquisitive,", "CreativeImaginative,", "IntelligentSmart,", "WiseSage,", "StrongResilient,", "FunnyComedian,", "CuteAdorable,", "HandsomeCharming,", "BeautifulRadiant,", "UniqueOneOfAKind,", "RebelliousFreeSpirit,", "TraditionalClassic,", "ModernFuturistic,", "RomanticHeartfelt,", "AdventurousDaredevil,", "CalmPeaceful,", "EnergeticWild,", "PassionateArdent,", "KindCompassionate,", "HumbleModest,", "ConfidentBold,", "CuriousKnowledgeable,", "CreativeArtistic,", "IntelligentBrilliant,", "WisePhilosopher,", "StrongDetermined,", "FunnyHilarious,", "CuteAdorable,", "HandsomeCharming,", "BeautifulRadiant,", "UniqueIndividual,", "RebelliousNonconformist,", "TraditionalClassic,", "ModernProgressive,", "RomanticDreamer,", "AdventurousExplorer,", "CalmSerene,", "EnergeticDynamic,", "PassionateFervent,", "KindHearted,", "HumbleModest,", "ConfidentSecure,", "CuriousInquisitive,", "CreativeInnovative,", "IntelligentSharp,", "WiseMentor,", "StrongTenacious,", "FunnyComedian,", "CuteAdorable,", "HandsomeCharming,", "BeautifulRadiant,", "UniqueOriginal,", "RebelliousMaverick,", "TraditionalClassic,", "ModernAvantGarde,", "RomanticSoulmate,", "AdventurousThrillSeeker,", "CalmRelaxed,", "EnergeticVivacious,", "PassionateZealous,", "KindCompassionate,", "HumbleModest,", "ConfidentSelfAssured,", "CuriousInquisitive,", "CreativeVisionary,", "IntelligentGenius,", "WiseOracle,", "StrongUnstoppable,", "FunnyComedian,", "CuteAdorable,", "HandsomeCharming,", "BeautifulRadiant,", "UniqueIndividualist,", "RebelliousFreeThinker,", "TraditionalClassic,", "ModernContemporary,", "RomanticIdealist,", "AdventurousWanderlust,"
]

const countries: Counrty[] = [
  { "name": "Argentina", "code": "AR" },
  { "name": "Canada", "code": "CA" },
  { "name": "Finland", "code": "FI" },
  { "name": "Hungary", "code": "HU" },
  { "name": "Latvia", "code": "LV" },
  { "name": "Netherlands", "code": "NL" },
  { "name": "Spain", "code": "ES" },
]

app.get('/countries', (req: Request, res: Response) => {
  res.json(countries);
});

app.get('/usernames', (req: Request, res: Response) => {
  res.json(usernames);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});