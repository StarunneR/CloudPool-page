<link rel="stylesheet" href="/css/APlayer.min.css">
<div id="aplayer"></div>
<script src="/js/APlayer.min.js"></script>
<script>
    const ap = new APlayer({
    container: document.getElementById('aplayer'),
    lrcType: 3,
    loop: 'none',
    audio: [
        {
        name: '',
        artist: '',
        url: '.m4a',
        cover: '.jpg',
        lrc: '.lrc',
        },
    ]
});
</script>