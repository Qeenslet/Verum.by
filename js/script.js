
var serverConnector =
{
    send: function ()
    {
        var check = document.getElementById('contactForm');
        if (check.checkValidity())
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
        else
        {
            for (var i = 0; i < check.elements.length; i++)
            {
                var el = check[i];
                if (el.hasAttribute('name'))
                {
                    if (!el.checkValidity())
                    {
                        el.classList.add('is-invalid');
                    }
                }
            }
        }

    }
}

