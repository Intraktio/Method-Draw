f<?php 
/*
Plugin Name: Method draw
Plugin URI:  intraktio.com
Description: Method draw for WordPress
Version:     1.0
Author:      Intraktio oy
Author URI:  https://intraktio.com
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: method-draw
*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );

function include_method_draw_embed_api() {
	wp_enqueue_script( 'method-draw-embedapi', plugin_dir_url( __FILE__ ) . 'src/embedapi.js', array('jquery'), '2.5' );
}

?>
