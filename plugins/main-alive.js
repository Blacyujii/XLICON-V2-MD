

let handler = async(m, { conn, text, usedPrefix, command }) => {

    // Sound
    let name = m.pushName || conn.getName(m.sender)
    var vn = "./Assets/ALIVE.mp3"
    let url = "https://whatsapp.com/channel/0029Va8VuWo4o7qRFa9pEF47"
    let murl = "https://whatsapp.com/channel/0029Va8VuWo4o7qRFa9pEF47"
    let img = "https://i.imgur.com/g2D54cc.jpeg"
    let con = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let doc = {
        audio: {
          url: vn
        },
        mimetype: 'audio/mp4',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "Yuji",
    
        contextInfo: {
          mentionedJid: [m.sender],
          externalAdReply: {
          title: "OF COURSE IM ALIVE 🦚",
          body: "MEI BOT",
          thumbnailUrl: img,
          sourceUrl: 'https://chat.whatsapp.com/C4ivwZKuh5bLJkqfYNPQsk',
          mediaType: 1,
          renderLargerThumbnail: true
          }}
      };
    
      await conn.sendMessage(m.chat, doc, { quoted: con });
    
    }
    
    handler.help = ['alive']
    handler.tags = ['main']
    handler.command = /^(alive)$/i 

    export default handler;
