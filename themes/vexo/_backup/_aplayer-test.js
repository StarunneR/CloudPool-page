function aplayer(content){
    return '<link rel="stylesheet" href="/css/APlayer.min.css"><div id="aplayer"></div><script src="/js/APlayer.min.js"></script>' + 
        "<script>const ap=new APlayer({container:document.getElementById('aplayer'),lrcType:3,loop:'none',audio:[" + 
        "{name:'青春コンプレックス (青春症候群)',artist:'結束バンド',url:'./01青春コンプレックス.m4a',cover: 'Cover.jpg',lrc:'01 青春コンプレックス.lrc',},{" +
        "]});</script>";
}
hexo.extend.tag.register('aplayer', aplayer, {
    ends: true
});