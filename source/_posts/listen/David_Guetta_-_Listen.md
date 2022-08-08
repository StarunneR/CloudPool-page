---
title: David Guetta - Listen
date: 2022-08-08
author: m1
tags: 音乐
categories: 浊音
main: 2 Songs
---

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
        name: 'What I Did For Love',
        artist: 'David Guetta (feat. Emeli Sandé)',
        url: 'What I Did For Love.m4a',
        cover: 'Cover.jpg',
        lrc: 'What I Did For Love.lrc',
        },
        {
        name: 'No Money No Love',
        artist: 'David Guetta & Showtek (feat. Elliphant & Ms. Dynamite)',
        url: 'No Money No Love.m4a',
        cover: 'Cover.jpg',
        lrc: 'No Money No Love.lrc',
        }
    ]
});
</script>