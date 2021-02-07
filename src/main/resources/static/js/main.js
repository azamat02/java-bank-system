$(document).ready(function (){
    // For profile page
    $("#change_pass_form").hide()
    $("#error_message").hide()
    $("#change_pass_button").click(()=>{
        $("#change_pass_form").slideToggle(1000)
        $("#change_pass_button").slideUp();
    })
    $("#change_pass").keyup(check_passwords)
    $("#change_pass2").keyup(check_passwords)
    function check_passwords(){
        let pass1 = $("#change_pass").val()
        let pass2 = $("#change_pass2").val()
        let notEqualCheck = false
        let lengthCheck = false
        let error_message = ""

        if (pass1 != pass2){
            error_message = "Entered passwords different!"
            notEqualCheck = true
        } else {
            notEqualCheck = false
        }
        if (pass1.length <3 || pass1.length>30){
            error_message = "Password should be between 3 and 30 charachters!"
            lengthCheck = true
        } else {
            lengthCheck = false
        }
        if (lengthCheck == false && notEqualCheck == false){
            $("#submit_button").prop('disabled', false);
            $("#submit_button").addClass("button-primary")
            $("#submit_button").removeClass("button")
            $("#error_message").hide()
        } else {
            $("#submit_button").prop('disabled', true);
            $("#submit_button").removeClass("button-primary")
            $("#submit_button").addClass("button")
            $("#error_message").show()
            $("#error_message").text(error_message)
        }
    }

    // For online payment page
    $(".mobile_service").hide()
    $(".house_service").hide()
    $(".charity_service").hide()

    $("#back_button").hide()

    $("#mobile_service").click(()=>{
        $(".org").slideUp()
        $("#back_button").show()
        $(".mobile_service").slideDown()
    })

    $("#house_service").click(()=>{
        $(".org").slideUp()
        $("#back_button").show()
        $(".house_service").slideDown()
    })

    $("#charity_service").click(()=>{
        $(".org").slideUp()
        $("#back_button").show()
        $(".charity_service").slideDown()
    })

    $("#back_button").click(()=>{
        $(".mobile_service").hide()
        $(".house_service").hide()
        $(".charity_service").hide()

        $(".org").slideDown()
        $("#back_button").hide()
    })

    // For transfer page
    $("#for-another-client-bank").hide()
    $("#for-this-client-bank").hide()
    $("#for-between-own-cards").hide()
    $("#for-convertation").hide()
    $("#back-button").hide()

    $("#to-another-client-bank").click(()=>{
        $("#back-button").show()
        $(".operations").slideUp()
        $("#for-another-client-bank").slideDown()
    })

    $("#to-this-client-bank").click(()=>{
        $("#back-button").show()
        $(".operations").slideUp()
        $("#for-this-client-bank").slideDown()
    })

    $("#to-between-own-cards").click(()=>{
        $("#back-button").show()
        $(".operations").slideUp()
        $("#for-between-own-cards").slideDown()
    })

    $("#convertation").click(()=>{
        $("#back-button").show()
        $(".operations").slideUp()
        $("#for-convertation").slideDown()
    })

    $("#back-button").click(()=>{
        $("#for-another-client-bank").hide()
        $("#for-this-client-bank").hide()
        $("#for-between-own-cards").hide()
        $("#for-convertation").hide()
        $(".operations").slideDown()
        $("#back-button").hide()
    })

})