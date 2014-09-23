/**
 * Created by skivan on 03/07/14.
 */
$(function() {
    $("#create-button").click(function(){

        $("#reg-form").hide();
        $("#survey-form").show(500);
    });

    $("#send-button").click(function(){
        //var formData = JSON.stringify($("#leed-form").serializeArray());
        var fd = new FormData(document.getElementById("leed-form"));
        fd.append("CustomField", "This is some extra data");
        $.ajax({
            url: "http://valo.nexetic.ru/upload.php",
            type: "POST",
            data: fd,
            processData: false,  // tell jQuery not to process the data
            contentType: false   // tell jQuery not to set contentType
        });
        console.log(fd);
        $("#survey-form").hide();
        $("#reg-form").show(500);

    });
});
