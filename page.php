<?php
/* Template Name: Default Page Template */
get_header();
$pageId = get_the_ID();
?>
<div class="page page-id-<?php echo $pageId; ?>">
    <div class="page-header">
        <h1><?php $slug = get_post_field( 'post_name', get_post() ); echo $slug; ?></h1>
    </div>
    <div class="page-content">
        <div class="container">
            <?php the_content(); ?>
        </div>
    </div>
</div>
<?php
get_footer();
?>
