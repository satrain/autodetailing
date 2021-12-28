<?php

function enqueue_styles_and_scripts() {
    $ver = '1.0.0';

    wp_register_style('main_style', get_template_directory_uri() . '/assets/css/main.css', array(), $ver, 'all');
    wp_enqueue_style('main_style');

    wp_register_style('calculator_style', get_template_directory_uri() . '/assets/css/calculator.css', array(), $ver, 'all');
    wp_enqueue_style('calculator_style');


    wp_register_script('main_script', get_template_directory_uri() . '/assets/js/script.js', array(), 1, 1, 1);
    wp_enqueue_script('main_script');

    wp_register_script('testimonials_script', get_template_directory_uri() . '/assets/js/testimonials.js', array(), 1, 1, 1);
    wp_enqueue_script('testimonials_script');
    
    wp_register_script('calculator_script', get_template_directory_uri() . '/assets/js/calculator.js', array(), 1, 1, 1);
    wp_enqueue_script('calculator_script');
}
add_action('wp_enqueue_scripts', 'enqueue_styles_and_scripts');

register_nav_menu( 'main_menu', __('Main Menu', 'autodetailing-theme') );

// add active class on current menu item
add_filter('nav_menu_css_class' , 'special_nav_class' , 10 , 2);
function special_nav_class ($classes, $item) {
    if (in_array('current-menu-item', $classes) ){
        $classes[] = 'active ';
    }
    return $classes;
}

?>
