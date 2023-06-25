function aplayer(aplayerId, content) {
  return '<link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.css"><div id="aplayer' + aplayerId + '"></div><script src="https://cdn.bootcdn.net/ajax/libs/aplayer/1.10.1/APlayer.min.js"></script>' +
  '<script>const ap' + aplayerId + ' = new APlayer({container: document.getElementById("aplayer' + aplayerId + '"),lrcType: 3,loop: "all",mutex: true,preload:"auto",audio: [' +
  hexo.render.renderSync({
    text: content,
    engine: ''
  }).replace(/<-HOST->/g, hexo.theme.config.aplayer.host) +
  ']});</script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends:true,async:true});