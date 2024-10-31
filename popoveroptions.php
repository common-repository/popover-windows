<?php
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly
add_action('admin_menu', 'pop_menu');
add_action('wp_ajax_pop_submit','pop_submit_callback');
add_action('wp_ajax_poptheme_submit','poptheme_submit_callback');
add_action('wp_ajax_pop_clicks','pop_clicks_callback');
add_action('wp_ajax_pop_impressions','pop_impressions_callback');
add_action('wp_ajax_pop_opens','pop_opens_callback');
add_action( 'admin_enqueue_scripts', 'pop_scripts' );

function pop_scripts($hook){
	if ( $hook == 'admin_page_preview_popover_window' || strpos($hook ,'page_new_popover_window')!=false || $hook == 'admin_page_new_popover_theme') {
    wp_register_script( 'pop-func', plugins_url('popfunc.js', __FILE__));
	$pop_translation_array = array(
'str10' => __('Theme with this name already exists.Please Change the name','popover-windows'),
'str11' => __('Window with this name already exists.Please Change the name','popover-windows'),
'str12' => __('Fill this field','popover-windows'),
'str13' => __('Please enter valid email address','popover-windows'),
'str14' => __('Enter only number','popover-windows')
);
wp_localize_script( 'pop-func', 'pop_obj', $pop_translation_array );
wp_enqueue_script('pop-func');   
	wp_enqueue_style('popcss',  plugins_url('css/popoverwindow.css', __FILE__));
        wp_enqueue_script( 'melo-popover' ,plugins_url('popover.js', __FILE__));
		  wp_enqueue_script( 'melo-jscolor' ,plugins_url('jscolor/jscolor.js', __FILE__));
	}
}
function pop_clicks_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
			
				 $year=date('Y');
				  $bannerid=sanitize_text_field($_POST['id']);
				  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='Popover'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DClicks) VALUES(%s,%s,'Popover',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DClicks'=>$mres->DClicks+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'Popover'));
								 
							 }
}
function pop_impressions_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
			
				 $year=date('Y');
				   $bannerid=sanitize_text_field($_POST['id']);
				  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='Popover'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DImpressions) VALUES(%s,%s,'Popover',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DImpressions'=>$mres->DImpressions+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'Popover'));
								 
							 }
}
function pop_opens_callback(){
	global $wpdb;
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
			
				 $year=date('Y');
				   $bannerid=sanitize_text_field($_POST['id']);
				  
							 	 $id=$date."_".$bannerid;
							 $mres=$wpdb->get_row($wpdb->prepare("SELECT * FROM ".$wpdb->prefix ."daily_stats WHERE StatsDate=%s AND StatsMonth=%s AND BannerId=%s AND StatsYear=%s AND BannerType='Popover'",$date,$month,$bannerid,$year));
							 
							 if(!$mres){
								
								 $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear,DOpens) VALUES(%s,%s,'Popover',%s,%s,%s,'1')",$id,$bannerid,$date,$month,$year));
							 }else{
								
								
								
								$res=$wpdb->update($wpdb->prefix."daily_stats",array('DOpens'=>$mres->DOpens+1),array('StatsDate'=>$date, 'StatsMonth'=>$month , 'BannerId'=>$bannerid ,'StatsYear'=>$year, 'BannerType'=>'Popover'));
								 
							 }
}

function pop_submit_callback(){
	header('content-type: text/html; charset=utf-8');
global $wpdb;

   if(isset($_POST['action']) && $_POST['action']=='pop_submit'){
	   $windowname=sanitize_text_field($_POST['windowname']);
	   $windowname=str_replace(' ','_',$windowname);
	   $theme=sanitize_text_field($_POST['theme']);
        $pagetitle=sanitize_text_field($_POST['pagetitle']);
		  $showonpage=sanitize_text_field($_POST['showonpage']);
		  $divid=sanitize_text_field($_POST['divid']);
		  $beforediv=sanitize_text_field($_POST['beforediv']);
		  $addexlaunch=sanitize_text_field($_POST['addexlaunch']);
		$extralaunch=sanitize_text_field($_POST['extralaunch']);
		$addexclose=sanitize_text_field($_POST['addexclose']);
		$extraclose=sanitize_text_field($_POST['extraclose']);
	    $pstr=explode('|',sanitize_text_field($_POST['popoverhtml']));
        $lstr=explode('|',sanitize_text_field($_POST['launchhtml']));
	    $popoverhtml="";
		$launchhtml="";
	    for($i=0; $i<count($pstr); $i++){
			if($pstr[$i]!='' && is_numeric($pstr[$i])){
         $popoverhtml.=chr((int)$pstr[$i]);
			}
      }
	   
         $popoverhtml=trim(preg_replace('/\s+/', ' ', str_replace("'",'^',str_replace('"','|',$popoverhtml))));
		  for($i=0; $i<count($lstr); $i++){
			if($lstr[$i]!='' && is_numeric($lstr[$i])){
         $launchhtml.=chr((int)$lstr[$i]);
			}
      }
	   
         $launchhtml=trim(preg_replace('/\s+/', ' ', str_replace("'",'^',str_replace('"','|',$launchhtml))));
	   $title=sanitize_text_field($_POST['title']);
	   $footer=sanitize_text_field($_POST['footer']);
	    $launchwindow=sanitize_text_field($_POST['launchwindow']);
	   $launchseconds=intval(sanitize_text_field($_POST['launchseconds']));
	    $cookie=sanitize_text_field($_POST['cookie']);
		$hours=sanitize_text_field($_POST['hours']);
	   $contenttype=sanitize_text_field($_POST['contenttype']);
	   $bannerid=sanitize_text_field($_POST['bannerid']);
	   $popoverurl=esc_url($_POST['popoverurl']);
	  
		
		if($bannerid=='new'){
			

				  $bannerid='pop_'.date('m-d-Y')."_".date('H:i:s');
			     
	$pop_options = array(
	'bannerid' => $bannerid,								
	'theme' => $theme,
	'popoverurl' => $popoverurl,
	'popoverhtml' => esc_sql(utf8_encode($popoverhtml)),
	'launchhtml' => esc_sql(utf8_encode($launchhtml)),
	'windowname' => $windowname,
	'title' => utf8_encode($title),
	'footer' => utf8_encode($footer),
	'launchwindow' => $launchwindow,
	'launchseconds' => $launchseconds,
	'cookie' => $cookie,
	'hours' => $hours,
	'contenttype' => $contenttype,
	'addexlaunch' => $addexlaunch,
	'extralaunch' => $extralaunch,
	'addexclose' => $addexclose,
	'extraclose' => $extraclose,
	'showonpage' => $showonpage,
	'pagetitle' => utf8_encode($pagetitle),
	'divid' => $divid,
	'beforediv' => $beforediv
);
	 update_option( 'pop_options',  $pop_options );
				  $week=date('W');
				  
	$date=date('m-d-Y');
	$month=date('F');
	$year=date('Y');
	$id=$date."_".$bannerid;
				  $res=$wpdb->query($wpdb->prepare("INSERT INTO ".$wpdb->prefix ."daily_stats(idDailyStats,BannerId,BannerType,StatsDate,StatsMonth,StatsYear) VALUES(%s,%s,'Popover',%s,%s,%s)",$id,$bannerid,$date,$month,$year));
				  
				  if($res){
				       echo $bannerid;
					   die();
				  }
		}else{
		       
				$pop_options = array(
	'bannerid' => $bannerid,								
	'theme' => $theme,
	'popoverurl' => $popoverurl,
	'popoverhtml' => esc_sql(utf8_encode($popoverhtml)),
	'launchhtml' => esc_sql(utf8_encode($launchhtml)),
	'windowname' => $windowname,
	'title' => utf8_encode($title),
	'footer' => utf8_encode($footer),
	'launchwindow' => $launchwindow,
	'launchseconds' => $launchseconds,
	'cookie' => $cookie,
	'hours' => $hours,
	'contenttype' => $contenttype,
	'addexlaunch' => $addexlaunch,
	'extralaunch' => $extralaunch,
	'addexclose' => $addexclose,
	'extraclose' => $extraclose,
	'showonpage' => $showonpage,
	'pagetitle' => utf8_encode($pagetitle),
	'divid' => $divid,
	'beforediv' => $beforediv
);
	 update_option( 'pop_options',  $pop_options );
	  echo $bannerid;
					   die();
		}
	}
   
   
}

