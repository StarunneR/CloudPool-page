/* global hexo */
// Usage: {% fold ['TitleWord1','TitleWord2'] %} or {% fold ['TitleWord1 TitleWord2'] %}
//        Content 
//        {% endfold %}
function fold(args, content) {
  let title = args.join(' '); 
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  if (!title) {title = "点击显示/隐藏"};
  return '<div class="fold"><div class="fold_hider"><div class="close hider_title">' +
    hexo.render.renderSync({
      text: title,
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