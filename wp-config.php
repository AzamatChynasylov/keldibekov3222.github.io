<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'raritet' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6I|W:)y>=(EE+Lp9VP>}x[,B,f*Y+6IfF|B=]l3Xvh`xL3o*{)}Q1Xw^GnuGv;i`' );
define( 'SECURE_AUTH_KEY',  'eiBGUX.Nm2!VOXG+dUMPapBE|r()SqY.#uO./ l6+#B^u>eK&>=hP;Fkd*49zv;n' );
define( 'LOGGED_IN_KEY',    'Fl-17nB$zefjdyoz2pt|ys66tEEtRatc&r/P?Y)c>`!#Qo>Lu[u=wTHMy6R1 aLP' );
define( 'NONCE_KEY',        'i`VEjgfIdOKl{*2~Th-(0}Z 76!,agR&0+^M&Si`x{dJ;NDchXSQ|*Roq3mG]![>' );
define( 'AUTH_SALT',        'uCec&Xyu3|g>?55/N+ub*eaVJ{Co4;. %Ki7#j&]9I0qci;<uI5|JC(A>1_dZ-Ad' );
define( 'SECURE_AUTH_SALT', 't0QIf/*vCT{Qdn](~:83CXXz?Pb;Yg%h,kY~E]2NXyxwi<dZ$e1!QZ>,P*WWP[W)' );
define( 'LOGGED_IN_SALT',   'CzSkfHE?r`AT6;+si)B$s6w0(!Xwh!BECQvXPzfl`9A6Dym9p@~&,|kOha,|OT$r' );
define( 'NONCE_SALT',       '(Y==R`$GMY4Cpe^u0>Wf79jm|M0k%|~WqPz}QOpN9*51#PxihwAkH9#/u6AASfoQ' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
