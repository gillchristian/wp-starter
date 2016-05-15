<?php
/**
 * Theme functions file
 */

$prefix = 'tri_';
define('__PREFIX__', $prefix);
define('__THEME__', get_stylesheet_directory_uri() );
define('__DOMAIN__', wp_get_theme()->get('TextDomain') );


/**
 *
 * PHP Dependencies
 *
 */
# --- metaboxes for taxonomies ---
# require_once __DIR__ . '/framework/dependencies/Tax-meta-class/Tax-meta-class.php';
# --- Markdown Parser ---
#require_once __DIR__. '/framework/dependencies/markdown/Michelf/Markdown.inc.php';
# --- CPT helper class ---
#require_once __DIR__ . '/framework/dependencies/CPT/src/cpt.init.php';

/**
 *
 * PHP Scripts
 *
 */
# --- Helper functions ---
require_once __DIR__ . '/framework/functions/helpers.php';
# --- enqueue scripts ---
require_once __DIR__ . '/framework/functions/scripts.php';
# --- ajax declarations and callback actions ---
require_once __DIR__ . '/framework/functions/ajax.php';
# --- template parts used on the theme ---
require_once __DIR__ . '/framework/functions/template-parts.php';
# --- generate options page ---
require_once __DIR__ . '/framework/functions/options.php';
# --- Custom post types and taxonomies ---
require_once __DIR__ . '/framework/functions/cpt.php';
# --- Custom meta boxes ---
require_once __DIR__ . '/framework/functions/cmb.php';

show_admin_bar(false);

# Includes Favicon
function favicon_link() {
    echo '<link rel="shortcut icon" type="image/x-icon" href="'. get_stylesheet_directory_uri() .'/favicon.ico" />' . "\n";
}
add_action( 'wp_head', 'favicon_link' );
add_action( 'login_head', 'favicon_link' );
add_action( 'admin_head', 'favicon_link' );