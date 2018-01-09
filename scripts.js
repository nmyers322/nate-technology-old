//Globals
var apps = {
  'BandManager': {'url': 'http://bandmanager.rocks', },
  'TapChecker': {'url': 'tapchecker', },
};

var menuItems = {
  'LinkedIn': {'url': 'http://www.linkedin.com/in/nmyers322', 'glyph': 'link'},
  'GitHub': {'url': 'http://www.github.com/nmyers322', 'glyph': 'wrench'},
  'StackOverflow': {'url': 'http://stackoverflow.com/users/2451856/nate-bit-int', 'glyph': 'question-sign'},
  'Resumé': {'url': 'Nathanial%20Myers%20-%20Resume%20July%202017.doc', 'glyph': 'file'},
  'Contact': {'url': '#', 'glyph': 'send', 'attr': 'data-toggle=\"modal\" data-target=\"#contact\"'},
  
};

// Load the menu buttons
function addMenuItems() {
  for(var key in menuItems){
    if(menuItems.hasOwnProperty(key)){
      button = '';
      button += 
        '<a id=\"'+ key + 'Btn\" class=\"btn btn-success btn-lg customBtn\" href=\"' + 
        menuItems[key]['url'] + '\"';
      if(menuItems[key]['attr']){
        button += menuItems[key]['attr'];
      }
      button += ' data-loading-text=\"Loading..\">';

      button += 
        '<span class=\"glyphicon glyphicon-'+ menuItems[key]['glyph'] +'\"></span> ' + key + '</a>';

      $("#menu").html($("#menu").html() + button);
    }
  }
}

//Load the different app links
function addAppItems() {
  for(var key in apps){
    if(apps.hasOwnProperty(key)){
      button = '';
      button += 
        '<a id=\"'+ key + 'Btn\" class=\"btn btn-info btn-lg customBtn\" href=\"' + 
        apps[key]['url'] + '\"';
      if(apps[key]['attr']){
        button += menuItems[key]['attr'];
      }
      button += ' data-loading-text=\"Loading..\">';

      button += key + '</a>';

      $("#apps").html($("#apps").html() + button);
    }
  }
}

$(document).ready( function() {
  
  addMenuItems();

  addAppItems();

  $(".customBtn").click( function() {
    var $btn = $(this).button('loading');

    // Special treatment of contact button
    $(".closeContact").click( function() {
      $btn.button('reset');
    });

    //Special treatment of Resume button
    if($(this).attr('id') === 'ResumeBtn'){
      $btn.button('reset');
    }
  });

  //Show the background image only after its loaded
  $('#backgroundImageLoader').css('opacity','0').load(function() {
      
      $("#backgroundImageHider").animate({
          opacity: 0
      }, 1500);
  });

});