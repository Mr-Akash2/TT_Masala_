function datas()
{
    if(window.XMLHttpRequest)
    {
        a = new XMLHttpRequest();    
    }
    else
    {
        a = new ActiveXObject("Microsoft.XMLHTTP");
    }
    a.onreadystatechange = function(){
        if(a.readyState==4 && a.status==200){
            alert(a.responseText);
        }
    }
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var Message = document.getElementById("Message").value;
    var url="DB.php";
    var val = "name="+name+"&number="+number+"&email="+email+"&country="+country+"&Message="+Message;
    a.open("POST",url,true);
    a.setRequestHeader("content-type","application/x-www-form-urlencoded");
    a.setRequestHeader("content-length",val.length);
    a.setRequestHeader("connecion","close");
    a.send(val);
}