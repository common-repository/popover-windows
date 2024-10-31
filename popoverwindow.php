<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
/*
Plugin Name: Popover Windows (Free Version)
Plugin URI: http://popoverwindow.com
Description: Create professional popover windows for any page on your Wordpress site.
Version: 1.2
Author: Melodic Media
Author URI: http://melodicmedia.com
License: Copyright 2013 Melodic Media
Text Domain: popover-windows
Domain Path: /languages
*/

include_once('popoveroptions.php');
function pop_load_plugin_textdomain() {
  load_plugin_textdomain( 'popover-windows', false, basename( dirname( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'pop_load_plugin_textdomain' );
add_action('wp_enqueue_scripts', 'pop_popoverhead');
add_action('wp_footer', 'pop_popoverdiv');
add_filter( 'plugin_row_meta', 'pop_plugin_meta_links', 10, 2 );

function pop_plugin_meta_links( $links, $file ) {
 
$plugin = plugin_basename(__FILE__);
 
// create link
if ( $file == $plugin ) {
return array_merge(
$links,
array( '<a href="http://www.popoverwindow.com">'.__('Buy Full Version','popover-windows').'</a>' )
);
}
return $links;
 
}
function pop_popoverhead() {
  wp_register_script( 'melo-popover', plugins_url('popover.js', __FILE__) );
	wp_enqueue_style('popcss',  plugins_url('css/popoverwindow.css', __FILE__));
        wp_enqueue_script( 'melo-popover' );
	
}



function pop_popoverdiv(){ 
global $wpdb;
	$folder=plugins_url('', __FILE__)."/";
	$pop_theme=get_option('pop_theme');
	$pop_theme_default=get_option('pop_theme_default');
	$pop_options=get_option('pop_options');
	?>
    
    <?php
	if($pop_options){
		if($pop_options['theme']==$pop_theme_default['themename']){
	  $pop_theme=$pop_theme_default;
	}
		$ispg="No";
	  if($pop_options['showonpage']=='All'){
		  $ispg="Yes";
	  }else if($pop_options['showonpage']=='Home' && is_home()){
		  $ispg="Yes";
	  }else{
	  $pgs=explode(',',$pop_options['pagetitle']);
	  $this_title=get_the_title(get_the_ID());
	  
	  foreach($pgs as $pg){
	      if($pg==$this_title){
		       $ispg="Yes";
		  }
	  }
	  }
	  if($ispg=="Yes"){
	  if($pop_options['contenttype']=='url'){
	      $theurl=$pop_options['popoverurl'];
	   }else{
		  $theurl=str_replace("</",'~',str_replace("'",'^',str_replace('"','|',trim(preg_replace('/\s+/', ' ', $pop_options['popoverhtml']))))); 
	   }
	  ?>
    
<script type="text/javascript">

PopoverWindow.setPath('<?php echo esc_url($folder); ?>');
 var adm_url="<?php echo esc_url(admin_url());?>"; 
var theme_<?php echo esc_js($pop_options['windowname']); ?> = {"width":"<?php echo esc_js($pop_theme['width']); ?>","height":"<?php echo esc_js($pop_theme['height']); ?>","left":"<?php echo esc_js($pop_theme['left']); ?>","top":"<?php echo esc_js($pop_theme['top']); ?>","title":"<?php echo esc_js($pop_options['title']); ?>","icon":"<?php echo esc_js($pop_theme['icon']); ?>","footer":"<?php echo esc_js($pop_options['footer']); ?>","showClose":<?php echo esc_js($pop_theme['showclose']); ?>,"drag":<?php echo esc_js($pop_theme['drag']); ?>,"resize":<?php echo esc_js($pop_theme['resize']); ?>,"scrolling":<?php echo esc_js($pop_theme['scrolling']); ?>,"fadeIn":<?php echo esc_js($pop_theme['fadein']); ?>,"fadeOut":<?php echo esc_js($pop_theme['fadeout']); ?>,"overlayClose":<?php echo esc_js($pop_theme['overlayclose']); ?>,"shadow":<?php echo esc_js($pop_theme['shadow']); ?>,"shadowOptions":"<?php echo esc_js($pop_theme['shadowoptions']); ?>","cookie":"No","hours":"24","zindex":"<?php echo esc_js($pop_theme['zindex']); ?>","titleFont":"<?php echo esc_js($pop_theme['titlefont']); ?>","titleSize":"<?php echo esc_js($pop_theme['titlesize']); ?>","titleWeight":"<?php echo esc_js($pop_theme['titleweight']); ?>","titleColor":"<?php echo esc_js($pop_theme['titlecolor']); ?>","titlePadding":"<?php echo esc_js($pop_theme['titlepadding']); ?>","roundedCorners":"<?php echo esc_js($pop_theme['roundedcorners']); ?>","windowColor":"<?php echo esc_js($pop_theme['windowcolor']); ?>","windowPadding":"<?php echo esc_js($pop_theme['windowpadding']); ?>","pageBorderSize":"<?php echo esc_js($pop_theme['pagebordersize']); ?>","pageBorderColor":"<?php echo esc_js($pop_theme['pagebordercolor']); ?>","pageColor":"<?php echo esc_js($pop_theme['pagecolor']); ?>","overlayColor":"<?php echo esc_js($pop_theme['overlaycolor']); ?>","overlayOpacity":"<?php echo esc_js($pop_theme['overlayopacity']); ?>","closeButton":"<?php echo esc_js($pop_theme['closebutton']); ?>"<?php if($pop_options['addexclose']=='true'){ ?>,"extraClose":"<?php echo $pop_options['extraclose']; ?>"<?php }?>};
          <?php echo esc_js($pop_options['windowname']); ?> = "<?php echo esc_js($pop_options['bannerid']); ?>|Plugin|Pop";
			ocis(<?php echo esc_js($pop_options['windowname']); ?>);
</script>
<?php if($pop_options['launchwindow']=='true'){?>
<script type="text/javascript">
jaxscript.run(function() {
  setTimeout(function() {
					  ocso(<?php echo esc_js($pop_options['windowname']); ?>);
	  PopoverWindow.show('<?php echo $theurl; ?>',theme_<?php echo esc_js($pop_options['windowname']); ?>);
 <?php if($pop_options['addexlaunch']=='true'){ ?>eval(<?php echo $pop_options['extralaunch']; ?>);<?php }?> }, <?php echo esc_js($pop_options['launchseconds']*1000); ?>);
});
</script>
<?php }else{?>
<script type="text/javascript">
if(document.getElementById('<?php echo esc_js($pop_options['divid']); ?>')!=null){
<?php if($pop_options['beforediv']=='Yes'){?>
document.getElementById('<?php echo esc_js($pop_options['divid']); ?>').innerHTML='<center><a href="javascript://" onclick="ocso(<?php echo esc_js($pop_options['windowname']); ?>);PopoverWindow.show(\'<?php echo $theurl; ?>\',theme_<?php echo esc_js($pop_options['windowname']); ?>);<?php if($pop_options['addexlaunch']=='true'){ ?><?php echo $pop_options['extralaunch']; ?><?php }?>"><?php echo str_replace("^","'",str_replace('|','"',$pop_options['launchhtml'])); ?></a></center>'+document.getElementById('<?php echo esc_js($pop_options['divid']); ?>').innerHTML;
<?php }else{?>
document.getElementById('<?php echo esc_js($pop_options['divid']); ?>').innerHTML+='<center><a href="javascript://" onclick="ocso(<?php echo esc_js($pop_options['windowname']); ?>);PopoverWindow.show(\'<?php echo $theurl; ?>\',theme_<?php echo esc_js($pop_options['windowname']); ?>);<?php if($pop_options['addexlaunch']=='true'){ ?><?php echo $pop_options['extralaunch']; ?><?php }?>"><?php echo str_replace("^","'",str_replace('|','"',$pop_options['launchhtml'])); ?></a></center>';
<?php }?>
}
</script>
 
<?php }
	  }

	}?>


    <?php
}

function dbpop_install(){
	global $wpdb;
  
 require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
   
 $table_name = $wpdb->prefix . "daily_stats";
   $sql="CREATE TABLE IF NOT EXISTS ".$table_name." (
  `idDailyStats` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `BannerId` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `BannerType` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Popover',
  `StatsDate` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `StatsMonth` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `StatsYear` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `DClicks` int(11) NOT NULL DEFAULT '0',
  `DImpressions` int(11) NOT NULL DEFAULT '0',
  `DOpens` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idDailyStats`),
  KEY `BannerId` (`BannerId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;";
dbDelta( $sql );

}

register_activation_hook( __FILE__, 'dbpop_install' );

?>
