<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>SuperMario Auto Detailing</title>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/bc304fedcd.js" crossorigin="anonymous"></script>
        <?php
            wp_head();
        ?>
    </head>
    <body>
        <main>
            <header>
                <div class="header-logo">
                    <a href="/"><img src="/wp-content/uploads/2021/10/autodetailing-logo.png" alt="Auto Detailing Logo"></a>
                </div>
                <div class="header-right-side hide-xs">
                    <a class="btn btn-primary header-btn" href="#">Get a Quote</a>
                    <nav>
                        <?php
                            if(has_nav_menu('main_menu')) {
                                wp_nav_menu(array('theme_location' => 'main_menu'));
                            }
                        ?>
                    </nav>
                </div>
                <a href="#" class="hamburger-menu hide-d">|||</a>
            </header>
            
            <div class="nav-mobile-overlay">
                <div class="nav-mobile">
                        <nav>
                            <?php
                                if(has_nav_menu('main_menu')) {
                                    wp_nav_menu(array('theme_location' => 'main_menu'));
                                }
                            ?>
                        </nav>
                </div>
                <span class="close-overlay">X</span>
            </div>
