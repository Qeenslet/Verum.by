
var serverConnector =
{
    send: function ()
    {
        $.ajax({
            url:"mailer.php",
            data: $('#contactForm').serialize(),
            dataType: "json",
            method: 'post'
        }).done(function(data) {
            if (data.ok)
            {
                $("#contactForm")[0].reset();
                $("#success").modal("show");
            }
            else
            {
                alert('К сожалению, у нас проблемы с почтовым сервером, сообщение не было отправлено');
            }

        }).fail(function() {
            alert('Не получилось :(');
        });
    }
}

