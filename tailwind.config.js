tailwind.config = {
  theme: {
    boxShadow: {
      'container-shadow': ' 0px 2.92px 65.73px 0px #0000000F',
      'card-shadow': '0px 13px 18px 0px #0000000F',
      'table-shadow': ' 0px 26px 27px 0px #0000000A'
    },
    extend: {
      fontSize: {
        '3xl': '32px',
        '4xl': '40px',
        '5xl': '52px',
      },
      colors: {
        "dark-aquamarine": "#076787",
        "gravel": "#4D4D4D",
        "gull-grey": "#82B2C2",
        "ghost-white": "#F5F8FA",
        "glacier": "#85B6A6",
        "white-rock": "#E6E6E6",
        "gunmetal": "#333434",
        "friar-grey": "#808080",
        "pale-grey": "#F8FDFF",
        "vampire-grey": "#4B4C4D",
        "off-green": "#ECF5F8",
        "carolina-blue": "#98C1CF",
        "light-grey": "#D6D9D8",
        "lily-white": "#EDF6F9",
      },
      container: {
        center: true,
        screens: {
          sm: "992px",
          "2xl": "1140px",
        },
      },
    },
  },
};