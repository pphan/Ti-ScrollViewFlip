var win = Ti.UI.currentWindow;

var meaning_view1 = Ti.UI.createView({
	backgroundColor:'red'
});
var l1 = Ti.UI.createLabel({
	text:'View 1',
	color:'#fff',
	width:'auto',
	height:'auto'
});

var b = Ti.UI.createButton({title:'Close Me',width:200,height:40});
b.addEventListener('click',function()
{
	win.animate({view:meaning_view,transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
	//go back to normal view 
});
	
meaning_view1.add(b);

meaning_view1.add(l1);

var meaning_view2 = Ti.UI.createView({
	backgroundColor:'blue'
});
var meaning_l2 = Ti.UI.createLabel({
	text:'Click Me (View 2 - see log)',
	color:'#fff',
	width:'auto',
	height:'auto'
});
meaning_view2.add(meaning_l2);

var meaning_view3 = Ti.UI.createView({
	backgroundColor:'green'
});
var meaning_l3 = Ti.UI.createLabel({
	text:'View 3',
	color:'#fff',
	width:'auto',
	height:'auto'
});
meaning_view3.add(meaning_l3);

var meaning_view4 = Ti.UI.createView({
	backgroundColor:'black'
});
var meaning_l4 = Ti.UI.createLabel({
	text:'View 4',
	color:'#fff',
	width:'auto',
	height:'auto'
});
meaning_view4.add(meaning_l4);


var meaning_scrollView = Titanium.UI.createScrollableView({
	views:[meaning_view1,meaning_view2,meaning_view3,meaning_view4],
	showPagingControl:true,
	pagingControlHeight:30,
	maxZoomScale:2.0,
	currentPage:1,
});

win.add(meaning_scrollView);

var i=1;
var meaning_activeView = meaning_view1;

meaning_scrollView.addEventListener('scroll', function(e)
{
    meaning_activeView = e.view  // the object handle to the view that is about to become visible
	i = e.currentPage;
	Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
});
meaning_scrollView.addEventListener('click', function(e)
{
	Ti.API.info('ScrollView received click event, source = ' + e.source);
});
meaning_scrollView.addEventListener('touchend', function(e)
{
	Ti.API.info('ScrollView received touchend event, source = ' + e.source);
});




// this is our second view for the view transition example
// we add it first, so the next one will be initially visible (last on the stack)
// now no need this view2 because animate to scrollview
var meaning_view2 = Ti.UI.createView({
	backgroundColor:'#13386c'
});
win.add(meaning_view2);

// this is our main container view
// NOTE: when you want to transition between full-page views, you must
// transition between two full views.   
meaning_view = Ti.UI.createView({
	backgroundColor:'#fff'
});
win.add(meaning_view);






//
// VIEW WITHIN THIS WINDOW
// In this example, we will transition between the current view and a new full screen view
//
var b2 = Ti.UI.createButton({
	title:'Full View',
	width:200,
	height:40,
	top:60
});

meaning_view.add(b2);

b2.addEventListener('click', function()
{
	// create close button for our window
	var b = Ti.UI.createButton({title:'Close Me',width:200,height:40});
	b.addEventListener('click',function()
	{
		win.animate({view:view,transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
	});
	meaning_view2.add(b);
	
	// transition to scrollView
	win.animate({view:meaning_scrollView, transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN});
});

