
$(document).ready(function() {


    var seq = 1;
    var nxt = seq + 1;
    var prv = seq - 1;
    var tot = $('.Qcon').length;
    var res = "";
    var pmlink = "";
    var data = "";
    var cdata = getCookie("data");
	
					 
function qnxt(arr){
        arr = arr.replace(/&nbsp;/g, '');
        arr = arr.replace(/ /g, '');
	 var ans = "q" + seq;
        res = res + "&" + ans + "=" + arr;
        setCookie(ans, arr, 30);
        $('#' + seq).animate({
            opacity: 0,
            left: "+=20%",
        }, 400, function() {
  $("body").css("pointer-events", "auto");
            $(this).hide();
            $(this).css("left", "");
            $(this).css("opacity", "");
            $('.Qproc #av').animate({
                width: seq / tot * 100 + "%"
            });
     if (seq == tot) {
            $(".Qloader").show();
            
            
            
            
            
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        data = this.responseText;
                        setCookie("data", data, 30);
                        reschk();

            


                    }
                };
                xhttp.open("GET", "https://foonsci.000webhostapp.com/s1s/result?qn=" + tot + res, true);
                xhttp.send();
                             var xhttp2 = new XMLHttpRequest();   
                            xhttp2.open("GET", "https://foonsci.000webhostapp.com/s1s/data?qn=" + tot + res , true);
                            xhttp2.send();



            } else {
                $('#' + nxt).show();
                seq += 1;
                nxt += 1;
                
                $("span[contenteditable]").focus();
            }
        });

}
				 
				 
				 
				 
    function reschk() {
        
        $(".Qloader").show();
        seq = 1;
        nxt = seq + 1;
        prv = seq - 1;
        res = "";
        var wr = data.split("A90B")[0];
        var wrp = [];
        for (i = 0; i <= wr.split("2BX2").length; i++) {
            wrp.push(wr.split("2BX2")[i]);
        };

        for (i = 1; i <= tot; i++) {
            var arr = "q" + i;
            var ans = getCookie(arr);
            var arrt = $("#"+i+" .Qsels").html();  
            if(arrt === null || arrt === undefined || arrt === ""){
            $("#"+i +" span[contenteditable]").html(ans);  
            $("#"+i +" span[contenteditable]").attr("contenteditable","false");  
            var sels = "#" + i + " .Qinp";
        }
        else{
            
            var sels = "#" + i + " .Qsels[value='" + ans + "']"; 
        };
           
        
            $(sels).attr('active', true);
            if ($.inArray(arr, wrp) != -1) {
                $(sels).append("<img src='data/wrng.png'>");
            } else {
                $(sels).append("<img src='data/corr.png'>");
            }
            
        };

        var mk = data.split("A90B")[1];
        var rt = data.split("A90B")[2].toUpperCase();
        var rtc = data.split("A90B")[3];
        var cdx = data.split("A90B")[4];
        var pmn = data.split("A90B")[5];
        var pmhd = "http://sci.herobo.com/s1s/chem/user/?g=";
        pmlink = pmhd + cdx  +"%26n="+ pmn;
        $('.Qlink input').val(pmhd + cdx +"&n="+ pmn);
        $('#chck').html(mk);
        $('.Qres .Qflex h1').html(rt);
        $('.Qres .Qflex h3').html(rtc);
        $('.Qproc #av').animate({
            width: "100%"
        });
        $('.Qintro').hide();
        $('.Qlists').hide();
        $(".Qloader").hide();
        $('.Qres').show();
    }
	
	
    if (cdata !== "") {
        data = cdata;
        reschk();

    }

 
 
 
$(window).on('beforeunload', function () {
if(data === ""){
        return false;
}
});




    $('.Qintro button').click(function() {
are_cookies_enabled();
        $('.Qintro .Qflex').hide();
        $('.Qintro .Qpre').show();
    });

    $('.Qinpi').click(function() { 
        var arr = $(this).parent().children(".Qinp").find("span[contenteditable]").html();  
        if(arr === "" || arr === "-" || arr ===  undefined){
            alert("This is a required field.");
            $("span[contenteditable]").focus();
            $("body").css("pointer-events", "auto");
            return false;
        }else{
        res = res + "&q0=" + arr;
        setCookie("q0", arr, 30);
        $('.Qintro').hide();
        $('.Qlists').show();
        $('#1').show();
		$("span[contenteditable]").focus();
        }
});


$(".Qinp span[contenteditable]").keypress(function(e){ return e.which != 13 && e.which != 32; });


$(".Qinp span[contenteditable]").on('copy paste cut', function (e) {
e.preventDefault();
});

$(".Qinp span[contenteditable]").on('keydown', function (e) {
 
    if ($(this).text() === "-") {
         $(this).html("");
     }
});

$(".Qinp span[contenteditable][maxlength]").on('keydown', function (e) {
    var maxl = parseInt($(this).attr('maxlength'));
    if ($(this).text().length === maxl && e.keyCode !== 8) {
         e.preventDefault();
     }
});


    $('.Qinp').click(function() {
                 $("span[contenteditable]").focus(); 
});
				 
				 
				 
    $('.Qinpc').click(function() { 
        var arr = $(this).parent().children(".Qinp").find("span[contenteditable]").html();  
        if(arr === "" || arr === "-" || arr ===  undefined){
            alert("This is a required field.");
            $("span[contenteditable]").focus();
            $("body").css("pointer-events", "auto");
            return false;
        }
		qnxt(arr);
});




    $('.Qsels').click(function() {
      $("body").css("pointer-events", "none");
        if (data !== "") {
            $("body").css("pointer-events", "auto");
         return false;  
        }       
		var arr = $(this).attr("value");    
       qnxt(arr);
    });





    $('.Qsharer #fb').click(function() {
        
            window.location = "https://www.facebook.com/sharer/sharer.php?app_id=731763497011360&u=" + pmlink + "&redirect_uri=http%3A%2F%2Fsci.herobo.com/s1s/chem";
        
    });


    $('.Qsharer #cp').click(function() {

        $('.Qlink').show();
        $('.Qlink input').select();
        document.execCommand("copy");

    });
    $('.Qsharer #rt').click(function() {
  var r = confirm("Try again?");
  if (r == true) {
document.cookie = "data=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/s1s/chem;";
document.cookie = "data=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
 location.reload();
  } else {
    return false;
  }
    });

    $('.Qres p a').click(function() {
        $('.Qintro').hide();
        $('.Qres').hide();
        $('.Qlists').show();
        $('.Qrev').css('display', 'flex');
        $('.Qcon').css('animation', 'none');
        $('#1').show();
    });

    $('.Qrev #prv').click(function() {

        if (seq > 1) {
            $('#' + seq).hide();
            seq -= 1;
            prv = seq - 1;
            $('#' + seq).show();
        }

    });




    $('.Qrev #nxt').click(function() {

        if (seq < tot) {

            $('#' + seq).hide();
            seq += 1;
            nxt = seq + 1;
            $('#' + seq).show();
        } else {
            $('#' + seq).hide();
            $('.Qintro').hide();
            $('.Qlists').hide();
            $('.Qrev').hide();
            seq = 1;
            $('.Qres').show();
        }

    });




});
