let temp = ''
var ishide = false
var Resize = function () {
    if ($(window).width() < 799) {
        temp = `
                        <div class="container">
                            <div class="row">
                                <div class="col" id='heading'><i class="bi bi-car-front-fill" id="car"></i> Share Ride</div>
                                <div class='col'><i class="bi bi-list" id='list'></i></div>  
                            </div>
                        </div>
                    `
        document.getElementsByClassName("Navbar")[0].innerHTML = temp

        temp = `        
                <div class="col"><a href="./index.html">Home</a></div>
                <div class="col-12" id="search_ride"><a href="./Search_ride.html">Search Ride</a></div>
                <div class="col-12" id="Publish_ride"><a href="./Publish_ride.html">Publish Ride</a></div>
                <div class="col-12"><a href="./Profile.html">Profile</a></div>
                <div class="col-12"><a href="./Contact_us.html">Contact Us</a></div>
            `
        document.getElementsByClassName("tog_bar")[0].innerHTML = temp

        $(".tog_bar").hide()

        $("#list").click(function () {
            if(ishide){
                $(".Navbar").css({borderRadius: "40px"})
                ishide = false
                
            }
            else{                
                ishide = true
                $(".Navbar").css({borderBottomLeftRadius: "0",borderBottomRightRadius: "0"})
            }

            $(".Available_ride").hide()

            $(".tog_bar").slideToggle()
        })


    }
    else {
        temp = `
                        <div class="container">
                            <div class="row">
                                <div class="col"><a href="./index.html">Home</a></div>
                                <div class="col" id="search_ride"><a href="./Search_ride.html">Search Ride</a></div>
                                <div class="col" id="Publish_ride"><a href="./Publish_ride.html">Publish Ride</a></div>
                                <div class="col"><a href="./Profile.html">Profile</a></div>
                                <div class="col"><a href="./Contact_us.html">Contact Us</a></div>
                            </div>
                        </div>
                    `
        document.getElementsByClassName("Navbar")[0].innerHTML = temp
    }
}

let Footer_var=""
let Footer = function () {
    if($(window).width() > 600 && $(window).width() < 799){
        Footer_var = `
            <div class="container">
                <div class="row">
                    <div class="col-4">
                        <div class="support">
                            <div>Support</div>
                            <div>Contact Us</div>
                            <div>Help center</div>
                            <div>Safety</div>
                            <div>Terms & conditions</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="services">
                            <div>Services</div>
                            <div>Car Sharing</div>
                            <div>Bike Sharing</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="connect">
                            <div>Connect</div>
                            <div class="connect_logos">
                                <div><a href=""><i class="bi bi-facebook"></i></a></div>
                                <div><a href=""><i class="bi bi-twitter"></i></a></div>
                                <div><a href=""><i class="bi bi-instagram"></i></a></div>
                                <div><a href=""><i class="bi bi-linkedin"></i></a></div>
                            </div>
                            <div><i class="bi bi-telephone"></i> +91 9726597450</div>
                            <div><i class="bi bi-envelope"></i> ShareRide179@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col"><hr></div>
                </div>

                <div class="row">
                    <div class="col-6">&copy; 2025 Share Ride. All rights reserved</div>
                </div>
            </div>
        `
    }

    else if($(window).width() < 600){
        Footer_var = `
                <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="connect">
                            <div>Connect</div>
                            <div class="connect_logos">
                                <div><a href=""><i class="bi bi-facebook"></i></a></div>
                                <div><a href=""><i class="bi bi-twitter"></i></a></div>
                                <div><a href=""><i class="bi bi-instagram"></i></a></div>
                                <div><a href=""><i class="bi bi-linkedin"></i></a></div>
                            </div>
                            <div><i class="bi bi-telephone"></i> +91 9726597450</div>
                            <div><i class="bi bi-envelope"></i> ShareRide179@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <hr>
                    </div>
                </div>

                <div class="row">
                    <div class="col">&copy; 2025 Share Ride. All rights reserved</div>
                </div>
            </div>
        `
    }

    else{
        Footer_var = `
            <div class="container">
                <div class="row gx-5">
                    <div class="col-3">
                        <div class="links">
                            <div>Quick links</div>
                            <div><a href="./Home.html">Home</a></div>
                            <div><a href="./Search_ride.html">Search</a></div>
                            <div><a href="./Publish_ride.html">Publish</a></div>
                            <div><a href="./Profile.html">Profile</a></div>
                            <div><a href="./Contact_us.html">Contact us</a></div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="services">
                            <div>Services</div>
                            <div>Car Sharing</div>
                            <div>Bike Sharing</div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="support">
                            <div>Support</div>
                            <div>Contact Us</div>
                            <div>Help center</div>
                            <div>Safety</div>
                            <div>Terms & conditions</div>
                        </div>
                    </div>

                    <div class="col-3">
                        <div class="connect">
                            <div>Connect</div>
                            <div class="connect_logos">
                                <div><a href=""><i class="bi bi-facebook"></i></a></div>
                                <div><a href=""><i class="bi bi-twitter"></i></a></div>
                                <div><a href=""><i class="bi bi-instagram"></i></a></div>
                                <div><a href=""><i class="bi bi-linkedin"></i></a></div>
                            </div>
                            <div><i class="bi bi-telephone"></i> +91 9726597450</div>
                            <div><i class="bi bi-envelope"></i> ShareRide179@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col"><hr></div>
                </div>

                <div class="row">
                    <div class="col">&copy; 2025 Share Ride. All rights reserved</div>
                </div>
            </div>
        `
    }

    document.getElementsByClassName("footer")[0].innerHTML = Footer_var;
}

$(".Available_ride").hide()
function Available_ride() {
    $(".Available_ride").show()
    
}

$(".close").click(function () {
    $(".Available_ride").hide()
})

Resize();

$(document).ready(function () {
    $(window).resize(function () {
        Resize()
        Footer()
    })
})


Footer()