function poptheme_submit_callback(){
	header('content-type: text/html; charset=utf-8');
global $wpdb;
$table_name=$wpdb->prefix . "popoverthemes";

   if(isset($_POST['action']) && $_POST['action']=='poptheme_submit'){
	   $themename=sanitize_text_field($_POST['themename']);
	   $themename=str_replace(' ','_',$themename);
	   $width=intval(sanitize_text_field($_POST['width']));
        $height=intval(sanitize_text_field($_POST['height']));
		  $left=sanitize_text_field($_POST['left']);
		  $top=sanitize_text_field($_POST['top']);
	    $icon=sanitize_text_field($_POST['icon']);
		 $closebutton=sanitize_text_field($_POST['closebutton']);
		  $showclose=sanitize_text_field($_POST['showclose']);
		   $drag=sanitize_text_field($_POST['drag']);
		    $resize=sanitize_text_field($_POST['resize']);
			 $scrolling=sanitize_text_field($_POST['scrolling']);
	    $fadein=sanitize_text_field($_POST['fadein']);
		 $fadeout=sanitize_text_field($_POST['fadeout']);
		  $overlayclose=sanitize_text_field($_POST['overlayclose']);
		  $shadow=sanitize_text_field($_POST['shadow']);
		   $shadowoptions=sanitize_text_field($_POST['shadowoptions']);
		    $zindex=sanitize_text_field($_POST['zindex']);
		 $titlefont=sanitize_text_field($_POST['titlefont']);
		  $titleweight=sanitize_text_field($_POST['titleweight']);
		   $titlesize=sanitize_text_field($_POST['titlesize']);
		    $titlecolor=sanitize_text_field($_POST['titlecolor']);
			 $titlepadding=sanitize_text_field($_POST['titlepadding']);
			  $roundedcorners=sanitize_text_field($_POST['roundedcorners']);
		 $windowcolor=sanitize_text_field($_POST['windowcolor']);
		  $windowpadding=sanitize_text_field($_POST['windowpadding']);
		   $pagebordersize=sanitize_text_field($_POST['pagebordersize']);
		    $pagebordercolor=sanitize_text_field($_POST['pagebordercolor']);
			 $pagecolor=sanitize_text_field($_POST['pagecolor']);
			  $overlaycolor=sanitize_text_field($_POST['overlaycolor']);
			   $overlayopacity=sanitize_text_field($_POST['overlayopacity']);
	    
	   $bannerid=sanitize_text_field($_POST['bannerid']);
	  
		
      
		
		if($bannerid=='new'){
			 $bannerid='theme_'.date('m-d-Y')."_".date('H:i:s');

	$pop_theme = array(
	'bannerid' => $bannerid,								
	'themename' => $themename,
	'width' => $width,
	'height' => $height,
	'closebutton' => $closebutton,
	'top' => $top,
	'left' => $left,
	'icon' => $icon,
	'showclose' => $showclose,
	'drag' => $drag,
	'resize' => $resize,
	'scrolling' => $scrolling,
	'fadein' => $fadein,
	'fadeout' => $fadeout,
	'overlayclose' => $overlayclose,
	'shadow' => $shadow,
	'shadowoptions' => $shadowoptions,
	'zindex' => $zindex,
	'titlefont' => $titlefont,
	'titlesize' => $titlesize,
	'titleweight' => $titleweight,
	'titlecolor' => $titlecolor,
	'titlepadding' => $titlepadding,
	'roundedcorners' => $roundedcorners,
	'windowcolor' => $windowcolor,
	'windowpadding' => $windowpadding,
	'pagebordersize' => $pagebordersize,
	'pagebordercolor' => $pagebordercolor,
	'pagecolor' => $pagecolor,
	'overlaycolor' => $overlaycolor,
	'overlayopacity' =>$overlayopacity
);
	update_option('pop_theme',$pop_theme);
				 
				       echo $bannerid;
					   die();
				  
		}else{
			
			
			
		        
				$pop_theme = array(
	'bannerid' => $bannerid,								
	'themename' => $themename,
	'width' => $width,
	'height' => $height,
	'closebutton' => $closebutton,
	'top' => $top,
	'left' => $left,
	'icon' => $icon,
	'showclose' => $showclose,
	'drag' => $drag,
	'resize' => $resize,
	'scrolling' => $scrolling,
	'fadein' => $fadein,
	'fadeout' => $fadeout,
	'overlayclose' => $overlayclose,
	'shadow' => $shadow,
	'shadowoptions' => $shadowoptions,
	'zindex' => $zindex,
	'titlefont' => $titlefont,
	'titlesize' => $titlesize,
	'titleweight' => $titleweight,
	'titlecolor' => $titlecolor,
	'titlepadding' => $titlepadding,
	'roundedcorners' => $roundedcorners,
	'windowcolor' => $windowcolor,
	'windowpadding' => $windowpadding,
	'pagebordersize' => $pagebordersize,
	'pagebordercolor' => $pagebordercolor,
	'pagecolor' => $pagecolor,
	'overlaycolor' => $overlaycolor,
	'overlayopacity' =>$overlayopacity
);
				if($bannerid=='def_123'){
				update_option('pop_theme_default',$pop_theme);	
			}else{
	        update_option('pop_theme',$pop_theme);
			}
				       echo $bannerid;
					   die();
				  
		}
	 }
  
   
}

$pop_theme_defaults = array(
	'bannerid' => 'new',								
	'themename' => 'my theme',
	'width' => '800',
	'height' => '600',
	'closebutton' => 'closebig.png',
	'top' => '',
	'left' => '',
	'icon' => 'default',
	'showclose' => 'true',
	'drag' => 'true',
	'resize' => 'true',
	'scrolling' => 'true',
	'fadein' => 'true',
	'fadeout' => 'true',
	'overlayclose' => 'false',
	'shadow' => 'true',
	'shadowoptions' => '0px 0px 19px 6px #095979',
	'zindex' => '99999',
	'titlefont' => 'Helvetica',
	'titlesize' => '11pt',
	'titleweight' => 'bold',
	'titlecolor' => '404040',
	'titlepadding' => '2',
	'roundedcorners' => '8',
	'windowcolor' => 'CCCCCC',
	'windowpadding' => '4',
	'pagebordersize' => '3',
	'pagebordercolor' => '82ACC4',
	'pagecolor' => 'FFFFFF',
	'overlaycolor' => '20A7DE',
	'overlayopacity' => '0.3'
);
$pop_theme = array(
	'bannerid' => 'def_123',								
	'themename' => 'default_theme',
	'width' => '800',
	'height' => '600',
	'closebutton' => 'closebig.png',
	'top' => '',
	'left' => '',
	'icon' => 'default',
	'showclose' => 'true',
	'drag' => 'true',
	'resize' => 'true',
	'scrolling' => 'true',
	'fadein' => 'true',
	'fadeout' => 'true',
	'overlayclose' => 'false',
	'shadow' => 'true',
	'shadowoptions' => '0px 0px 19px 6px #095979',
	'zindex' => '99999',
	'titlefont' => 'Helvetica',
	'titlesize' => '11pt',
	'titleweight' => 'bold',
	'titlecolor' => '404040',
	'titlepadding' => '2',
	'roundedcorners' => '8',
	'windowcolor' => 'CCCCCC',
	'windowpadding' => '4',
	'pagebordersize' => '3',
	'pagebordercolor' => '82ACC4',
	'pagecolor' => 'FFFFFF',
	'overlaycolor' => '20A7DE',
	'overlayopacity' => '0.3'
);
update_option('pop_theme_default',$pop_theme);
$folder=plugins_url('', __FILE__)."/";
$pop_options_defaults = array(
	'bannerid' => 'new',								
	'theme' => 'default_theme',
	'popoverurl' => $folder.'popover-content.html',
	'popoverhtml' => '',
	'launchhtml' => '<img src="'.$folder.'img/launch_window.png" border="0">',
	'windowname' => 'My Window',
	'title' => __('Change your title here!','popover-windows'),
	'footer' => __('Change bottom text!','popover-windows'),
	'launchwindow' => 'false',
	'launchseconds' => '5',
	'cookie' => 'No',
	'hours' => '24',
	'contenttype' => 'url',
	'addexlaunch' => 'false',
	'extralaunch' => 'player.playVideo();',
	'addexclose' => 'false',
	'extraclose' => 'player.pauseVideo();',
	'showonpage' => 'All',
	'pagetitle' => '',
	'divid' => 'masthead',
	'beforediv' => 'No'
);
function pop_menu() {
	//create new top-level menu
	add_menu_page('Popover Window Settings', __('Popover Windows','popover-windows'), 'administrator', 'pop_top', 'pop_main_option',plugins_url('', __FILE__)."/img/pw_icon.png");
	add_submenu_page('pop_top' , 'Add New Popover Window', __('Add New Popover Window','popover-windows') , 'administrator' , 'new_popover_window' , 'popover_settings_page' );
	add_submenu_page('pop_top' , 'My Themes', __('My Themes','popover-windows') , 'administrator' , 'popover_themes' , 'popover_themes_page' );
	add_submenu_page('pop_top' , 'Daily Stats', __('Daily Stats','popover-windows') , 'administrator' , 'pop_daily_stat' , 'pop_daily_stat_page' );
	add_submenu_page(NULL , 'Add New Theme', '' , 'administrator' , 'new_popover_theme' , 'new_popover_theme_page' );
	add_submenu_page(NULL , 'Popover Windows Preview', '' , 'administrator' , 'preview_popover_window' , 'preview_popover' );
	
}


