
    $(function(){
        // Q16. Set Click method
        var button1="<button id='button1'>Click Me STEP 16</button><br/><br/>";
        $('body').append(button1);
        $('#button1').click(function(){
            window.alert("Button has been clicked!");
        });

        // Q17. Set Bind method
        var button2="<button id='button2'>Click Me STEP 17</button><br/><br/>";
        $('body').append(button2);
        $('#button2').bind('click',function(){
            window.alert("Button has been clicked!");
        });

        // Q18. Set On method
        var button3="<button id='button3'>Click Me STEP 18</button><br/><br/>";
        $('body').append(button3);
        $('#button3').on('click',function(){
            window.alert("Button has been clicked!");
        });

        // Q19. Literal Notation Method
        var button4="<button id='button4'>CLICK ME STEP 19a</button>"
        var button5="<button id='button5'>CLICK ME STEP 19b</button><br/><br/>";
        $('body').append(button4,button5);
        $('#button4,#button5').on({
            click: function(){
                window.alert("Button has been clicked!");
            }
        });

        /*******************************************************/
        // Q20. Displaying click,mouseenter and mouseleave events on div tag,added extra border property to show the boundry and test event
        var div1="<div id='div1'>This is first div tag.</div><br/>";
        $('body').append(div1);
        $('#div1').width('400px').height('400px').css('border', '1px solid black')
                .click(function(){
                
                    window.alert("Mouse has clicked the div!");
            
                    $('#div1').mouseenter(function(){
                        window.alert("Mouse has entered the div!");
                    });
                    
                    $('#div1').mouseenter(function(){
                        window.alert("Mouse has left the div!");
                    });
                });
        
        /*******************************************************/
        // Q21. Displaying mouseenter,mouseleave,click event in span tag
        var div2="<div id='div2'>This is Second div tag with span shows the message at bottom</div>";
        var messageSpan="<span id ='span1'></span><br/><br/>";
        $('body').append(div2);
        $('#div2').width('400px').height('400px').css('border', '1px solid black')
        $('body').append(messageSpan);
        $('#div2').on({
                mouseenter: function(){
                    $('#span1').text("Mouse has entered the div!");
                },
                mouseleave: function(){
                    $('#span1').text("Mouse has left the div!");
                },
                click: function(){
                    $('#span1').text("Mouse has clicked the div!");
                }
        });
        
        /*******************************************************/
        //  Q22. Prevent link from redirecting to that web site
        var linkToBeClicked="<a href = 'modulemedia.com' id='clicked'>Module Media</a><br/><br/>"
        $('body').append(linkToBeClicked);
        $('a').click(function(event){
                event.preventDefault();
                $(this).css('color','red');
                window.alert(event.target.nodeName + " triggered the event.")    
            });

        /*******************************************************/
        // Q23. Displaying width and height of browser window
        var div3="<div id='div3'></div><br/>";
        $('body').append(div3);
        $('#div3').css('width', '400px').css('height', '100px').css('border', '1px solid black');
        $(window).resize(function(){
            $('#div3').text('Width :'+ $(window).width() + ' , Height : ' + $(window).height());
        });

        /*******************************************************/
        // Q24. Focusing input text field
        var textField="<input type='text' id='input1'><br/><br/>";
        $('body').append(textField);
        $('#input1').on({
            focus: function(){
                    $('#input1').css('background-color','lightgray');
            },
            focusout: function(){
                    $('#input1').css('background-color','white');
            }
        });
        
        /*******************************************************/
        // Q25. Styling 2 input fields in form tag.
        // Set the focus on Name TextBox
      // PART 25
        var form = "<form id='formid'></form>";
        var nameinput = "<input id='nameinput' name='nameinput' placeholder='Enter Name'/><br/>";
        var emailinput = "<input id='emailinput' name='emailinput' placeholder='Enter Email'/><br/>";
        var submit = "<input  type='submit'></button>";
        var div4 = "<div id='div4'></div>";
        $('body').append(div4);
        $('#div4').append(form);
        $('#div4 form').append(nameinput);
        $('#div4 form').append(emailinput);
        $('#div4 form').append(submit);

        $('#formid').submit(function (event) {
            var isValid = true;
            var name = $('#nameinput').val();
            if (name == "") {
                window.alert("Name required");
                $('#nameinput').css('border', '1px solid red');
                isValid = false;
                } 
            else {
                $('#nameinput').next().text('');
             }
             $('nameinput').val(name);
            var email = $('#emailinput').val();
            if (email == '') {
                window.alert("Email required");
                $('#emailinput').css('border', '1px solid red');
                isValid = false;
                } else {
                $('#emailinput').next().text('');
            }
            $('emailinput').val(email);

            if (isValid==false) {
            event.preventDefault();
            }
            else{
                $('#nameinput').css('border', '1px solid green');
                $('#emailinput').css('border', '1px solid green');
                }

        });

    
    });
