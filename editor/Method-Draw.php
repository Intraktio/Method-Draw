<?php 
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

function enqueue_method_draw_embedapi_scripts() {
	wp_enqueue_script( 'method-draw-embedapi', plugin_dir_url( __FILE__ ) . 'embedapi.js', array(), '2.5' );
}

function get_method_draw_index_url() {
	return plugin_dir_url( __FILE__ ) . 'index-wp.php';
}

function the_method_draw_editor() {
	include(plugin_dir_path( __FILE__ ) . 'index-wp.php');
}

?>