function pop_daily_stat_page(){
	global $wpdb;
	$table_name=$wpdb->prefix . "daily_stats";
	$week=date('W');
	$date=date('m-d-Y');
	$month=date('F');
	 $year=date('Y');
	$folder=plugins_url('', __FILE__)."/img";?>
	 <div class="wrap">
    <h2><?php esc_html_e('Melodic Media Popover Windows','popover-windows');?></h2>
    <br />
	<h3><?php esc_html_e('My Popover Windows Daily Stats','popover-windows');?></h3>
    <br />
    <?php
	 $pop_options=get_option('pop_options'); 
$mybanner = $wpdb->get_row($wpdb->prepare("SELECT * FROM ".$table_name." WHERE StatsDate=%s AND StatsMonth=%s AND StatsYear=%s AND BannerType='Popover' AND BannerId=%s",$date,$month,$year,$pop_options['bannerid']));
if($mybanner){
	?>
   <table class="form-table"><tr><th><?php esc_html_e('Popover Window Name','popover-windows');?></th><th><?php esc_html_e('Imp. today','popover-windows');?></th><th><?php esc_html_e('Opens today','popover-windows');?></th><th><?php esc_html_e('Clicks today','popover-windows');?></th><th>CTR</th></tr>
  
		 <tr><td><?php echo esc_html($pop_options['windowname']); ?></td><td><?php echo esc_html($mybanner->DImpressions); ?></td><td><?php echo esc_html($mybanner->DOpens); ?></td><td><?php echo esc_html($mybanner->DClicks); ?></td><td><?php if($mybanner->DImpressions!=0){echo esc_html(round(($mybanner->DClicks/$mybanner->DImpressions)*100,2)); echo " %";}else{ echo "0 %";} ?></td></tr>
    </table>
    <?php
}else{
     _e('You have currently no stats for today','popover-windows');
}
?>
<br />
<br />
<a href="http://popoverwindow.com/buy/"  style="text-decoration:none;" target="_blank"><div style=" width:600px; height:260px; background:url(<?php echo esc_url($folder."/wp_pop_buy_em.png");?>) no-repeat"><font color="#000000"><br /><br /><br /><br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Free version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save and view daily stats for 1 window.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save only 1 new theme.','popover-windows');?></td></tr>
</table>
<br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Full version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited windows.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited themes.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Full stats for daily, weekly, monthly with 6 month history .','popover-windows');?></td></tr>
</table></font></div></a>
 </div>
    
<?php  

}
function popover_themes_page()
{
	
	
	global $wpdb;

	$folder=plugins_url('', __FILE__)."/img";
	

	if(isset($_POST['did'])){
		 $folder2=plugin_dir_path(__FILE__)."img";
		$pop_theme=get_option('pop_theme');
	$pop_theme_default=get_option('pop_theme_default');
	$pop_options=get_option('pop_options');
		 
	    if($pop_theme['themename']==$pop_options['theme']){
			 delete_option('pop_options');
		}
		delete_option('pop_theme');
	
	}
	?>
    
	 <div class="wrap">
    <h2><?php esc_html_e('Melodic Media Popover Windows','popover-windows');?></h2>
    <br />
    <a href="admin.php?page=new_popover_theme"><img src="<?php echo esc_url($folder);?>/newtheme.png" /></a>
    <br />
	<h3><?php esc_html_e('My Popover Themes','popover-windows');?></h3>
    <br />
    <?php
	$pop_theme=get_option('pop_theme');
	$pop_theme_default=get_option('pop_theme_default');
     $count=1;
	?>
    <table class="form-table"><tr><th><?php esc_html_e('Popover Theme Name','popover-windows');?></th><th><?php esc_html_e('Actions','popover-windows');?></th></tr>
   <?php if($pop_theme){?>
		 <tr><td><?php echo esc_html($pop_theme['themename']); ?></td><td><table><tr><td><a href="admin.php?page=new_popover_theme&mod=edit&id=<?php echo esc_attr($pop_theme['bannerid']); ?>" style="text-decoration:none; color:#FFF" ><div style="width:100px; height:23px; background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none color:#FFF; font-weight:bolder; vertical-align:top; padding-top:2px; text-align:center"><?php esc_html_e('EDIT','popover-windows');?></div></a></td><td><form id="dform_<?php echo esc_attr($count); ?>" action="admin.php?page=popover_themes" method="post"><input type="hidden" name="did" id="did_<?php echo esc_attr($count); ?>" value="<?php echo esc_attr($pop_theme['bannerid']); ?>" /><input  type="image" alt="Submit Form"  src="<?php echo esc_url($folder."/"); ?>delete.png" /></form></td></tr></table></td></tr>
         <?php }?>
	 <tr><td><?php echo esc_html($pop_theme_default['themename']); ?></td><td><table><tr><td><div style="width:100px; height:23px; background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none color:#FFF; font-weight:bolder; color:#FFF; vertical-align:top; padding-top:2px; text-align:center"><?php esc_html_e('EDIT','popover-windows');?></div></td><td><img  src="<?php echo esc_url($folder."/"); ?>delete.png" /></td></tr></table></td></tr>	
    </table>
 <br />
<br />
<a href="http://popoverwindow.com/buy/"  style="text-decoration:none;" target="_blank"><div style=" width:600px; height:260px; background:url(<?php echo esc_url($folder."/wp_pop_buy_em.png");?>) no-repeat"><font color="#000000"><br /><br /><br /><br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Free version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save and view daily stats for 1 window.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save only 1 new theme.','popover-windows');?></td></tr>
</table>
<br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Full version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited windows.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited themes.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Full stats for daily, weekly, monthly with 6 month history .','popover-windows');?></td></tr>
</table></font></div></a>
 </div>
    
<?php  
}

function pop_main_option()
{
	
	
	global $wpdb;
	$folder=plugins_url('', __FILE__)."/img";

	if(isset($_POST['did'])){
		 $folder2=plugin_dir_path(__FILE__)."img";
		
		  $pop_options=get_option('pop_options');
		   $dres=$wpdb->query($wpdb->prepare("DELETE FROM ".$wpdb->prefix ."daily_stats WHERE BannerType='Popover' AND BannerId=%s",$_POST['did']));
	 delete_option('pop_options');
	
	}
	?>
    
	 <div class="wrap">
    <h2><?php esc_html_e('Melodic Media Popover Windows','popover-windows');?></h2>
    <br />
	<h3><?php esc_html_e('My Popover Windows','popover-windows');?></h3>
    <br />
    <?php
	
 $pop_options=get_option('pop_options');
if($pop_options){
	?>
    <table class="form-table"><tr><th width="30%"><?php esc_html_e('Popover Window Name','popover-windows');?></th><th><?php esc_html_e('Actions','popover-windows');?></th></tr>
    <?php
	
	$count=1;
		?>
		 <tr><td><?php echo esc_html($pop_options['windowname']); ?></td><td><table><tr><td><form id="pform_<?php echo esc_attr($count); ?>" action="admin.php?page=preview_popover_window" method="post" target="_blank"><input type="hidden" name="pid" id="pid_<?php echo esc_attr($count); ?>" value="<?php echo esc_attr($pop_options['bannerid']); ?>" /><input  type="submit" style="background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none; width:100px; height:23px; color:#FFF; font-weight:bolder; vertical-align:top; padding-top:2px; cursor:pointer;" alt="Submit Form" value="<?php esc_attr_e('PREVIEW','popover-windows');?>"/></form></td><td><a href="admin.php?page=new_popover_window&mode=edit&id=<?php echo esc_attr($pop_options['bannerid']); ?>" style="text-decoration:none; color:#FFF" ><div style="width:100px; height:23px; background:url(<?php echo esc_url($folder."/"); ?>button.png) no-repeat; border:none color:#FFF; font-weight:bolder; vertical-align:top; padding-top:2px; text-align:center"><?php esc_html_e('EDIT','popover-windows');?></div></a></td><td><form id="dform_<?php echo esc_attr($count); ?>" action="admin.php?page=pop_top" method="post"><input type="hidden" name="did" id="did_<?php echo esc_attr($count); ?>" value="<?php echo esc_attr($pop_options['bannerid']); ?>" /><input  type="image" alt="Submit Form"  src="<?php echo esc_url($folder."/"); ?>delete.png" /></form></td></tr></table></td></tr>
    </table>
    <?php
}else{
      _e('You have currently no popover windows.','popover-windows');
}
?>
<br />
<br />
<a href="http://popoverwindow.com/buy/"  style="text-decoration:none;" target="_blank"><div style=" width:600px; height:260px; background:url(<?php echo esc_url($folder."/wp_pop_buy_em.png");?>) no-repeat"><font color="#000000"><br /><br /><br /><br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Free version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save and view daily stats for 1 window.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save only 1 new theme.','popover-windows');?></td></tr>
</table>
<br /><table width="510"><tr><td><strong>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('Full version includes','popover-windows');?></strong></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited windows.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Save unlimited themes.','popover-windows');?></td></tr>
<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;<?php esc_html_e('- Full stats for daily, weekly, monthly with 6 month history .','popover-windows');?></td></tr>
</table></font></div></a>
 </div>
    
<?php  
}

