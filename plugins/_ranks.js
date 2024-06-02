global.rpg = {
  role(level) {
    level = parseInt(level);
    if (isNaN(level)) return { name: "", level: "" };

    const role = [
      { name: "common human", level: 0 },
      { name: "New born Sorcerer", level: 5 }, //»»————⍟——««\n
      { name: "Grade 3 curse spirit", level: 10 },
      { name: "Grade 3 sorcerer", level: 15 },
      { name: "Grade 2 curse spirit", level: 20 },
      { name: "Grade 2 sorcerer", level: 25 }, //𐏓・,〔𒁷, 𒆜〢
      { name: "⚔ Grade 1 curse spirit", level: 30 },
      { name: "🥷 Grade 1 sorcerer", level: 35 },
      { name: "Special Grade", level: 40 },
      { name: "🌰 HANAMI~curse of nature", level: 45 },
      { name: "🌋 JOGO~ disaster spirit of flames", level: 50 },
      { name: "🧌 MAHITO~master of soul manipulation", level: 60 },
      { name: "🧝‍♂️🌀 GETO~master of curse manipulation", level: 70 },
      { name: "🐲 YUTA~the potential sorcerer", level: 80 },
      { name: "🔮🤞🏻GOJO~THE HONORED ONE🤞🏻🔮", level: 400 },
      { name: "🔱👨🏼‍🍳 RYOMEN SUKUNA~MASTER OF ALL 👨🏼‍🍳🔱", level: 1000 },
    ];

    return role.reverse().find((role) => level >= role.level);
  },
};
