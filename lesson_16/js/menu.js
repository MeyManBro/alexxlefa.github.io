$(document).ready(function(){
          var link = $('.menu-link');
          var link_active = $('.menu-link_active');
          var menu = $('.menu');
          var nav_link = $('.menu a');

          link.click(function(){
            link.toggleClass('menu-link_active');
            menu.toggleClass('menu_active')
          })
          nav_link.click(function(){
            link_active.toggleClass('menu-link_active');
            menu.toggleClass('menu_active');
          })
        })
