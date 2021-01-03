$(document).on('change', '#fileInput', function () {
    
    var progressBar = $('.upload-container .progressBar'), bar = $('.progressBar .bar'), percent = $('.progressBar .percent');
    
    $('#file_upload_form').ajaxForm({
        beforeSend: function() {
            progressBar.fadeIn();
            var percentVal = '0%';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        uploadProgress: function(event, position, total, percentComplete) {
            var percentVal = percentComplete + '%';
            bar.width(percentVal)
            percent.html(percentVal);
        },
        success: function(response, statusText, xhr, $form) {
            console.log(response);  
            if(response.status == true){

                $("#fileURL").val(response.file);
                $(".sharing-container").css("display", "block");
                console.log("hello");
            } else {
                //toastr.error(response.messege, "Error", {timeOut: 5e3,showMethod:"slideDown",hideMethod:"slideUp"});
            }
        },
        complete: function(xhr) {
            progressBar.fadeOut();
        }
    }).submit(); 
  }); 



  const $form = $('#emailForm');

  $form.on('submit', submitHandler)
  
  function submitHandler (e) {
    e.preventDefault()
  
    $.ajax({
      url: '/sendmail',
      type:'POST',
      data: $form.serialize()
    }).done(response => {
        console.log(response)
    })
  }

 /*  $(document).ready(function () {
        $('#emailForm').submit(function (event) {
            alert("hello");
                event.preventDefault();
               //collect the form data using Id Selector what ever data you need to send to server
                let fromEmail=$('#fromEmail').val();
                let toEmail= $('#toEmail').val()

                $.ajax({
                    url: '/mailsend',
                    data: JSON.stringify({"fromEmail": fromEmail, "toEmail": toEmail }),
                    processData: false,
                    type: 'POST',
                    contentType: 'application/json',
                    success: function (data) {
                        alert(data);
                        console.log(data);
                    }
                });
            });
    }) */