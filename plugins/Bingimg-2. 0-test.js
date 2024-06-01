import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*This jujutsu generates images from text prompts*\n\n*𝙴xample usage*\n*◉ ${usedPrefix + command} Gojo as a girl*\n*◉ ${usedPrefix + command} MEI MEI IN BIKINI*`;

  try {
    m.reply('*relax, generating images...*');

    const endpoint = `https://vihangayt.me/tools/lexicaart?q=${encodeURIComponent(text)}`;
    const response = await fetch(endpoint);
    
    if (response.ok) {
      const imageBuffer = await response.buffer();
      await conn.sendFile(m.chat, imageBuffer, 'image.png', null, m);
    } else {
      throw '*jujutsu failed*';
    }
  } catch {
    throw '*Oops! skill issues🦚. Please try again later.*';
  }
};

handler.help = ['bingimg2'];
handler.tags = ['AI'];
handler.command = ['dalle2', 'bingimg2'];
export default handler;
