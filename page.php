<?php
/* Template Name: Default Page Template */
get_header();
?>
<div class="page">
    <div class="page-header">
        <h1><?php $slug = get_post_field( 'post_name', get_post() ); echo $slug; ?></h1>
    </div>

</div>
<?php
get_footer();
?>
