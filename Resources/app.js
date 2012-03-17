// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Transitions',
    backgroundColor:'#fff',
    url: "transitions.js"
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Transitions',
    window:win1
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'ScrollView',
    backgroundColor:'#fff',
    url: "scroll_views_scrollable.js"
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});






//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
