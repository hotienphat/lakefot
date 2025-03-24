// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  overrideStorage: true,
  disabled: [],
  openLastVisitedTab: true,
  localIcons: true,
  tabs: [
    {
      name: "FOT || A1",
      background_url: `src/img/banners/cbg-3.gif`,
      categories: [
        {
          name: "Mạng Xã Hội",
          links: [
            {
              name: "Facebook",
              url: "https://www.facebook.com/KaedeharaKazuha0805",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "Messenger",
              url: "https://www.messenger.com/",
              icon: "brand-messenger",
              icon_color: palette.green,
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fhotien_boyneh%2F&is_from_rle",
              icon: "brand-instagram",
              icon_color: palette.green,
            },
            {
              name: "Threads",
              url: "https://www.threads.net/@hotien_boyneh",
              icon: "brand-threads",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "GOOGLE",
          links: [
            {
              name: "Youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.red,
            },
            {
              name: "Gmail",
              url: "https://gmail.com",
              icon: "brand-gmail",
              icon_color: palette.peach,
            },
            {
              name: "Drive",
              url: "https://drive.google.com/drive/home",
              icon: "brand-google-drive",
              icon_color: palette.text,
            },
          ],
        },
        {
          name: "Góc học tập",
          links: [
            {
              name: "Trung Tâm GDTX",
              url: "https://txdaknong.daknong.edu.vn/",
              icon: "school",
              icon_color: palette.green,
            },
            {
              name: "Github",
              url: "https://github.com/hotienphat",
              icon: "brand-github",
              icon_color: palette.blue,
            },
          ],
          {
              name: "Canva",
              url: "https://www.canva.com/design/DAGh3gyyWTM/Nbv8kDen2Vo0dl8RD-54Bw/edit?utm_content=DAGh3gyyWTM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
              icon: "template",
              icon_color: palette.blue,
            },
        },
        {
          name: "Giải trí",
          links: [
            {
              name: "Genshin Impact",
              url: "https://genshin.hoyoverse.com/vi/",
              icon: "device-gamepad",
              icon_color: palette.yellow,
            },
            {
              name: "Valorant",
              url: "https://valorant.vnggames.com/vi-vn/",
              icon: "brand-valorant",
              icon_color: palette.red,
            },
            {
              name: "Honai:Starail",
              url: "https://hsr.hoyoverse.com/vi-vn/home",
              icon: "sparkles",
              icon_color: palette.lavender,
            },
          ]
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
