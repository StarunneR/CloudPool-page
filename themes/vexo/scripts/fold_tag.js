/* global hexo */
// Usage: {% fold Title %} Something {% endfold %}
function fold(args, content) {
  var text = args[0];
  if (!text) text = "点击显示/隐藏";
  return '<div class="fold"><div class="fold_hider"><div class="close hider_title">' +
    hexo.render.renderSync({
      text: text,
      engine: 'markdown'
    }).replace(/^<p>/, '').replace(/<\/p>$/, '') +
    '</div></div><div class="fold_content">\n' +
    hexo.render.renderSync({
      text: content,
      engine: 'markdown'
    }) +
    '\n</div></div>' + 
    '<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC&display=swap" rel="stylesheet">';
}
hexo.extend.tag.register('fold', fold, {ends: true});