function OnStart() {
    CheckInternet()
}

function CheckInternet() {
    if(!app.IsConnected()) {
        ShowOffline()
    } else {
        ShowMain()
    }
}
    
// Asosiy WebView sahifa
function ShowMain(){
    
    layMain = app.CreateLayout("Absolute","FillXY")

    web1 = app.CreateWebView(1,1)
    web1.LoadUrl("index.html")
    layMain.AddChild(web1)

    btn = app.CreateButton("[fa-paper-plane]",0.15,0.08,"FontAwesome")
    btn.SetPosition(0.8,0.9)
    btn.SetTextSize(15)
    btn.SetOnTouch(btn_OnTouch)
    layMain.AddChild(btn)

    laySlide = app.CreateLayout("Absolute","FillXY")
    laySlide.SetVisibility("Hide")

    web2 = app.CreateWebView(1,1)
    web2.LoadUrl("send.html")
    laySlide.AddChild(web2)

    btnBack = app.CreateButton("[fa-undo]",0.15,0.08,"FontAwesome")
    btnBack.SetPosition(0.8,0.9)
    btnBack.SetTextSize(15)
    btnBack.SetOnTouch(btnBack_OnTouch)
    laySlide.AddChild(btnBack)

    app.AddLayout(layMain)
    app.AddLayout(laySlide)
}

// Internet yo‘q sahifa
function ShowOffline() {
    
    layOff = app.CreateLayout("Linear","VCenter,FillXY")
    layOff.SetBackColor("#ffffff")
    
    icon = app.CreateText("\ue648",0.4,-1)
    icon.SetFontFile("Img/MaterialIcons-Regular.ttf")
    icon.SetTextSize(70)
    icon.SetTextColor("#dd4444")
    layOff.AddChild(icon)

    txt = app.CreateText("Internet yo‘q",0.8,-1,"Center")
    txt.SetTextSize(22)
    txt.SetTextColor("#444477")
    layOff.AddChild(txt)
    
    btnRetry = app.CreateText("[fa-undo]",0.15,0.08,"FontAwesome")
    btnRetry.SetPosition(0.43,0.46)
    btnRetry.SetTextSize(50)
    btnRetry.SetTextColor("#444477")
    btnRetry.SetOnTouch(CheckInternet);
    layOff.AddChild(btnRetry)
    
    app.AddLayout(layOff)
}

// index → send
function btn_OnTouch() {
    laySlide.SetVisibility("Show")
    laySlide.Animate("ZoominEnter")
}

// send → index
function btnBack_OnTouch() {
    laySlide.Animate("ZoomOutExit")
    laySlide.Animate("SlideToRight")
    setTimeout(function(){
        laySlide.SetVisibility("Hide")
    },300)
}