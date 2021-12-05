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

                    <div id="auto-chosen-options" class="auto-chosen-options choosing-option">
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

                    <div id="rv-chosen-options" class="rv-chosen-options choosing-option">
                        <div class="booking-field size-of-rv">
                            <h3>Select size of your vehicle</h3>
                            <div class="select-size-rv-wrapper"></div>
                        </div>

                        <div class="booking-field package">
                            <h3>Select package</h3>
                            <div class="select-package-rv-wrapper"></div>
                        </div>
                    </div> 

                    <div id="boat-chosen-options" class="boat-chosen-options choosing-option">
                        <div class="booking-field size-of-boat">
                            <h3>Select size of your vehicle</h3>
                            <div class="select-size-boat-wrapper"></div>
                        </div>

                        <div class="booking-field package">
                            <h3>Select package</h3>
                            <div class="select-package-boat-wrapper"></div>
                        </div>
                    </div>   

                    <div id="bike-chosen-options" class="bike-chosen-options choosing-option"><strong style="font-size: 30px;">Price is depending on the size and condition of the bike</strong></div>                

                    <!-- <div class="other-chosen-options">
                        <p>Other vehicles</p>
                    </div> -->
                </div>
                

            </div>
        </div>

        <div class="booking-calculator">
            <h2>Booking Summary!</h2>
            <hr>

            <div class="actual-calculator">

                <ul id="calculator-ul-main">
                    <li id="main-ul-first-child">
                        <div class="main-li-holder">
                            <div class="main-li-left"><i class="fas fa-home"></i><p>Default</p></div>
                            <div class="main-li-right">$100</div>
                        </div>

                        <ul class="secondary-ul">
                            <li class="secondary-li">
                                <div class="secondary-content-left">Size</div>
                                <div class="secondary-content-right">$0.00</div>
                            </li>
                            <li class="secondary-li">
                                <div class="secondary-content-left">Condition</div>
                                <div class="secondary-content-right">$0.00</div>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <div class="choose-date-left">
                            <i class="fas fa-calendar"></i><p>Choose service date...</p>
                        </div>
                        <div class="choose-date-right"></div>
                    </li>

                    <li>
                        <div class="one-time-left">
                            <i class="fas fa-redo"></i><p>One Time</p>
                        </div>
                        <div class="one-time-right"></div>
                    </li>

                    <!-- <li class="main-ul-last-child">
                        <div class="main-ul-last-child-content">
                            <p>SUB-TOTAL $100.00</p>
                            <p>SALES-TAX $10.30</p>
                            <p>TOTAL $110.30</p>
                        </div>
                    </li> -->
                </ul>

            </div>

            <hr>

            <ul>
                <li class="calculator-bottom-ul-li" id="subtotal">
                    <div class="key-subtotal">SUB-TOTAL</div>
                    <div class="value-subtotal">$100.00</div>
                </li>
                <li class="calculator-bottom-ul-li" id="sales-taxes">
                    <div class="key-taxes">SALES TAX</div>
                    <div class="value-taxes">$10.30</div>
                </li>
                <li class="calculator-bottom-ul-li" id="total">
                    <div class="key-total">TOTAL</div>
                    <div class="value-total">$110.30</div>
                </li>
            </ul>


            <button id="book-now">BOOK NOW</button>

        </div>
    </div>



</div>
<?php get_footer(); ?>
