const themesLib = {
  materialDark: {
    background: "#263238",
    text: "#FFFFFF",
    cardBackground: "#37474F",
  },
  monokai: {
    background: "#272822",
    text: "#F8F8F2",
    cardBackground: "#383830",
  },
  oneDark: {
    background: "#282C34",
    text: "#ABB2BF",
    cardBackground: "#2C323C",
  },
  dracula: {
    background: "#282A36",
    text: "#F8F8F2",
    cardBackground: "#44475A",
  },
  nord: {
    background: "#2E3440",
    text: "#D8DEE9",
    cardBackground: "#3B4252",
  },
  solarizedDark: {
    background: "#002B36",
    text: "#839496",
    cardBackground: "#073642",
  },
  ayuMirage: {
    background: "#212733",
    text: "#E6E6E6",
    cardBackground: "#2C313A",
  },
  oceanicNext: {
    background: "#1B2B34",
    text: "#C0C5CE",
    cardBackground: "#2C3E50",
  },
  tokyoNight: {
    background: "#1A1B26",
    text: "#A9B1D6",
    cardBackground: "#282A3A",
  },
  nightOwl: {
    background: "#011627",
    text: "#D6DEEB",
    cardBackground: "#1D3B53",
  },
  lavender: {
    background: "#E6E6FA",
    text: "#000000",
    cardBackground: "#9370DB",
  },
  ebony: {
    background: "#222222",
    text: "#FFFFFF",
    cardBackground: "#111111",
  },
  charcoal: {
    background: "#383838",
    text: "#FFFFFF",
    cardBackground: "#282828",
  },
  onyx: {
    background: "#121212",
    text: "#FFFFFF",
    cardBackground: "#1E1E1E",
  },
  shadow: {
    background: "#333333",
    text: "#FFFFFF",
    cardBackground: "#1F1F1F",
  },
  slate: {
    background: "#1E1E1E",
    text: "#FFFFFF",
    cardBackground: "#151515",
  },
  storm: {
    background: "#444444",
    text: "#FFFFFF",
    cardBackground: "#333333",
  },
  sunny: {
    background: "#F0F0F0",
    text: "#333333",
    cardBackground: "#CCCCCC",
  },
  ocean: {
    background: "#EAF6FA",
    text: "#0A3D5A",
    cardBackground: "#B7DCE2",
  },
  mint: {
    background: "#E6F5EC",
    text: "#2F7D51",
    cardBackground: "#B4D9BB",
  },
  lavender: {
    background: "#F4F1FA",
    text: "#704A9C",
    cardBackground: "#D4C5E6",
  },
  sunshine: {
    background: "#FFF7E0",
    text: "#F88C0D",
    cardBackground: "#FFDDA2",
  },
  coral: {
    background: "#FFEAE9",
    text: "#FF4542",
    cardBackground: "#FFB2AF",
  },
  blush: {
    background: "#FDE7E7",
    text: "#E04D4D",
    cardBackground: "#FFBFC0",
  },
  peach: {
    background: "#FFE8DB",
    text: "#FF7F50",
    cardBackground: "#FFC3A6",
  },
  pastel: {
    background: "#FCEDEA",
    text: "#A081A2",
    cardBackground: "#E8CCE2",
  },
};

const sortedThemes = Array.from(Object.entries(themesLib)).sort((a, b) =>
  b[1].cardBackground.localeCompare(a[1].cardBackground)
);

const themes = Object.fromEntries(sortedThemes);

export default themes;
