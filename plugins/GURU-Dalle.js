import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*This similar jujutsu generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${usedPrefix + command} MeiMei on swimsuit*\n*◉ ${usedPrefix + command} Elon Musk in anime style*`;

  try {
    m.reply('*chotto, generating images...*');

    const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*Image generation failed*';
    }
  } catch {
    throw '*Ara! Something went wrong while generating images. gommen.*';
  }
};

handler.help = ['dalle'];
handler.tags = ['AI'];
handler.command = ['create', 'dalle', 'imagine'];
export default handler;