function preview_popover(){
global $wpdb;
	$folder=plugins_url('', __FILE__)."/";
		$pop_theme=get_option('pop_theme');
	$pop_theme_default=get_option('pop_theme_default');
	$pop_options=get_option('pop_options');
	if($pop_options['theme']==$pop_theme_default['themename']){
	  $pop_theme=$pop_theme_default;
	}
	   if($pop_options['contenttype']=='url'){
	      $theurl=$pop_options['popoverurl'];
	   }else{
		  $theurl=str_replace("</",'~',str_replace("'",'^',str_replace('"','|',trim(preg_replace('/\s+/', ' ', $pop_options['popoverhtml']))))); 
	   }
	  ?>
   
<script type="text/javascript">
// update the following line with correct path
PopoverWindow.setPath('<?php echo esc_url($folder); ?>');
var <?php echo esc_js($pop_options['theme']); ?> = {"width":"<?php echo esc_js($pop_theme['width']); ?>","height":"<?php echo esc_js($pop_theme['height']); ?>","left":"<?php echo esc_js($pop_theme['left']); ?>","top":"<?php echo esc_js($pop_theme['top']); ?>","title":"<?php echo esc_js($pop_options['title']); ?>","icon":"<?php echo esc_js($pop_theme['icon']); ?>","footer":"<?php echo esc_js($pop_options['footer']); ?>","showClose":<?php echo esc_js($pop_theme['showclose']); ?>,"drag":<?php echo esc_js($pop_theme['drag']); ?>,"resize":<?php echo esc_js($pop_theme['resize']); ?>,"scrolling":<?php echo esc_js($pop_theme['scrolling']); ?>,"fadeIn":<?php echo esc_js($pop_theme['fadein']); ?>,"fadeOut":<?php echo esc_js($pop_theme['fadeout']); ?>,"overlayClose":<?php echo esc_js($pop_theme['overlayclose']); ?>,"shadow":<?php echo esc_js($pop_theme['shadow']); ?>,"shadowOptions":"<?php echo esc_js($pop_theme['shadowoptions']); ?>","cookie":"No","hours":"24","zindex":"<?php echo esc_js($pop_theme['zindex']); ?>","titleFont":"<?php echo esc_js($pop_theme['titlefont']); ?>","titleSize":"<?php echo esc_js($pop_theme['titlesize']); ?>","titleWeight":"<?php echo esc_js($pop_theme['titleweight']); ?>","titleColor":"<?php echo esc_js($pop_theme['titlecolor']); ?>","titlePadding":"<?php echo esc_js($pop_theme['titlepadding']); ?>","roundedCorners":"<?php echo esc_js($pop_theme['roundedcorners']); ?>","windowColor":"<?php echo esc_js($pop_theme['windowcolor']); ?>","windowPadding":"<?php echo esc_js($pop_theme['windowpadding']); ?>","pageBorderSize":"<?php echo esc_js($pop_theme['pagebordersize']); ?>","pageBorderColor":"<?php echo esc_js($pop_theme['pagebordercolor']); ?>","pageColor":"<?php echo esc_js($pop_theme['pagecolor']); ?>","overlayColor":"<?php echo esc_js($pop_theme['overlaycolor']); ?>","overlayOpacity":"<?php echo esc_js($pop_theme['overlayopacity']); ?>","closeButton":"<?php echo esc_js($pop_theme['closebutton']); ?>"<?php if($pop_options['addexclose']=='true'){ ?>,"extraClose":"<?php echo $pop_options['extraclose']; ?>"<?php }?>};
</script>
<?php if($pop_options['launchwindow']=='true'){?>
<script type="text/javascript">
jaxscript.run(function() {
  setTimeout(function() {
	  PopoverWindow.show('<?php echo $theurl; ?>',<?php echo esc_js($pop_theme['themename']); ?>);
  <?php if($pop_options['addexlaunch']=='true'){ ?>eval(<?php echo $pop_options['extralaunch']; ?>);<?php }?>}, <?php echo esc_js($pop_options['launchseconds']*1000); ?>);
});
</script>
<?php }else{?>
 <a href="javascript://" onclick="PopoverWindow.show('<?php echo $theurl; ?>',<?php echo esc_attr($pop_theme['themename']); ?>);<?php if($pop_options['addexlaunch']=='true'){ ?><?php echo $pop_options['extralaunch']; ?><?php }?>"><?php echo str_replace("^","'",str_replace('|','"',$pop_options['launchhtml'])); ?></a>
<?php }?>


    <?php
}

