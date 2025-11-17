type RoleItem = { title: string; tag: string };
type LogoItem = { src: string; alt: string };
type NewsItem = { text: string; tag: string };

export const roles: RoleItem[] = [
  { title: "Hardware Systems Engineer", tag: "Texas Instruments" },
  { title: "Software Engineer", tag: "Locken Martin" },
  { title: "Product Designer", tag: "Tesla" },
  { title: "Data Scientist", tag: "Pepsi" },
  { title: "Cloud Architect", tag: "Coke" },
];

export const logos: LogoItem[] = [
  { src: "/apple.svg", alt: "Apple" },
  { src: "/bmw.svg", alt: "Bmw" },
  { src: "/ethereum.svg", alt: "Ethereum" },
  { src: "/google.svg", alt: "Google" },
  { src: "/hienken.svg", alt: "Hienken" },
  { src: "/spotify.svg", alt: "Spotify" },
  { src: "/jane.svg", alt: "Jane" },
  { src: "/youtube.svg", alt: "youtube" },
  { src: "/netflix.svg", alt: "netflix" },
  { src: "/nike.svg", alt: "nike" },
  { src: "/snapchat.svg", alt: "snapchat" },
];

export const news: NewsItem[] = [
  { text: "NVIDIA unveils new Blackwell GPU architecture", tag: "S&P: Info Tech" },
  { text: "Eli Lilly's weight-loss drug exceeds expectations", tag: "S&P: Health Care" },
  { text: "Tesla expands Gigafactory production capacity", tag: "S&P: Consumer Disc" },
  { text: "JPMorgan Chase raises dividend for Q4 2024", tag: "S&P: Financials" },
  { text: "Microsoft integrates AI across Office suite", tag: "S&P: Info Tech" },
  { text: "Pfizer advances mRNA cancer vaccine trials", tag: "S&P: Health Care" },
  { text: "Caterpillar reports record infrastructure demand", tag: "S&P: Industrials" },
  { text: "Apple announces Vision Pro international expansion", tag: "S&P: Info Tech" },
  { text: "Visa launches real-time payment network", tag: "S&P: Financials" },
  { text: "Amazon Web Services opens new data centers", tag: "S&P: Consumer Disc" },
];