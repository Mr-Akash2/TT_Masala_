$(document).ready(function()
    {
        $("#submit").click(function()
        {
            var name = $("#name").val();
            var email = $("#number").val();
            var number = $("#email").val();
            var country = $("#country").val();
            var Message = $("#Message").val();
            if(name==''||number==''||email==''||country==''||Message=='')
            {
                alert('Please fill the Form');
                return false;
            }
            $.ajax({
                type: "POST",
                url: "DB.php",
                data:
                {
                    name: name,
                    number: number,
                    email: email,
                    country: country,
                    Message: Message
                },
                cache: false,
                success: function(data){
                    alert(data);
                },
                error: function(xhr, status, error){
                    console.error(xhr);
                }
            });
            
        });
    });