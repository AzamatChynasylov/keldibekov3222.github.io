<?php

function surfing_scripts()
{





	wp_enqueue_style('surfing-style', get_stylesheet_uri());

	wp_register_style('fonts', 'http://allfont.ru/allfont.css?fonts=heuristica-Reular', false, null);
	wp_enqueue_style('fonts');

	wp_enqueue_style('surfing-gfonts', 'https://allfont.ru/allfont.css?fonts=heuristica-bold');
	wp_enqueue_style('surfing-gfonts', 'https://allfont.ru/allfont.css?fonts=heuristica-regular');

	wp_enqueue_script('lazyload.min', get_template_directory_uri() . '/js/lazyload.min.js', array(), _S_VERSION, true);
	wp_enqueue_script('mainJs', get_template_directory_uri() . '/js/main.js', array(), _S_VERSION, true);
	wp_enqueue_script('jQuery', get_template_directory_uri() . '/js/jquery.min.js', array(), _S_VERSION, true);
	wp_enqueue_script('jQuery-migrate', get_template_directory_uri() . '/js/jquery-migrate-1.2.1.min.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'surfing_scripts');