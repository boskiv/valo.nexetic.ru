/**
 * Created by skivan on 03/07/14.
 */
$(function() {
    $("#create-button").click(function(){

        $("#reg-form").hide();
        $("#survey-form").show(500);
    });

    $("[name='my-checkbox']").bootstrapSwitch();

    $("#send-button").click(function(){

        $("#survey-form").hide();
        $("#reg-form").show(500);

    });
});
