function aplayer(title, content) {
  return '<link rel="stylesheet" href="/css/APlayer.min.css"><div id="aplayer"></div><script src="/js/APlayer.min.js"></script>' +
  '<script>const ap = new APlayer({container: document.getElementById("aplayer"),lrcType: 3,loop: "no",audio: [{' +
  hexo.render.renderSync({
    text: content,
    engine: ''
  }) +
  '}]});</script>'
}
hexo.extend.tag.register('aplayer', aplayer, {ends: true});