/**
 * Created by skivan on 03/07/14.
 */
$(function() {
    $("#create-button").click(function(){
        console.log("Hide and show");
        $("#reg-form").hide();
        $("#survey-form").show(500);
    });

    $("[name='my-checkbox']").bootstrapSwitch();
});
