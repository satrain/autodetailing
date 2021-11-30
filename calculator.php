<?php
/* Template Name: Calculator */
get_header();
?>
<div class="inner-page">

    <div class="popup-container">
        <div class="popup-content">
            <div class="exit-popup">X</div>
            <img id="popup-img" src="https://tubecabolivia.com/wp-content/uploads/2019/12/imggg.png" alt="">
            <h2 id="popup-text">Ovo je nas najnoviji i najbolji proizvod</h2>
        </div>
    </div>


    <div class="booking-wrapper booking-wrapper-2 container">
        <div class="booking-form">
            <h2>Complete your booking.</h2>
            <p>There are few easy steps to finish booking.</p>
            <div class="booking-form-fields">

                <div class="booking-field type-of-vehicle">
                    <h3>Type of your vehicle</h3>
                    <div class="booking-icons-wrapper"></div>
                </div>

                <div class="booking-content-wrapper">
                    <!-- <div class="single-card">
                        <div class="single-card-inner-cont">
                            <i class="fas fa-car"></i>
                            <div class="info-icon">i</div>
                        </div>
                        <p>NameOfTheCard</p>
                    </div> -->

                    <div class="auto-chosen-options choosing-option">
                        <div class="booking-field size-of-vehicle">
                            <h3>Select size of your vehicle</h3>
                            <div class="select-size-wrapper"></div>
                        </div>

                        <div class="booking-field package">
                            <h3>Select package</h3>
                            <div class="select-package-wrapper"></div>
                        </div>

                        <div class="booking-field condition">
                            <h3>Select condition</h3>
                            <div class="select-condition-wrapper"></div>
                        </div>

                        <div class="booking-field condition">
                            <h3>ADD EXTRAS</h3>
                            <div class="select-extras-wrapper"></div>
                        </div>
                    </div>

                    <div class="rv-chosen-options choosing-option">rv-chosen-options</div> 

                    <div class="boat-chosen-options choosing-option">boat-chosen-options</div>   

                    <div class="bike-chosen-options choosing-option">bike-chosen-options</div>                

                    <!-- <div class="other-chosen-options">
                        <p>Other vehicles</p>
                    </div> -->
                </div>
                

            </div>
        </div>
        <div class="booking-calculator">
            <h2>Booking Summary!</h2>
            <hr>

            <div class="actual-calculator"></div>



            <hr>
        </div>
    </div>



</div>
<?php get_footer(); ?>