function popover_settings_page(){
	
wp_enqueue_script('mypopscript',  plugins_url('popfunc.js', __FILE__));

	global $pop_options_defaults;
	global $wpdb;
	$folder=plugins_url('', __FILE__)."/";
	if(isset($_GET['mode']) && $_GET['mode']=="edit"){
		
		$pop_options = get_option('pop_options');
		$pop_options_defaults=$pop_options;
	   
	}
	
	?>
    <div class="wrap">
     <h2><?php esc_html_e('Melodic Media Popover Windows','popover-windows');?></h2>
    <br />
	<?php
	  if(isset($_GET['mod']) && $_GET['mod']=="edit"){?>
	 <h3><?php esc_html_e('Edit Popover Window','popover-windows');?></h3>
    <br /><?php
	 }else{?>
	 <h3><?php esc_html_e('New Popover Window','popover-windows');?></h3>
    <br />
	<?php }
	?>
    </div>
    
	
<script type="text/javascript">
// set the PopoverWindow media path where the icons, images, and css files are located
PopoverWindow.setPath("<?php echo esc_url($folder); ?>");
</script>

<script type="text/javascript">


function getOptions() {
	var options = {};
	/*var f = document.forms.poptions;
	for (var i=0;i<f.length;i++) {
		var name = f[i].name;
		var type = f[i].type;
		if (name) {
			if (type=='checkbox') {
				if (f[i].checked) options[name] = true;
				else options[name] = false;
			}
			else options[name] = f[i].value;
		}
	}*/
	options=JSON.parse(document.getElementById('theme').value);
	options.title=document.getElementById('title').value;
	options.footer=document.getElementById('footer').value;
	if(get_radio_value('addexlaunch')=='true'){
		options.extraLaunch=document.getElementById('extralaunch').value;
	}else{
	    options.extraLaunch='';
	}
	if(get_radio_value('addexclose')=='true'){
		options.extraClose=document.getElementById('extraclose').value;
	}else{
	    options.extraClose='';
	}
	
	return options;
}


jaxscript.run(function() {
    
	PopoverWindow.insert('generator',true);
	fillEditPopWindow('<?php echo esc_js($pop_options_defaults['theme']); ?>','<?php echo esc_js($pop_options_defaults['contenttype']); ?>',<?php echo esc_js($pop_options_defaults['launchwindow']); ?>,'<?php echo esc_js($pop_options_defaults['cookie']); ?>','<?php echo esc_js($pop_options_defaults['showonpage']); ?>','<?php echo esc_js($pop_options_defaults['beforediv']); ?>','<?php echo esc_js($pop_options_defaults['addexlaunch']); ?>','<?php echo esc_js($pop_options_defaults['addexclose']); ?>');
	
	update();
});
function update() {
	var opt=getOptions();
	PopoverWindow.update(opt);
	var g = dom.id('generator_iframe');
	g.style.textAlign = 'center';
	if(get_radio_value('contenttype')=='url'){
	
	g.innerHTML = '<div id="launch"><a href="javascript://" onclick="var theurl=document.forms.poptions.popoverurl.value;PopoverWindow.show(theurl,getOptions());'+opt.extraLaunch+'" class="launch">'+document.getElementById('launchhtml').value+'</a></div>';
	}else if(get_radio_value('contenttype')=='html'){
	var str=document.getElementById('popoverhtml').value;
					 str=str.split('"').join('|');
					 str=str.split("</").join("~");						
					str=str.split("'").join("^");
	g.innerHTML = '<div id="launch"><a href="javascript://" onclick="PopoverWindow.show(\''+str+'\',getOptions());'+opt.extraLaunch+'" class="launch">'+document.getElementById('launchhtml').value+'</a></div>';
	}
}

</script>
 <style type="text/css">

DIV#launch {margin-top:30px;  }

#theme TD {font-size:11pt; line-height:2em;}
DIV.tab_content {line-height:1.7em; font-size:11pt; margin-right:20px; padding:10px;}

DIV#theme_content {display:none;}

A.tab_selected {background-color:#ddd; border-left:1px solid #555; border-right:1px solid #555; border-top:1px solid #555; padding:4px; font-size:11pt; text-decoration:none; color:#000; font-weight:bold; margin-right:2px;  outline:none; -moz-border-radius-topright:5px; -webkit-border-radius-topright:5px; -moz-border-radius-topleft:5px; -webkit-border-radius-topleft:5px;}
A.tab {font-size:11pt; text-decoration:none; color:#000; font-weight:bold;  margin-right:2px; outline:none; padding:4px;}

DIV#header {background:#000 url(popoverwindow/img/popwindow-bg.jpg) top center; margin-bottom:15px; padding:10px;}
DIV#header TD {color:#fff;}
DIV#header A {color:#fff;}
</style>
<br />
 <div id="error_notice"></div>

<div id="settings_content" class="tab_content">
<table width="80%"><tr><td valign="top">
<form name="poptions">
<table cellspacing="4"><tr><td><table><tr align="left"><th>
<?php esc_html_e('Window Name','popover-windows');?>:</th><td> <input type="text" name="windowname" id="windowname" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['windowname']); ?>':this.value;" value="<?php echo esc_attr($pop_options_defaults['windowname']); ?>" onKeyUp="update()" size="24"></td></tr>
<tr align="left"><th><?php esc_html_e('Theme','popover-windows');?>: </th><td><select name="theme" id="theme" onChange="update()">
<?php $pop_theme=get_option('pop_theme_default');
   
?>
     
      <option value='{"width":"<?php echo esc_js($pop_theme['width']); ?>","height":"<?php echo esc_js($pop_theme['height']); ?>","left":"<?php echo esc_js($pop_theme['left']); ?>","top":"<?php echo esc_js($pop_theme['top']); ?>","title":"<?php echo esc_js($pop_options_defaults['title']); ?>","icon":"<?php echo esc_js($pop_theme['icon']); ?>","footer":"<?php echo esc_js($pop_options_defaults['footer']); ?>","showClose":<?php echo esc_js($pop_theme['showclose']); ?>,"drag":<?php echo esc_js($pop_theme['drag']); ?>,"resize":<?php echo esc_js($pop_theme['resize']); ?>,"scrolling":<?php echo esc_js($pop_theme['scrolling']); ?>,"fadeIn":<?php echo esc_js($pop_theme['fadein']); ?>,"fadeOut":<?php echo esc_js($pop_theme['fadeout']); ?>,"overlayClose":<?php echo esc_js($pop_theme['overlayclose']); ?>,"shadow":<?php echo esc_js($pop_theme['shadow']); ?>,"shadowOptions":"<?php echo esc_js($pop_theme['shadowoptions']); ?>","cookie":"No","hours":"24","zindex":"<?php echo esc_js($pop_theme['zindex']); ?>","titleFont":"<?php echo esc_js($pop_theme['titlefont']); ?>","titleSize":"<?php echo esc_js($pop_theme['titlesize']); ?>","titleWeight":"<?php echo esc_js($pop_theme['titleweight']); ?>","titleColor":"<?php echo esc_js($pop_theme['titlecolor']); ?>","titlePadding":"<?php echo esc_js($pop_theme['titlepadding']); ?>","roundedCorners":"<?php echo esc_js($pop_theme['roundedcorners']); ?>","windowColor":"<?php echo esc_js($pop_theme['windowcolor']); ?>","windowPadding":"<?php echo esc_js($pop_theme['windowpadding']); ?>","pageBorderSize":"<?php echo esc_js($pop_theme['pagebordersize']); ?>","pageBorderColor":"<?php echo esc_js($pop_theme['pagebordercolor']); ?>","pageColor":"<?php echo esc_js($pop_theme['pagecolor']); ?>","overlayColor":"<?php echo esc_js($pop_theme['overlaycolor']); ?>","overlayOpacity":"<?php echo esc_js($pop_theme['overlayopacity']); ?>","closeButton":"<?php echo esc_js($pop_theme['closebutton']); ?>"<?php if($pop_options_defaults['addexclose']=='true'){ ?>,"extraClose":"<?php echo $pop_options_defaults['extraclose']; ?>"<?php }?>}' onclick="update()"><?php echo esc_html($pop_theme['themename']); ?></option> 
 <?php $pop_theme=get_option('pop_theme');
   if($pop_theme){
 ?> 
  <option value='{"width":"<?php echo esc_js($pop_theme['width']); ?>","height":"<?php echo esc_js($pop_theme['height']); ?>","left":"<?php echo esc_js($pop_theme['left']); ?>","top":"<?php echo esc_js($pop_theme['top']); ?>","title":"<?php echo esc_js($pop_options_defaults['title']); ?>","icon":"<?php echo esc_js($pop_theme['icon']); ?>","footer":"<?php echo esc_js($pop_options_defaults['footer']); ?>","showClose":<?php echo esc_js($pop_theme['showclose']); ?>,"drag":<?php echo esc_js($pop_theme['drag']); ?>,"resize":<?php echo esc_js($pop_theme['resize']); ?>,"scrolling":<?php echo esc_js($pop_theme['scrolling']); ?>,"fadeIn":<?php echo esc_js($pop_theme['fadein']); ?>,"fadeOut":<?php echo esc_js($pop_theme['fadeout']); ?>,"overlayClose":<?php echo esc_js($pop_theme['overlayclose']); ?>,"shadow":<?php echo esc_js($pop_theme['shadow']); ?>,"shadowOptions":"<?php echo esc_js($pop_theme['shadowoptions']); ?>","cookie":"No","hours":"24","zindex":"<?php echo esc_js($pop_theme['zindex']); ?>","titleFont":"<?php echo esc_js($pop_theme['titlefont']); ?>","titleSize":"<?php echo esc_js($pop_theme['titlesize']); ?>","titleWeight":"<?php echo esc_js($pop_theme['titleweight']); ?>","titleColor":"<?php echo esc_js($pop_theme['titlecolor']); ?>","titlePadding":"<?php echo esc_js($pop_theme['titlepadding']); ?>","roundedCorners":"<?php echo esc_js($pop_theme['roundedcorners']); ?>","windowColor":"<?php echo esc_js($pop_theme['windowcolor']); ?>","windowPadding":"<?php echo esc_js($pop_theme['windowpadding']); ?>","pageBorderSize":"<?php echo esc_js($pop_theme['pagebordersize']); ?>","pageBorderColor":"<?php echo esc_js($pop_theme['pagebordercolor']); ?>","pageColor":"<?php echo esc_js($pop_theme['pagecolor']); ?>","overlayColor":"<?php echo esc_js($pop_theme['overlaycolor']); ?>","overlayOpacity":"<?php echo esc_js($pop_theme['overlayopacity']); ?>","closeButton":"<?php echo esc_js($pop_theme['closebutton']); ?>"<?php if($pop_options_defaults['addexclose']=='true'){ ?>,"extraClose":"<?php echo $pop_options_defaults['extraclose']; ?>"<?php }?>}' onclick="update()"><?php echo esc_html($pop_theme['themename']); ?></option>     
<?php }?>
</select>
</td></tr>
<tr align="left"><th><?php esc_html_e('Window Title','popover-windows');?>: </th><td><input type="text" name="title" id="title" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['title']); ?>':this.value;" value="<?php echo esc_attr($pop_options_defaults['title']); ?>" onKeyUp="update()" size="24"></td></tr>
<tr align="left"><th><?php esc_html_e('Window Footer','popover-windows');?>: </th><td><input type="text" name="footer" id="footer" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['footer']); ?>':this.value;" value="<?php echo esc_attr($pop_options_defaults['footer']); ?>" onKeyUp="update()" size="24"></td></tr>
<tr align="left"><th><?php esc_html_e('Popover Window Content','popover-windows');?>: </th><td><input type="radio" name="contenttype" id="contenttype1" value="url" onclick="document.getElementById('urldiv').style.display='block';document.getElementById('htmldiv').style.display='none';update();" /><?php esc_html_e('URL','popover-windows');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="contenttype" id="contenttype2" value="html" onclick="document.getElementById('urldiv').style.display='none';document.getElementById('htmldiv').style.display='block';update();" /><?php esc_html_e('HTML','popover-windows');?></td></tr></table><?php esc_html_e('(All popover windows are responsive by default, just make sure your URL or HTML window content is responsive.)','popover-windows');?><br /><br /><?php esc_html_e('To calculate clicks on your window add this code to onclick event in your code','popover-windows');?>
<pre dir="ltr">
onclick="parent.occs(parent.My_Window)";
</pre>
<?php esc_html_e("Where My_Window is the name you selected for your window. Replace spaces in name with '_'.",'popover-windows');?>
</td></tr>
<tr><td>
<?php esc_html_e('The HTML link code you can use to close this window is.','popover-windows');?>
<pre dir="ltr">&lt;a href="javascript:parent.PopoverWindow.hide()"><?php esc_html_e('CLOSE THIS WINDOW','popover-windows');?>&lt;/a></pre>
<div id="urldiv" style="display:block">
<table><tr align="left" valign="top"><th><?php esc_html_e('Launch Window URL','popover-windows');?>: </th><td><input type="text" name="popoverurl" id="popoverurl" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['popoverurl']); ?>':this.value;" value="<?php echo esc_attr($pop_options_defaults['popoverurl']); ?>" onKeyUp="update()" size="40"><br /><?php esc_html_e('(add any url but add the extension (.htm, .html, .php, .asp, etc. ) at the end such as','popover-windows');?> <a href="javascript:" onClick="document.forms.poptions.popoverurl.value='http://www.yourwebsite.com/index.php'">http://www.yourwebsite.com/index.php</a>)</td></tr></table>
</div>
<div id="htmldiv" style="display:none">
<table><tr align="left" valign="top"><th><?php esc_html_e('Copy Paste HTML Here','popover-windows');?>: &nbsp;&nbsp;&nbsp;&nbsp;</th><td><textarea name="popoverhtml" id="popoverhtml" class="textbox" onFocus="this.select()" onKeyUp="update()" rows="10" cols="50" style="resize:none;"><?php echo esc_textarea(str_replace("^","'",str_replace('|','"',$pop_options_defaults['popoverhtml']))); ?></textarea></td></tr></table>
</div>
</td></tr>
<tr align="left"><td><input type="checkbox" name="launchwindow" id="launchwindow" onClick="if(this.checked){document.getElementById('lhtml').style.display='none';}else{document.getElementById('lhtml').style.display='block';}update()"><b> <?php esc_html_e('Launch window automatically after','popover-windows');?> </b><input type="text" class="textbox" name="launchseconds" id="launchseconds" value="<?php echo esc_attr($pop_options_defaults['launchseconds']); ?>" size="2" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['launchseconds']); ?>':this.value;"> <b><?php esc_html_e('seconds','popover-windows');?></b></td></tr>
<tr align="left"><td colspan="2"><input type="checkbox" name="addacookie" value="1" onClick="if(this.checked){document.getElementById('cookie').value='Yes';}else{document.getElementById('cookie').value='No';}update()"> <b><?php esc_html_e('Add Cookie - Display only once, display again after','popover-windows');?></b> <input type="text" name="hours" id="hours" value="<?php echo esc_attr($pop_options_defaults['hours']); ?>" size="2" class="textbox" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['hours']); ?>':this.value;"> 
   <b> <?php esc_html_e('hours','popover-windows');?></b></td></tr>
   <tr><td><div id="lhtml"><table>
   <tr align="left" valign="top"><th><?php esc_html_e('HTML for Window Launch Button','popover-windows');?>: </th><td><textarea name="launchhtml" id="launchhtml" class="textbox" onFocus="this.select()"  onKeyUp="update()" rows="7" cols="50" style="resize:none;"><?php echo esc_textarea(str_replace("^","'",str_replace('|','"',$pop_options_defaults['launchhtml']))); ?></textarea><br />
   <?php esc_html_e('It could be text or image which when clicked should open Popover window.','popover-windows');?>
   </td></tr></table>
   </div></td></tr>
   <tr align="left"><td>
    <table><tr><th> <?php esc_html_e('Add extra code when the popover window launches?','popover-windows');?> &nbsp;&nbsp;&nbsp;</th><td><input name="addexlaunch" id="addexlaunch1" value="true" type="radio" onclick="document.getElementById('exlaunch').style.display='block';update();" /><?php esc_html_e('Yes','popover-windows');?>&nbsp;&nbsp;
  <input name="addexlaunch" id="addexlaunch2" value="false" checked="checked" type="radio"  onclick="document.getElementById('exlaunch').style.display='none';update();"/><?php esc_html_e('No','popover-windows');?>&nbsp;&nbsp;&nbsp;<?php esc_html_e('(the code to execute when popover window is launched)','popover-windows');?></td></tr>
  </table>
  <div id="exlaunch" style="display:none"><table class="form-table"><tr>
 <th valign="top"><?php esc_html_e('Enter the code to add to window launch','popover-windows');?>:</th><td> <textarea id="extralaunch" onKeyUp="update()" name="extralaunch" rows="4" cols="40" style="resize:none"><?php echo esc_textarea($pop_options_defaults['extralaunch']);?></textarea></td></tr></table></div>
   </td></tr>
 <tr align="left"><td>
   <table><tr><th><?php esc_html_e('Add extra code to the close button?','popover-windows');?> &nbsp;&nbsp;&nbsp;</th><td><input name="addexclose" id="addexclose1" value="true" type="radio" onclick="document.getElementById('exclose').style.display='block';update();" /><?php esc_html_e('Yes','popover-windows');?>&nbsp;&nbsp;
  <input name="addexclose" id="addexclose2" value="false" checked="checked" type="radio" onKeyUp="update()" onclick="document.getElementById('exclose').style.display='none';update();"/><?php esc_html_e('No','popover-windows');?>&nbsp;&nbsp;&nbsp;<?php esc_html_e('(the code to execute when close button is clicked)','popover-windows');?></td></tr>
  </table>
  <div id="exclose" style="display:none"><table class="form-table"><tr>
 <th valign="top"><?php esc_html_e('Enter the code to add to close button','popover-windows');?>:</th><td> <textarea id="extraclose" name="extraclose" rows="4" cols="40" style="resize:none"><?php echo esc_textarea($pop_options_defaults['extraclose']);?></textarea></td></tr></table></div>
 </td></tr>
   <tr align="left"><td><table><tr><th><?php esc_html_e('Show the banner on?','popover-windows');?></th><td><input type="radio" name="showonpage" id="showonpage3" value="All" onClick="document.getElementById('pagediv').style.display='none';" > <?php esc_html_e('All Pages','popover-windows');?><input type="radio" name="showonpage" id="showonpage2" value="Home" onClick="document.getElementById('pagediv').style.display='none';" > <?php esc_html_e('HomePage Only','popover-windows');?><input type="radio" name="showonpage" id="showonpage1" value="Specific" onClick="document.getElementById('pagediv').style.display='block';" > <?php esc_html_e('Specific Pages Only','popover-windows');?>
  </td></tr></table>
  <div id="pagediv" style="display:none">
 <table><tr><th valign="top"> <?php esc_html_e('Page Titles','popover-windows');?></th><td> <input type="text" name="pagetitle" id="pagetitle" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['pagetitle']); ?>':this.value;" value="<?php echo esc_attr($pop_options_defaults['pagetitle']); ?>" onKeyUp="update()" size="24"><br /> <?php esc_html_e('Titles of the page separated by commas on which to show the banner.(Case Sensitive)','popover-windows');?></td></tr></table></div>
  </td></tr>
 <tr align="left"><td>
 <table align="left"><tr align="left"><th valign="top"><?php esc_html_e('Placement: Div ID','popover-windows');?></th><td> <input type="text" name="divid" id="divid" class="textbox" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_options_defaults['divid']); ?>':this.value;" value="<?php echo $pop_options_defaults['divid']; ?>" onKeyUp="update()" size="24"> <?php esc_html_e('Id of div or any other html element  in which popover launch button should appear','popover-windows');?> .</td><td><div id="divid_notice"></div></td></tr><tr><td colspan="2">*<?php esc_html_e('Note If placing into a Post, manually add a new DIV layer in your post like this','popover-windows');?> &lt;div id="popoverdiv"&gt;&lt;/div&gt; <?php esc_html_e('Then add "popoverdiv" in the box above','popover-windows');?>.</td></tr><tr align="left"><th><?php esc_html_e('Placement of Popover Launch Button?','popover-windows');?></th><td valign="top"><input type="radio" name="beforediv" id="beforediv1" value="Yes" checked="checked"> <?php esc_html_e('Start of Div','popover-windows');?>&nbsp;&nbsp;&nbsp;<input type="radio" name="beforediv" id="beforediv2" value="No"> <?php esc_html_e('End of Div','popover-windows');?>
  </td></tr></table></td></tr>
