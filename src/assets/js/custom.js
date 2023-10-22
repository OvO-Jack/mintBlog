//@ts-ignore
import $ from 'jquery'
import 'slick-carousel'
import 'sticky-sidebar'

$(function () {
  "use strict";
  /*=========================================================================
          Vertical Menu
  =========================================================================*/
  $(".submenu").before('<i class="icon-arrow-down switch"></i>');

  $(".vertical-menu li i.switch").on('click', function () {
    var $submenu = $(this).next(".submenu");
    $submenu.slideToggle(300);
    $submenu.parent().toggleClass("openmenu");
  });

  /*=========================================================================
          Tabs loader
  =========================================================================*/
  $('button[data-bs-toggle="tab"]').on('click', function () {
    $(".tab-pane").addClass("loading");
    $('.lds-dual-ring').addClass("loading");
    setTimeout(function () {
      $(".tab-pane").removeClass("loading");
      $('.lds-dual-ring').removeClass("loading");
    }, 500);
  });

  /*=========================================================================
          Social share toggle
  =========================================================================*/
  // $('.post button.toggle-button').each(function () {
  //   $(this).on('click', function (e) {
  //     $(this).next('.social-share .icons').toggleClass("visible");
  //     $(this).toggleClass('icon-close').toggleClass('icon-share');
  //   });
  // });

  /*=========================================================================
  Spacer with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('spacer');

  for (var i = 0; i < list.length; i++) {
    var size = list[i].getAttribute('data-height');
    list[i].style.height = "" + size + "px";
  }

  /*=========================================================================
  Background Image with Data Attribute
  =========================================================================*/
  var list = document.getElementsByClassName('data-bg-image');

  for (var i = 0; i < list.length; i++) {
    var bgimage = list[i].getAttribute('data-bg-image');
    list[i].style.backgroundImage = "url('" + bgimage + "')";
  }

});