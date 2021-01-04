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

  function copy() {
    var t = document.getElementById('fileURL')
    t.innerHTML = document.getElementById('fileURL').value
    t.select()
    try {
      var successful = document.execCommand('copy')
      var msg = successful ? 'successfully' : 'unsuccessfully';

      document.getElementById("toast1").style.display = 'block';
      document.getElementById("toast1").innerHTML = 'Text coppied ' + msg  
    } catch (err) {
      console.log('Unable to copy text')
    }
    t.innerHTML = ''
  }