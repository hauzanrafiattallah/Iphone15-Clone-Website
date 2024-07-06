import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { name: "Mac", url: "https://www.apple.com/id/mac/" },
  { name: "iPad", url: "https://www.apple.com/id/ipad/" },
  { name: "iPhone", url: "https://www.apple.com/id/iphone/" },
  { name: "Watch", url: "https://www.apple.com/id/watch/" },
  { name: "AirPods", url: "https://www.apple.com/id/airpods/" },
  { name: "Tv & Rumah", url: "https://www.apple.com/id/tv-home/" },
  { name: "Hiburan", url: "https://www.apple.com/id/services/" },
  {
    name: "Dukungan",
    url: "https://support.apple.com/id-id?cid=gn-ols-home-hp-tab",
  },
  { name: "Tempat Membeli", url: "https://www.apple.com/id/buy/" },
];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "A17 Pro telah hadir.",
      "Chip yang mengubah.",
      "segalanya. Terobosan",
      "dalam performa.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "Begitu ringan. Begitu ringan.", "Begitu Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max memiliki",
      "zoom optik terpanjang yang",
      "pernah ada di iPhone",
      "Jauh bedanya.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: [
      "Tombol Tindakan",
      "yang sepenuhnya baru",
      "Apa perintah anda?",
    ],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  { name: "Kebijakan Privasi", url: "https://www.apple.com/legal/privacy/id/" },
  {
    name: "Ketentuan Penggunaan",
    url: "https://www.apple.com/legal/internet-services/terms/site.html",
  },
  { name: "Legal", url: "https://www.apple.com/legal/" },
  { name: "Peta Situs", url: "https://www.apple.com/id/sitemap/" },

  { name: "Indonesia", url: "https://www.apple.com/choose-country-region/" },
];
