$(document).ready(function(){
  var txt_help = 'Wenn Sie diese Felder durch einen Klick aktivieren, werden Informationen an Facebook, Twitter oder Google in die USA &uuml;bertragen und unter Umst&auml;nden auch dort gespeichert. N&auml;heres erfahren Sie durch einen Klick auf das <em>i</em>.';
  if ( lang_lc == 'en' ) txt_help = 'When you activate these fields by clicking, information is transmitted to Facebook, Twitter or Google in the U.S. and probably also stored there. For details, see by clicking on the <em>i</em>.';

  var txt_info = '2 Klicks f&uuml;r mehr Datenschutz: Erst wenn Sie hier klicken, wird der Button aktiv und Sie k&ouml;nnen Ihre Empfehlung an Facebook senden. Schon beim Aktivieren werden Daten an Dritte &uuml;bertragen &ndash; siehe <em>i</em>.';
  if ( txt_info == 'en' ) txt_help = '2 clicks for more data protection: Only when you click here, will the button be active and you can send your recommendation to Facebook, Twitter or Google. When activating data is transmitted to third parties &ndash; see <em>i</em>.';

  var settings_perma = 'Dauerhaft aktivieren und Daten&uuml;ber&shy;tragung zustimmen:';
  if ( lang_lc == 'en' ) settings_perma = 'Permanently activate and agree to data transmission:';

  var fb_img = 'scripts/socialshareprivacy/images/dummy_facebook.png';
  if ( lang_lc == 'en' ) fb_img = 'scripts/socialshareprivacy/images/dummy_facebook_en.png';

  $('#socialshareprivacy').socialSharePrivacy({
    cookie_path: '/gpw2016/',
    cookie_expires: 91,
    css_path: 'scripts/socialshareprivacy/socialshareprivacy.css',
    uri: 'http://act.yapc.eu/gpw2016/',
    txt_help: txt_help,
    settings_perma: settings_perma,
    services: {
      facebook: {
        status: 'on',
        perma_option: 'on',
        dummy_img: fb_img,
        action: 'recommend',
        language: lang_iso,
        txt_info: txt_help
      },
      twitter: {
        status: 'on',
        perma_option: 'on',
        dummy_img: 'scripts/socialshareprivacy/images/dummy_twitter.png',
        language: 'en',
        txt_info: txt_help
      },
      gplus: {
        status: 'on',
        perma_option: 'on',
        dummy_img: 'scripts/socialshareprivacy/images/dummy_gplus.png',
        language: lang_lc,
        txt_info: txt_help
      }
    }
  }); 
});

$(document).ready(function(){
  $('#header').append($('<div id="stylechoose">'+stylechoose+'</div>'));
  $('#stylechoose').css('position', 'absolute');
  $('#stylechoose').css( 'left', $('#header').position().left + $('#header').width() - $('#stylechoose').width() );
  $('#stylechoose').css( 'top', $('#header').position().top );
  $('#stylechoose').click(function(){
    if ( $('html').hasClass('oldcolors') ) {
      $('html').removeClass('oldcolors');
      $.cookie('gpw2016.oldcolors', 0);
    }
    else {
      $('html').addClass('oldcolors');
      $.cookie('gpw2016.oldcolors', 1);
    }
  });
  if ( $.cookie('gpw2016.oldcolors') == '1' )
    $('html').addClass('oldcolors');
});
