/*Created by webDevAnkush on 20/5/16.*/

/*File upload with jquery working example.Traditional way of upload file.
 Upload file with choose file input element and upload it with upload button.
 No facility of drag and drop.*/

$(document).on('click', '#button1', function () {

    var file = $('#file1').prop('files')[0];
    /*this is more important to use .prop with file element else it will more difficult. */

        var formData = new FormData();
        formData.append('file', file);
        var statusCallback = function (response) {

            alert(response.message);
        }

        $.ajax({
            url: "/uploadFile",
            /*/uploadFile is api service you can your api service. */
            data: formData,
            processData: false,
            contentType: false,
            method: 'POST',
            success: statusCallback
        });


});