</table>

<input type="hidden" name="bannerid" id="bannerid" value="<?php echo esc_attr($pop_options_defaults['bannerid']); ?>" />
<input type="hidden" name="cookie" id="cookie" value="<?php echo esc_attr($pop_options_defaults['cookie']); ?>">
 <input type="hidden" name="plug_url" id="plug_url" value="<?php echo esc_url(plugins_url('', __FILE__));?>">
 <input type="hidden" name="adm_url" id="adm_url" value="<?php echo esc_url(admin_url());?>">
</form>
</td><td valign="top"><div id="popover_generator" style="position:relative;"></div></td></tr></table>
<br /><br />
<input type="button" class="button button-primary" name="savewindow" value="<?php esc_attr_e('Save Window','popover-windows');?>" onclick="return formpop('savewindow')" />
</div>

	<?php

	

}

function new_popover_theme_page(){
	global $pop_theme_defaults;
	global $wpdb;
	$folder=plugins_url('', __FILE__)."/";
	if(isset($_GET['mod']) && $_GET['mod']=="edit"){
		if($_GET['id']=='def_123'){
		   $pop_theme = get_option('pop_theme_default');
		}else{
			$pop_theme = get_option('pop_theme');
		}
		$pop_theme_defaults=$pop_theme;
	   
	}?>
	 <div class="wrap">
    <h2><?php esc_html_e('Melodic Media Popover Windows','popover-windows');?></h2>
    <br />
	<?php
	  if(isset($_GET['mod']) && $_GET['mod']=="edit"){?>
	 <h3><?php esc_html_e('Edit Popover Theme','popover-windows');?></h3>
    <br /><?php
	 }else{?>
	 <h3><?php esc_html_e('New Popover Theme','popover-windows');?></h3>
    <br />
	<?php }
	?>
    </div>
   
<script type="text/javascript">
// set the PopoverWindow media path where the icons, images, and css files are located
PopoverWindow.setPath("<?php echo esc_url($folder); ?>");
</script>

<script type="text/javascript">

function getOptions() {
	var options = {};
	var f = document.forms.poptions;
	for (var i=0;i<f.length;i++) {
		var name = f[i].name;
		var type = f[i].type;
		if (name) {
			if (type=='checkbox') {
				if (f[i].checked) options[name] = true;
				else options[name] = false;
			}
			else options[name] = f[i].value;
		}
	}
	return options;
}

function updateStatus(f) {
	var win_size = jax.getWindowSize();
	f.win.value = win_size.w +' x '+win_size.h;
	var page_size = jax.getPageSize();
	f.page.value = page_size.w + ' x ' + page_size.h;
	var scroll_pos = jax.getScroll();
	f.scroll.value = scroll_pos.x +' x '+scroll_pos.y;
}

jaxscript.run(function() {
					   fillEditPopTheme('<?php echo esc_js($pop_theme_defaults['icon']); ?>',<?php echo esc_js($pop_theme_defaults['showclose']); ?>,<?php echo esc_js($pop_theme_defaults['drag']); ?>,<?php echo esc_js($pop_theme_defaults['resize']); ?>,<?php echo esc_js($pop_theme_defaults['scrolling']); ?>,<?php echo esc_js($pop_theme_defaults['fadein']); ?>,<?php echo esc_js($pop_theme_defaults['fadeout']); ?>,<?php echo esc_js($pop_theme_defaults['overlayclose']); ?>,<?php echo esc_js($pop_theme_defaults['shadow']); ?>,'<?php echo esc_js($pop_theme_defaults['titlefont']); ?>','<?php echo esc_js($pop_theme_defaults['titlesize']); ?>','<?php echo esc_js($pop_theme_defaults['titleweight']); ?>','<?php echo esc_js($pop_theme_defaults['titlepadding']); ?>','<?php echo esc_js($pop_theme_defaults['roundedcorners']); ?>','<?php echo esc_js($pop_theme_defaults['windowpadding']); ?>','<?php echo esc_js($pop_theme_defaults['pagebordersize']); ?>','<?php echo esc_js($pop_theme_defaults['overlayopacity']); ?>','<?php echo esc_js($pop_theme_defaults['closebutton']); ?>');
	PopoverWindow.insert('generator',true);
	var g = dom.id('generator_iframe');
	g.style.textAlign = 'center';
	
	update();
});

function update() {
	PopoverWindow.update(getOptions());
}

function chooseTab(name, a) {
	if (name=='settings') {
		jaxscript.style.display('settings_content',true);
		jaxscript.style.display('theme_content',false);
		dom.id('settings_tab').className = 'tab_selected';
		dom.id('theme_tab').className = 'tab';
	}
	else {
		jaxscript.style.display('settings_content',false);
		jaxscript.style.display('theme_content',true);
		dom.id('settings_tab').className = 'tab';
		dom.id('theme_tab').className = 'tab_selected';
	}
}

</script>
    <style type="text/css">

DIV#launch {margin-top:30px;  }

#theme TD {font-size:11pt; line-height:2em;}
DIV.tab_content {line-height:1.7em; font-size:11pt; width:320px; margin-right:20px; border:1px solid #555; background-color:#ddd; padding:10px;}

DIV#theme_content {display:none;}

A.tab_selected {background-color:#ddd; border-left:1px solid #555; border-right:1px solid #555; border-top:1px solid #555; padding:4px; font-size:11pt; text-decoration:none; color:#000; font-weight:bold; margin-right:2px;  outline:none; -moz-border-radius-topright:5px; -webkit-border-radius-topright:5px; -moz-border-radius-topleft:5px; -webkit-border-radius-topleft:5px;}
A.tab {font-size:11pt; text-decoration:none; color:#000; font-weight:bold;  margin-right:2px; outline:none; padding:4px;}

DIV#header {background:#000 url(popoverwindow/img/popwindow-bg.jpg) top center; margin-bottom:15px; padding:10px;}
DIV#header TD {color:#fff;}
DIV#header A {color:#fff;}
</style>
<br />
 <div id="error_notice"></div><br>
<table border="0" cellpadding="0" cellspacing="0" width="70%">
<tr valign="top"><td>

<form name="poptions">

<a class="tab_selected" id="settings_tab" href="javascript://" onClick="chooseTab('settings',this)"><?php esc_html_e('Settings','popover-windows');?></a>
<a class="tab" id="theme_tab" href="javascript://" onClick="chooseTab('theme',this)"><?php esc_html_e('Colors','popover-windows');?></a>

<div id="settings_content" class="tab_content">
<div class="blankspace"></div>
<?php esc_html_e('Theme Name','popover-windows');?>: <input type="text" name="themename" id="themename" class="textbox" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_theme_defaults['themename']); ?>':this.value;" value="<?php echo esc_attr($pop_theme_defaults['themename']); ?>" onKeyUp="update()" size="24"><br>
<div class="blankspace"></div>
<?php esc_html_e('Size','popover-windows');?>: <input type="text" name="width" id="width" value="<?php echo esc_attr($pop_theme_defaults['width']); ?>" class="textbox" size="3" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_theme_defaults['width']); ?>':this.value;" onKeyUp="update()"> x <input type="text" class="textbox" name="height" id="height" value="<?php echo esc_attr($pop_theme_defaults['height']); ?>" size="3" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_theme_defaults['height']); ?>':this.value;" onKeyUp="update()"> px<br>
<div class="blankspace"></div>
<?php esc_html_e('Position','popover-windows');?>: <input type="text" name="left" id="left" value="<?php echo esc_attr($pop_theme_defaults['left']); ?>" class="textbox" size="3" onKeyUp="update()"> 
x 
<input type="text" name="top" id="top" value="<?php echo esc_attr($pop_theme_defaults['top']); ?>" size="3" class="textbox" onKeyUp="update()"> px<br>
<div class="blankspace"></div>

<input type="hidden" name="title" id="title" value="<?php esc_html_e('Your Title Here!','popover-windows');?>">
<input type="hidden" name="footer" id="footer" value="<?php esc_html_e('Your Footer Here!','popover-windows');?>">
<?php esc_html_e('Title Icon','popover-windows');?>: <select name="icon" id="icon" onChange="update()">
<option value="" onClick="update()">[none]</option>
<option value="accept" onClick="update()"><?php esc_html_e('accept','popover-windows');?></option>
<option value="add" onClick="update()"><?php esc_html_e('add','popover-windows');?></option>
<option value="browse" onClick="update()"><?php esc_html_e('browse','popover-windows');?></option>
<option value="calendar" onClick="update()"><?php esc_html_e('calendar','popover-windows');?></option>
<option value="cart" onClick="update()"><?php esc_html_e('cart','popover-windows');?></option>
<option value="check" onClick="update()"><?php esc_html_e('check','popover-windows');?></option>
<option value="clipboard" onClick="update()"><?php esc_html_e('clipboard','popover-windows');?></option>
<option value="color_wheel" onClick="update()"><?php esc_html_e('color wheel','popover-windows');?></option>
<option value="comments" onClick="update()"><?php esc_html_e('comments','popover-windows');?></option>
<option value="date" onClick="update()"><?php esc_html_e('date','popover-windows');?></option>
<option value="default" onClick="update()"><?php esc_html_e('default','popover-windows');?></option>
<option value="delete" onClick="update()"><?php esc_html_e('delete','popover-windows');?></option>
<option value="disk" onClick="update()"><?php esc_html_e('disk','popover-windows');?></option>
<option value="email" onClick="update()"><?php esc_html_e('email','popover-windows');?></option>
<option value="error" onClick="update()"><?php esc_html_e('error','popover-windows');?></option>
<option value="folder" onClick="update()"><?php esc_html_e('folder','popover-windows');?></option>
<option value="gear" onClick="update()"><?php esc_html_e('gear','popover-windows');?></option>
<option value="info" onClick="update()"><?php esc_html_e('info','popover-windows');?></option>
<option value="lightning" onClick="update()"><?php esc_html_e('lightning','popover-windows');?></option>
<option value="lock" onClick="update()"><?php esc_html_e('lock','popover-windows');?></option>
<option value="money" onClick="update()"><?php esc_html_e('money','popover-windows');?></option>
<option value="page" onClick="update()"><?php esc_html_e('page','popover-windows');?></option>
<option value="page_edit" onClick="update()"><?php esc_html_e('page edit','popover-windows');?></option>
<option value="people" onClick="update()"><?php esc_html_e('people','popover-windows');?></option>
<option value="plug" onClick="update()"><?php esc_html_e('plug','popover-windows');?></option>
<option value="search" onClick="update()"><?php esc_html_e('search','popover-windows');?></option>
<option value="smiley" onClick="update()"><?php esc_html_e('smiley','popover-windows');?></option>
<option value="star" onClick="update()"><?php esc_html_e('star','popover-windows');?></option>
<option value="user" onClick="update()"><?php esc_html_e('user','popover-windows');?></option>
<option value="wand" onClick="update()"><?php esc_html_e('wand','popover-windows');?></option>
<option value="warning" onClick="update()"><?php esc_html_e('warning','popover-windows');?></option>
<option value="youtube.gif" onClick="update()">youtube.gif</option>
</select><br>
<div class="blankspace"></div>
<?php esc_html_e('Close Button','popover-windows');?>: <select name="closeButton" id="closeButton" onChange="update()">
<option value="closebig.png" onClick="update()"><?php esc_html_e('Red Close Button','popover-windows');?></option>
<option value="closewhite.png" onClick="update()"><?php esc_html_e('White Close Button','popover-windows');?></option>
<option value="closeblack.png" onClick="update()"><?php esc_html_e('Black Close Button','popover-windows');?></option>
</select><br>
<div class="blankspace"></div>

<input name="showClose" type="checkbox" id="showClose" onClick="update()"> <?php esc_html_e('Close Button','popover-windows');?><br>
<div class="blankspace"></div>

<input name="drag" type="checkbox" id="drag" onClick="update()"> <?php esc_html_e('Drag & Drop','popover-windows');?><br>
<div class="blankspace"></div>

<input name="resize" type="checkbox" id="resize" onClick="update()"> <?php esc_html_e('Resizable','popover-windows');?><br>
<div class="blankspace"></div>

<input name="scrolling" type="checkbox" id="scrolling" onClick="update()"> <?php esc_html_e('Scrollbar','popover-windows');?><br>
<div class="blankspace"></div>

<input name="fadeIn" type="checkbox" id="fadeIn" onClick="update()"> <?php esc_html_e('Fade in effect','popover-windows');?><br>
<div class="blankspace"></div>

<input name="fadeOut" type="checkbox" id="fadeOut" onClick="update()"> <?php esc_html_e('Fade out effect','popover-windows');?><br>
<div class="blankspace"></div>

<input name="overlayClose" type="checkbox" id="overlayClose" onClick="update()"> <?php esc_html_e('Clicking Outside Closes Window','popover-windows');?><br>
<div class="blankspace"></div>

<input name="shadow" type="checkbox" id="shadow" onClick="update()"> <?php esc_html_e('Outside Shadow Effect','popover-windows');?><br>
<div class="blankspace"></div>

<?php esc_html_e('Shadow Options','popover-windows');?>: <input type="text" class="textbox" name="shadowOptions" id="shadowOptions" value="<?php echo esc_attr($pop_theme_defaults['shadowoptions']); ?>" onKeyUp="update()" size="24"><br>
<div class="blankspace"></div>
<input type="hidden" name="bannerid" id="bannerid" value="<?php echo esc_attr($pop_theme_defaults['bannerid']); ?>" />
<input type="hidden" name="cookie" id="cookie" value="No">
<input type="hidden" name="hours" id="hours" value="24">
 <input type="hidden" name="plug_url" id="plug_url" value="<?php echo esc_url(plugins_url('', __FILE__));?>">
 <input type="hidden" name="adm_url" id="adm_url" value="<?php echo esc_url(admin_url());?>">
<?php esc_html_e('Z-index Level','popover-windows');?>: <input type="text" class="textbox" name="zindex" id="zindex" onClick="this.value='';" onFocus="this.select()" onBlur="this.value=!this.value?'<?php echo esc_attr($pop_theme_defaults['zindex']); ?>':this.value;" value="<?php echo esc_attr($pop_theme_defaults['zindex']); ?>" size="3" onKeyUp="update()"><br>
</div>

<div id="theme_content" class="tab_content">
<table border="0" cellpadding="0" cellspacing="0" id="theme">
<tr>
<td nowrap><?php esc_html_e('Title Font','popover-windows');?>:</td>
<td><select name="titleFont" id="titleFont" onChange="update()">
<option value="sans-serif" style="font-family:sans-serif">sans-serif</option>
<option value="serif" style="font-family:serif">serif</option>
<option value="Arial" style="font-family:Arial">Arial</option>
<option value="Helvetica" style="font-family:Helvetica">Helvetica</option>
<option value="Lucida Grande" style="font-family:Lucida Grande">Lucida</option>
<option value="Times New Roman" style="font-family:Times New Roman">Times</option>
</select></td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Font Style','popover-windows');?>:</td>
<td nowrap><select name="titleSize" id="titleSize" onChange="update()">
<option value="7pt">7pt</option>
<option value="8pt">8pt</option>
<option value="9pt">9pt</option>
<option value="10pt">10pt</option>
<option value="11pt">11pt</option>
<option value="12pt">12pt</option>
<option value="13pt">13pt</option>
</select><select name="titleWeight" id="titleWeight" onChange="update()">
<option value="normal">Normal</option>
<option value="bold">Bold</option>
</select>
</td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Title Color','popover-windows');?>:</td>
<td>
<input name="titleColor" id="titleColor" class="color textbox" value="<?php echo esc_attr($pop_theme_defaults['titlecolor']); ?>" size="7" onBlur="update()" onFocus="update()"></td>
</tr>
<tr>
  <td nowrap><?php esc_html_e('Title Padding','popover-windows');?>:</td>
  <td><select name="titlePadding" id="titlePadding" onChange="update()">
    <option value="0">0</option>
    <option value="1">1px</option>
    <option value="2">2px</option>
    <option value="3">3px</option>
    <option value="4">4px</option>
    <option value="5">5px</option>
    <option value="8">8px</option>
    <option value="10">10px</option>
    <option value="15">15px</option>
  </select></td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Round Corners','popover-windows');?>:</td>
<td><select name="roundedCorners" id="roundedCorners" onChange="update()">
<option value="0">0</option>
<option value="1">1px</option>
<option value="2">2px</option>
<option value="3">3px</option>
<option value="4">4px</option>
<option value="5">5px</option>
<option value="8">8px</option>
<option value="10">10px</option>
<option value="15">15px</option>
</select>
</td>
</tr>


<tr>
<td nowrap><?php esc_html_e('Window Color','popover-windows');?>:</td>
<td>
<input name="windowColor" id="windowColor" class="color textbox" value="<?php echo esc_attr($pop_theme_defaults['windowcolor']); ?>" size="7" onBlur="update()" onFocus="update()"></td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Window Padding','popover-windows');?>:</td>
<td><select name="windowPadding" id="windowPadding" onChange="update()">
<option value="0">0</option>
<option value="1">1px</option>
<option value="2">2px</option>
<option value="3">3px</option>
<option value="4">4px</option>
<option value="5">5px</option>
<option value="8">8px</option>
<option value="10">10px</option>
<option value="15">15px</option>
</select>
</td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Page Border','popover-windows');?>:</td>
<td><select name="pageBorderSize" id="pageBorderSize" onChange="update()">
<option value="1">1px</option>
<option value="2">2px</option>
<option value="3">3px</option>
<option value="4">4px</option>
<option value="5">5px</option>
</select>
</td></tr>

<tr>
<td nowrap><?php esc_html_e('Border Color','popover-windows');?>:</td>
<td>
<input name="pageBorderColor" id="pageBorderColor" class="color textbox" value="<?php echo esc_attr($pop_theme_defaults['pagebordercolor']); ?>" size="7" onBlur="update()" onFocus="update()"></td>
</tr>


<tr>
<td nowrap><?php esc_html_e('Page Color','popover-windows');?>:</td>
<td>
<input name="pageColor" id="pageColor" class="color textbox" value="<?php echo esc_attr($pop_theme_defaults['pagecolor']); ?>" size="7" onBlur="update()" onFocus="update()"></td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Overlay Color','popover-windows');?>:</td>
<td>
<input name="overlayColor" id="overlayColor" class="color textbox" value="<?php echo esc_attr($pop_theme_defaults['overlaycolor']); ?>" size="7" onBlur="update()" onFocus="update()"></td>
</tr>

<tr>
<td nowrap><?php esc_html_e('Overlay Opacity','popover-windows');?></td>
<td><select name="overlayOpacity" id="overlayOpacity" onChange="update()">
<option value="0">0%</option>
<option value="0.1">10%</option>
<option value="0.2">20%</option>
<option value="0.3">30%</option>
<option value="0.4">40%</option>
<option value="0.5">50%</option>
<option value="0.6">60%</option>
<option value="0.7">70%</option>
<option value="0.8">80%</option>
<option value="0.9">90%</option>
<option value="1">100%</option>
</select></td>
</tr>

</table>

</form>

</td>

<td style="padding-top:10px; ">

<div id="popover_generator" style="position:relative;"></div>

</td>
</tr>
<tr><td colspan="2" style="font-size:10pt;">

</td></tr></table><br /><br />
<input type="button" class="button button-primary" name="savetheme" value="<?php esc_attr_e('Save Theme','popover-windows');?>" onclick="return formpop('savetheme')" />
    <?php
}




?>