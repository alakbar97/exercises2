$(document).ready(function(){
    var cinema = $(".cinema")
    var sira = $(".sira")
    var price = $(".price")
    var sum =0;
        $(".show").click(function(){
            price.val(0)
            cinema.empty()
            sira.empty()
            var rownum = Number($(".rownum").val())
         
          
          
            
            for(var i =rownum;i>0;i--){
               
                var row = $("<div class='row d-flex justify-content-center'></div>")
               
                var li = $("<li>Sira "+i+"</li>")
                sira.prepend(li)
                for(var j=1; j<=12;j++){
                    var seat = $("<div data-seat="+j+" data-row ="+(rownum-i+1)+" class='seat'>"+j+"</div>")
                    row.append(seat);
                }
                cinema.append(row)
                
            }
            $(".seat").on("click",function(){
                if($(this).hasClass("bg-danger")){
                    uncheckSeat()
                    $(this).removeClass("bg-danger")
                }
                else{
                    checkSeat()
                    $(this).addClass("bg-danger")
                }
            })


            function  uncheckSeat(){
                sum-= Number( $("#money").val())
                price.val(sum)
            }
            function checkSeat(){
                sum+= Number( $("#money").val())
                price.val(sum)
            }

            $(".reserve").click(function(){
                price.val(0)

            jQuery.each( $(".bg-danger"), function( index, value){
                $(".bg-danger").removeClass("bg-danger").addClass("bg-dark")
                $(".bg-dark").off()
                var siranom =  $(value).data("row")
                var yernom = $(value).data("seat")
                alert("Sira "+siranom+"  , yer "+yernom+"  alindi . Qiymet : "+sum+" AZN")
            })
                sum=0;
            })

        })
        
      
   

})