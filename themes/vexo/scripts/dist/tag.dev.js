"use strict";

function tag() {
  var tag = location.hash.replace('#', '');

  if (tag) {
    var tagId = "#tag-" + tag;
    $("html, body").animate({
      scrollTop: $(tagId).offset().top
    }, 400);
  }
}