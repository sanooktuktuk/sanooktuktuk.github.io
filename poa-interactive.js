(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"poa_interactive_atlas_1", frames: [[1751,141,44,46],[1976,0,45,45],[1496,0,478,58],[1496,308,83,52],[1496,60,95,246],[1593,141,156,79],[1909,214,135,79],[1593,295,176,45],[1751,214,156,79],[0,0,1494,664],[0,666,1489,22],[1797,141,52,27],[1797,170,52,27],[1976,47,52,27],[1967,76,52,27],[1967,105,52,27],[1967,134,52,27],[1967,163,52,27],[1593,222,52,27],[1593,251,52,27],[1647,222,52,27],[1647,251,52,27],[1771,295,52,27],[1825,295,52,27],[1879,295,52,27],[1933,295,52,27],[1987,295,52,27],[1771,324,52,27],[1581,342,52,27],[1496,362,52,27],[1635,342,52,27],[1689,342,52,27],[1825,324,52,27],[1879,324,52,27],[1933,324,52,27],[1987,324,52,27],[1743,353,52,27],[1550,371,52,27],[1496,391,52,27],[1604,371,52,27],[1658,371,52,27],[1797,353,52,27],[1851,353,52,27],[1905,353,52,27],[1959,353,52,27],[1712,382,52,27],[1550,400,52,27],[1852,60,113,152],[1593,60,257,79],[1967,192,21,20]]},
		{name:"poa_interactive_atlas_2", frames: [[0,0,1650,1500]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_50 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(img.CachedBmp_45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2174,314);


(lib.CachedBmp_44 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(img.CachedBmp_39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2174,668);


(lib.CachedBmp_38 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.backgroundtemplate = function() {
	this.initialize(ss["poa_interactive_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.header = function() {
	this.initialize(img.header);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2202,140);


(lib.pinpoint = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.PoP = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.tip = function() {
	this.initialize(ss["poa_interactive_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_50();
	this.instance.setTransform(4,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_49();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,23);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.tip();
	this.instance.setTransform(-10.5,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10,21,20);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhshTIDZAAIAACnIjZAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-9.3,23.8,18.700000000000003);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzPAlIAAhKMAmfAAAIAABKg");
	this.shape.setTransform(120.675,3.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-2.5,0,246.4,7.5), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.txt = new cjs.Text("12/02", "15px 'Roboto'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 66;
	this.txt.parent = this;
	this.txt.setTransform(-1.15,-8.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005088").s().p("AmaBvIAAjdIM1AAIAADdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-41.1,-11.1,82.30000000000001,24.2), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.backgroundtemplate();
	this.instance.setTransform(-550,-500,0.6667,0.6667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-550,-500,1100,1000);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BAB103").s().p("AzZDZIAAigMAmzAAAIAACggAzZgQIAAjIMAmzAAAIAADIg");
	this.shape.setTransform(124.175,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-21.7,248.4,43.4), null);


(lib.SliderMarkers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.SliderMarker = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.txt = new cjs.Text("999", "14px 'Arial'", "#5E5D5B");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 18;
	this.txt.lineWidth = 76;
	this.txt.parent = this;
	this.txt.setTransform(0,19.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8F9B9F").ss(0.1,1,1).p("AAAA8IAAh3");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SliderMarker, new cjs.Rectangle(-40,-7,80,44.1), null);


(lib.SlideHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99CC99").s().p("EgnDAB4IAAjvMBOHAAAIAADvg");
	this.shape.setTransform(250,0);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12,500,24);


(lib.SlideBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006600").ss(1,1,1).p("EgnDAAAMBOHAAA");
	this.shape.setTransform(250,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SlideBar, new cjs.Rectangle(-1,-1,502,2), null);


(lib.PoPDragger = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text_fields
	this.t2 = new cjs.Text("", "normal 400 16px 'Roboto'", "#FFFFFF");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 23;
	this.t2.lineWidth = 235;
	this.t2.parent = this;
	this.t2.setTransform(125.95,-56);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.t2);
	}

	this.t1 = new cjs.Text("", "normal 400 16px 'Roboto'", "#FFFFFF");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 23;
	this.t1.lineWidth = 235;
	this.t1.parent = this;
	this.t1.setTransform(-124.5,-56);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.t1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2}]}).wait(4));

	// text_background
	this.instance = new lib.CachedBmp_48();
	this.instance.setTransform(7.3,-64.25,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_48();
	this.instance_1.setTransform(-243.95,-64.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(4));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,2,1).p("EAm1AAAMhNpAAA");
	this.shape.setTransform(0,-16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF0000").ss(3,2,1).p("EAm1gbwIAAA3MAAAA2lAAFbqMAAAg2jIAAg5Egm0AbzMAAAg2sIAAgx");
	this.shape_1.setTransform(0,-194.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("EAm4ABQIhqAAIBkifIBkCfgEAm4ABQIAAg3gAAIBQIhpAAIBjifIBkCfgAAIBQIAAg5gEgmxABQIhkAAIBkifIBkCfgEgmxABQIAAgxg");
	this.shape_2.setTransform(-0.325,-374.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.instance_2 = new lib.PoP();
	this.instance_2.setTransform(-50,-15.35,0.3891,0.389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnzCaIAAkzIPnAAIAAEzg");
	this.shape_3.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_3}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-258.5,-382.6,516.4,398);


(lib.orangeCover_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzPAlIAAhJMAmfAAAIAABJg");
	this.shape.setTransform(120.675,2.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0741A").s().p("AzPDbIAAigMAmfAAAIAACggAzPgSIAAjIMAmfAAAIAADIg");
	this.shape_1.setTransform(120.675,0.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orangeCover_mc, new cjs.Rectangle(-2.5,-21.6,246.4,43.8), null);


(lib.YellowBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_364 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(364).call(this.frame_364).wait(1));

	// Layer_1
	this.yellow_inner = new lib.Symbol2();
	this.yellow_inner.name = "yellow_inner";
	this.yellow_inner.setTransform(0,-1.45,0.004,1);

	this.timeline.addTween(cjs.Tween.get(this.yellow_inner).to({scaleX:1},364).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-23.1,248.4,43.3);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn = new lib.Symbol11();
	this.btn.name = "btn";
	this.btn.setTransform(370.75,16.65,1,1,0,0,0,13,11.6);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.text = new cjs.Text("Five years from the end of the funding's fiscal\nyear, the funding is no longer valid and should be sent back to the client.", "normal 400 16px 'Roboto'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 341;
	this.text.parent = this;
	this.text.setTransform(10.1,22.6);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A9+m0MA79AAAIAANpMg79AAAg");
	this.shape.setTransform(191.875,43.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9+G0IAAtoMA79AAAIAANog");
	this.shape_1.setTransform(191.875,43.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1,-1,385.8,89.3), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn = new lib.Symbol11();
	this.btn.name = "btn";
	this.btn.setTransform(370.75,16.65,1,1,0,0,0,13,11.6);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.text = new cjs.Text("The obligated funds can be used to pay the\nlagging invoice costs and expenses that were\nincurred towards the obligation during the period of performance in which the obligation was made.\n\nNOTE: Dependent upon the funding document's\nlimitations or restrictions (if any).", "normal 400 16px 'Roboto'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 341;
	this.text.parent = this;
	this.text.setTransform(10.1,22.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A9+uGMA79AAAIAAcNMg79AAAg");
	this.shape.setTransform(191.875,90.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9+OHIAA8NMA79AAAIAAcNg");
	this.shape_1.setTransform(191.875,90.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1,-1,385.8,182.6), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.btn = new lib.Symbol11();
	this.btn.name = "btn";
	this.btn.setTransform(370.25,17.35,1,1,0,0,0,13,11.6);
	new cjs.ButtonHelper(this.btn, 0, 1, 1);

	this.text = new cjs.Text("The obligation can still incur costs, providing the obligation occurred within the Period of Availability.\n\nNOTE: Dependent upon bona fide need and impact of period of performance (PoP) dates.", "normal 400 16px 'Roboto'");
	this.text.lineHeight = 18;
	this.text.lineWidth = 341;
	this.text.parent = this;
	this.text.setTransform(10.1,22.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A9+tAMA79AAAIAAaBMg79AAAg");
	this.shape.setTransform(191.875,83.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9+NBIAA6BMA79AAAIAAaBg");
	this.shape_1.setTransform(191.875,83.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text},{t:this.btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1,-1,385.8,168.6), null);


(lib.PoPSliderMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pop_dragger
	this.pinPoint = new lib.PoPDragger();
	this.pinPoint.name = "pinPoint";
	this.pinPoint.setTransform(0,96.6);
	new cjs.ButtonHelper(this.pinPoint, 0, 1, 2, false, new lib.PoPDragger(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pinPoint).wait(1));

	// hit
	this.hit = new lib.SlideHit();
	this.hit.name = "hit";
	this.hit.setTransform(0,0,0.492,1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.SlideHit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	// bar
	this.bar = new lib.SlideBar();
	this.bar.name = "bar";
	this.bar.setTransform(0,0,0.002,1);
	this.bar.visible = false;
	var barFilter_1 = new cjs.ColorFilter(0.5,0.5,0.5,1,25.5,76.5,127.5,0);
	this.bar.filters = [barFilter_1];
	this.bar.cache(-3,-3,506,6);

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));
	this.timeline.addTween(cjs.Tween.get(barFilter_1).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ax0AAMAjpAAA");
	this.shape.setTransform(114.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// markers
	this.markers = new lib.SliderMarkers();
	this.markers.name = "markers";
	this.markers.setTransform(0,0,1.0745,1);
	this.markers.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.markers).wait(1));

	// textInput
	this.txt3 = new lib.an_TextInput({'id': 'txt3', 'value':'', 'disabled':true, 'visible':true, 'class':'ui-textinput'});

	this.txt3.name = "txt3";
	this.txt3.setTransform(-433.6,130.6,0.73,1,0,0,0,50.5,11);

	this.timeline.addTween(cjs.Tween.get(this.txt3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PoPSliderMC, new cjs.Rectangle(-470.8,-286,728.7,428.1), null);


(lib.ButtonDrag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.myDate = new lib.Symbol4();
	this.myDate.name = "myDate";
	this.myDate.setTransform(40.9,43.95);
	this.myDate.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.myDate).wait(4));

	// pinpoint_graphic
	this.instance = new lib.pinpoint();
	this.instance.setTransform(-19,-25.55,0.3362,0.3364);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AzcAlIAAhJMAm5AAAIAABJg");
	this.shape.setTransform(124.25,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{y:-25.55}}]}).to({state:[{t:this.instance,p:{y:-26}}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-26,267.8,83.1);


(lib.Slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// textInput
	this.txt = new lib.an_TextInput({'id': 'txt', 'value':'', 'disabled':false, 'visible':false, 'class':'ui-textinput'});

	this.txt.name = "txt";
	this.txt.setTransform(191.95,58.5,0.73,1,0,0,0,50.5,11);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// pinpoint
	this.pinPoint = new lib.ButtonDrag();
	this.pinPoint.name = "pinPoint";
	new cjs.ButtonHelper(this.pinPoint, 0, 1, 2, false, new lib.ButtonDrag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.pinPoint).wait(1));

	// hit
	this.hit = new lib.SlideHit();
	this.hit.name = "hit";
	this.hit.setTransform(0,0,0.4902,1);
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.SlideHit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).wait(1));

	// bar
	this.bar = new lib.SlideBar();
	this.bar.name = "bar";
	this.bar.setTransform(0,0,0.002,1);
	this.bar.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.bar).wait(1));

	// base
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(0.1,1,1).p("Ax0AAMAjpAAA");
	this.shape.setTransform(114.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// markers
	this.markers = new lib.SliderMarkers();
	this.markers.name = "markers";
	this.markers.setTransform(0,0,1.0745,1);
	this.markers.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.markers).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slider, new cjs.Rectangle(-19,-25.5,267.8,95.5), null);


// stage content:
(lib.poainteractiveredochange5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var root = this;
		var slider = root.slider;
		var slider2 = root.slider2;
		var slider3 = root.slider3;
		var sliderNew = root.sliderNew;
		
		var yellow1 = root.yellow1;
		var yellow2 = root.yellow2;
		var yellowNew = root.yellowNew;
		
		var orangeCover1 = root.orangeCover1;
		var orangeCover2 = root.orangeCover2;
		var whiteCover1 = root.whiteCover1;
		var whiteCover2 = root.whiteCover2;
		var whiteCover3 = root.whiteCover3;
		
		orangeCover1.visible = false;
		orangeCover2.visible = false;
		
		whiteCover1.visible = false;
		whiteCover2.visible = false;
		//whiteCoverNew.visible = false;
		
		
		//variables for date displays on pinpoint when dragging
		var1 = "2015" //default date..these change after user inputs a new date
		var2 = "2016" //defaulte date..these change after user inputs a new date
		var startDate = new Date("10-01-" + var1); //YYYY-MM-DD
		var endDate = new Date("09-30-" + var2); //YYYY-MM-DD
		var dateArr; //the array that'll hold the dates for the fy pinpoints
		
		//NEED to do same as above but for pop slider
		//default dates are 10/1/2016 to 09/30/2017 / 10/1/2017 to 09/30/2018
		var popVar1 = "2015"; //left side 
		var popVar2 = "2016"; //left side 
		
		var popVar3 = "2016"; //far right fy date
		var popVar4 = "2017"; //far right fy date
		
		var popStartDate = new Date("10-01-" + popVar1); //YYYY-MM-DD
		var popEndDate = new Date("09-30-" + popVar2); //YYYY-MM-DD
		
		//date range for the left side of the pop slider
		var popMiddleStartDate = new Date("10-01-" + popVar2); //YYYY-MM-DD
		var popMiddleEndDate = new Date("09-30" + popVar3); //YYYY-MM-DD
		
		//date range for the right side of the pop slider
		var popRightStartDate = new Date("10-01-" + popVar3); //YYYY-MM-DD
		var popRightEndDate = new Date("09-30-" + popVar4); //YYYY-MM-DD
		
		var popArr1;
		var popArr2;
		
		//array date for pop slider
		var popArr3;
		
		var pinPointDraggerMC_width = 246;
		slider.snapping = true;
		slider2.snapping2 = true;
		sliderNew.snapping4 = true;
		slider3.snapping3 = true;
		
		
		slider.min = 0;
		slider.max = 365;
		slider2.min2 = 0;
		slider2.max2 = 365;
		slider3.min3 = 0;
		slider3.max3 = 366;
		sliderNew.min4 = 0;
		sliderNew.max4 = 366;
		
		slider.currentValue = 1;
		slider2.currentValue2 = 1;
		sliderNew.currentValue4 = 1;
		slider3.currentValue3 = 0;
		
		slider.steps = 366;
		slider2.steps2 = 366;
		sliderNew.steps4 = 366;
		
		//pop slider
		slider3.steps3 = 366;
		
		slider.precision = 1;
		slider2.precision = 1;
		slider3.precision = 1;
		sliderNew.precision = 1;
		
		slider.fontSizeRatio = 0.55;
		slider2.fontSizeRatio = 0.55;
		slider3.fontSizeRatio = 0.55;
		sliderNew.fontSizeRatio = 0.55;
		
		root.start = function () {
		
			$("#txt2").attr("maxlength", 2);
			slider.textInput = dom_overlay_container.children["txt"];
			slider2.textInput = dom_overlay_container.children["txt2"];
			slider3.textInput = dom_overlay_container.children["txt3"];
		
			slider.keyUpHandler = function (e) {
				e.preventDefault();
		
				if (e.keyCode === 13)
					slider.positionFromCurrentValue(slider.textInput.value);
			};
			slider2.keyUpHandler2 = function (e) {
				e.preventDefault();
		
				if (e.keyCode === 13)
					slider2.positionFromCurrentValue2(slider2.textInput.value);
			};
			slider3.keyUpHandler3 = function (e) {
				e.preventDefault();
		
				if (e.keyCode === 13)
					slider3.positionFromCurrentValue3(slider3.textInput.value);
			};
		
			slider.setFontSize = function (e) {
				slider.textInput.style.fontSize = Math.round(slider.hit.nominalBounds.height * slider.stage.scaleY * slider.fontSizeRatio) + "px";
			};
		
			slider.setSteps = function () {
				for (var i = 0; i <= this.steps; i++) {
					var marker = new lib.SliderMarker();
					marker.txt.text = (i * ((this.max - this.min) / this.steps) + this.min).toFixed(this.precision);
					marker.x = i * (pinPointDraggerMC_width / this.steps);
					this.markers.addChild(marker);
				}
			};
			slider2.setSteps2 = function () {
				for (var i = 0; i <= this.steps2; i++) {
					var marker2 = new lib.SliderMarker();
					marker2.txt.text = (i * ((this.max2 - this.min2) / this.steps2) + this.min2).toFixed(this.precision);
					marker2.x = i * (pinPointDraggerMC_width / this.steps2);
					this.markers.addChild(marker2);
				}
			};
			sliderNew.setSteps4 = function () {
				for (var i = 0; i <= this.steps4; i++) {
					var marker4 = new lib.SliderMarker();
					marker4.txt.text = (i * ((this.max4 - this.min4) / this.steps4) + this.min4).toFixed(this.precision);
					marker4.x = i * (pinPointDraggerMC_width / this.steps4);
					this.markers.addChild(marker4);
				}
			};
			slider3.setSteps3 = function () {
				for (var i = 0; i <= this.steps3; i++) {
					var marker3 = new lib.SliderMarker();
					marker3.txt.text = (i * ((this.max3 - this.min3) / this.steps3) + this.min3).toFixed(this.precision);
					marker3.x = i * (pinPointDraggerMC_width / this.steps3);
					this.markers.addChild(marker3);
				}
			};
		
			slider.positionFromCurrentValue = function (value) {
				if (isNaN(parseInt(value)))
					return;
		
				var hitWidth = pinPointDraggerMC_width;
				var posX;
		
				this.currentValue = root.clamp(parseInt(value), this.min, this.max);
				posX = root.clamp(((this.currentValue - this.min) / (this.max - this.min)) * hitWidth, 0, hitWidth)
		
				if (this.snapping) {
					var stepWidth = hitWidth / this.steps;
					this.pinPoint.x = root.clamp(stepWidth * Math.round(posX / stepWidth), 0, hitWidth);
				} else
					this.pinPoint.x = posX;
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth);
				this.textInput.value = this.currentValue.toFixed(this.precision);
		
			};
			slider2.positionFromCurrentValue2 = function (value) {
				if (isNaN(parseInt(value)))
					return;
		
				var hitWidth2 = pinPointDraggerMC_width;
				var posX2;
		
				this.currentValue2 = root.clamp(parseInt(value), this.min2, this.max2);
				posX2 = root.clamp(((this.currentValue2 - this.min2) / (this.max2 - this.min2)) * hitWidth2, 0, hitWidth2)
		
				if (this.snapping2) {
					var stepWidth2 = hitWidth2 / this.steps2;
					this.pinPoint.x = root.clamp(stepWidth2 * Math.round(posX2 / stepWidth2), 0, hitWidth2);
				} else
					this.pinPoint.x = posX2;
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth2);
				//this.textInput.value = this.currentValue2.toFixed(this.precision);
			};
			sliderNew.positionFromCurrentValue4 = function (value) {
				if (isNaN(parseInt(value)))
					return;
		
				var hitWidth4 = pinPointDraggerMC_width;
				var posX4;
		
				this.currentValue4 = root.clamp(parseInt(value), this.min4, this.max4);
				posX4 = root.clamp(((this.currentValue4 - this.min4) / (this.max4 - this.min4)) * hitWidth4, 0, hitWidth4)
		
				if (this.snapping4) {
					var stepWidth4 = hitWidth4 / this.steps4;
					this.pinPoint.x = root.clamp(stepWidth4 * Math.round(posX4 / stepWidth4), 0, hitWidth4);
				} else
					this.pinPoint.x = posX4;
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth4);
		
			};
			slider3.positionFromCurrentValue3 = function (value) {
				if (isNaN(parseInt(value)))
					return;
		
				var hitWidth3 = pinPointDraggerMC_width;
				var posX3;
		
				this.currentValue3 = root.clamp(parseInt(value), this.min3, this.max3);
				posX3 = root.clamp(((this.currentValue3 - this.min3) / (this.max3 - this.min3)) * hitWidth3, 0, hitWidth3)
		
				if (this.snapping3) {
					var stepWidth3 = hitWidth3 / this.steps3;
					this.pinPoint.x = root.clamp(stepWidth3 * Math.round(posX3 / stepWidth3), 0, hitWidth3);
				} else
					this.pinPoint.x = posX3;
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth3);
				this.textInput.value = this.currentValue3.toFixed(this.precision);
			};
		
			slider.positionFromMouseX = function () {
				var hitWidth = pinPointDraggerMC_width;
				var posX = (this.stage.mouseX / this.stage.scaleX) - this.x;
		
				if (this.snapping) {
					var stepWidth = hitWidth / this.steps;
					this.pinPoint.x = root.clamp(stepWidth * Math.round(posX / stepWidth), 0, hitWidth);
				} else
					this.pinPoint.x = root.clamp(posX, 0, hitWidth);
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth);
				this.currentValue = (this.pinPoint.x / hitWidth) * (this.max - this.min) + this.min;
				this.textInput.value = this.currentValue.toFixed(this.precision);
				//console.log("slider this.currentvalue " + this.currentValue);		
			};
			slider2.positionFromMouseX2 = function () {
				var hitWidth2 = pinPointDraggerMC_width;
				var posX2 = (this.stage.mouseX / this.stage.scaleX) - this.x;
		
				if (this.snapping2) {
					var stepWidth2 = hitWidth2 / this.steps2;
					this.pinPoint.x = root.clamp(stepWidth2 * Math.round(posX2 / stepWidth2), 0, hitWidth2);
				} else
					this.pinPoint.x = root.clamp(posX2, 0, hitWidth2);
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth2);
				this.currentValue2 = (this.pinPoint.x / hitWidth2) * (this.max2 - this.min2) + this.min2;
				//this.textInput.value = this.currentValue2.toFixed(this.precision);
			};
			sliderNew.positionFromMouseX4 = function () {
				var hitWidth4 = pinPointDraggerMC_width;
				var posX4 = (this.stage.mouseX / this.stage.scaleX) - this.x;
		
				if (this.snapping4) {
					var stepWidth4 = hitWidth4 / this.steps4;
					this.pinPoint.x = root.clamp(stepWidth4 * Math.round(posX4 / stepWidth4), 0, hitWidth4);
				} else
					this.pinPoint.x = root.clamp(posX4, 0, hitWidth4);
		
				this.bar.scaleX = (this.pinPoint.x / hitWidth4);
				this.currentValue4 = (this.pinPoint.x / hitWidth4) * (this.max4 - this.min4) + this.min4;
		
			};
			slider3.positionFromMouseX3 = function () {
		
				//add +2 to allow slider to go a littler further to line up better
				var hitWidth3 = pinPointDraggerMC_width + 2.2;
				var posX3 = (this.stage.mouseX / this.stage.scaleX) - this.x;
		
				if (this.snapping3) {
					var stepWidth3 = hitWidth3 / this.steps3;
					this.pinPoint.x = root.clamp(stepWidth3 * Math.round(posX3 / stepWidth3), 0, hitWidth3);
				} else
					this.pinPoint.x = root.clamp(posX3, 0, hitWidth3);
		
				//this.bar.scaleX = (this.pinPoint.x / hitWidth3);
				this.currentValue3 = (this.pinPoint.x / hitWidth3) * (this.max3 - this.min3) + this.min3;
				this.textInput.value = this.currentValue3.toFixed(this.precision);
				//console.log(this.pinPoint.x);
		
				/*below is for the white covers for the black pinpoint bars. if it's just root.foo.x = this.pinPoint.x, then the white
						cover goes to 0 and then follows the pop slider.  add 382.5 so it lines up with the pop slider correctly*/
		
				//root.foo.x = this.pinPoint.x + 382.5;
				//root.foo2.x = this.pinPoint.x + 382.5;
				root.foo.x = this.pinPoint.x + 632.1;
				root.foo2.x = this.pinPoint.x + 632.1;
				root.fooNew.x = this.pinPoint.x + 384;
		
			};
		
		
		
			slider.mouseDownHandler = function (e) {
				console.log("mousedown");
				this.pinPoint.gotoAndStop(1);
				this.pinPoint.myDate.visible = true;
				this.positionFromMouseX();
				this.stage.stageMouseMove = this.stage.on("stagemousemove", this.stage.stageMouseMoveHandler);
				this.stage.stageMouseUp = this.stage.on("stagemouseup", this.stage.stageMouseUpHandler);
		
			};
			slider2.mouseDownHandler2 = function (e) {
				console.log("mousedown");
				this.pinPoint.gotoAndStop(1);
				this.pinPoint.myDate.visible = true;
				this.positionFromMouseX2();
				this.stage.stageMouseMove = this.stage.on("stagemousemove", this.stage.stageMouseMoveHandler2);
				this.stage.stageMouseUp = this.stage.on("stagemouseup", this.stage.stageMouseUpHandler2);
			};
			sliderNew.mouseDownHandler4 = function (e) {
				console.log("mousedown");
				this.pinPoint.gotoAndStop(1);
				this.pinPoint.myDate.visible = true;
				this.positionFromMouseX4();
				this.stage.stageMouseMove = this.stage.on("stagemousemove", this.stage.stageMouseMoveHandler4);
				this.stage.stageMouseUp = this.stage.on("stagemouseup", this.stage.stageMouseUpHandler4);
			};
			slider3.mouseDownHandler3 = function (e) {
				this.pinPoint.gotoAndStop(1);
				this.positionFromMouseX3();
				this.stage.stageMouseMove = this.stage.on("stagemousemove", this.stage.stageMouseMoveHandler3);
				this.stage.stageMouseUp = this.stage.on("stagemouseup", this.stage.stageMouseUpHandler3);
		
			};
		
			//dragging pinpoint1
			stage.stageMouseMoveHandler = function (e) {
				slider.positionFromMouseX();
		
				var tmp = Math.round(slider.currentValue);
				if (tmp < slider3.currentValue3) {
					yellow1.gotoAndStop(tmp - 1);
				}
		
				if (slider.currentValue == 365) {
					console.log("you can go further");
				}
		
				//this handles the new code for showing hiding organecovers and whitecovers
				if (slider.currentValue >= slider3.currentValue3) {
					//orangeCover1.visible = false;
					//yellows have to be opposite of what the orangeCover was eventhough no longer show/hiding the orange cover since green always need to be visible
					yellow1.visible = true;
					whiteCover1.visible = false;
				} else {
					//orangeCover1.visible = true;			
					yellow1.visible = false;
					whiteCover1.visible = true;
				}
		
				//////////////////////////////////////////////////////////////
				console.log("slider value is " + tmp + slider3.currentValue3);
				root.slider.pinPoint.myDate.txt.text = dateArr[tmp];
		
		
			};
		
			//dragging pinpoint2
			stage.stageMouseMoveHandler2 = function (e) {
				slider2.positionFromMouseX2();
				//if currentValue2 < currentValue3 (the PoP value) gotoAndStop yellow2 else do nothing		
				//yellow2.gotoAndStop(slider2.currentValue2 - 1);
				var tmp2 = Math.round(slider2.currentValue2);
				if (tmp2 < slider3.currentValue3) {
					yellow2.gotoAndStop(tmp2 - 1);
				}
				//this handles the new code for showing hiding organecovers and whitecovers
				if (slider2.currentValue2 >= slider3.currentValue3) {
					//orangeCover2.visible = false;
					yellow2.visible = true;
					whiteCover2.visible = false;
				} else {
					//orangeCover2.visible = true;
					yellow2.visible = false;
					whiteCover2.visible = true;
				}
				//////////////////////////////////////////////////////////////
				//console.log("currentValue 2 is " + slider2.currentValue2);
				//root.slider2.pinPoint.myDate.txt.text = tmp2;
				root.slider2.pinPoint.myDate.txt.text = dateArr[tmp2];
				//console.log("slider value is " + tmp2);
			};
		
			//dragging pinpoint new	
			stage.stageMouseMoveHandler4 = function (e) {
				//original code commented out
				/*sliderNew.positionFromMouseX4();
				var tmp4 = Math.round(sliderNew.currentValue4);
				if (tmp4 < slider3.currentValue3) {
					yellowNew.gotoAndStop(tmp4 - 1);
				}
				root.sliderNew.pinPoint.myDate.txt.text = dateArr[tmp4]; //console.log("slider value is " + tmp2);*/
				//////////////////////////////////////////////////////////////////////////////////////////////////////////////
				//////////////////////////////////////////////////////////////////////////////////////////////////////////////
				sliderNew.positionFromMouseX4();
				var tmp4 = Math.round(sliderNew.currentValue4);
				if (tmp4 < slider3.currentValue3) {
					yellowNew.gotoAndStop(tmp4 - 1);
				}
				//this handles the new code for showing hiding organecovers and whitecovers
				if (sliderNew.currentValue4 >= slider3.currentValue3) {
					//orangeCover2.visible = false;
					yellowNew.visible = true;
					whiteCover3.visible = false;
				} else {
					//orangeCover2.visible = true;
					yellowNew.visible = false;
					whiteCover3.visible = true;
				}
				//////////////////////////////////////////////////////////////
				//console.log("currentValue 2 is " + slider2.currentValue2);
				//root.slider2.pinPoint.myDate.txt.text = tmp2;
				root.sliderNew.pinPoint.myDate.txt.text = dateArr[tmp4];
				//console.log("slider value is " + tmp2);
			};
		
			//dragging pop slider
			stage.stageMouseMoveHandler3 = function (e) {
				slider3.positionFromMouseX3();
				//if currentValue3 < currentValue, gotoAndStop yellow1
				//if currentValue3 < currentValue2, gotoAndStop yellow2
				var tmp3 = Math.round(slider3.currentValue3);
		
				/*the orange covers and white covers always follow the pop slider whether they are
				visible or not*/
				root.orangeCover1.x = root.slider3.pinPoint.x + 505.85;
				root.orangeCover2.x = root.slider3.pinPoint.x + 505.85;
				root.whiteCover1.x = root.slider3.pinPoint.x + 382.85;
				root.whiteCover2.x = root.slider3.pinPoint.x + 382.85;
				root.whiteCover3.x = root.slider3.pinPoint.x + 134.7;
		
				if (slider3.currentValue3 <= slider.currentValue) {
					yellow1.gotoAndStop(slider3.currentValue3 - 1);
				}
				if (slider3.currentValue3 <= slider2.currentValue2) {
					yellow2.gotoAndStop(slider3.currentValue3 - 1);
				}
				if (slider3.currentValue3 <= sliderNew.currentValue4) {
					yellowNew.gotoAndStop(slider3.currentValue3 - 1);
				}
		
				//new code slider1
				if (slider3.currentValue3 > slider.currentValue) {
					//do something
					//orangeCover1.visible = true;
					yellow1.visible = false;
					whiteCover1.visible = true;
		
					root.orangeCover1.x = root.slider3.pinPoint.x + 505.85;
					root.whiteCover1.x = root.slider3.pinPoint.x + 382.85;
				} else {
					//orangeCover1.visible = false;
					yellow1.visible = true;
					whiteCover1.visible = false;
				}
		
				//new code slider2
				if (slider3.currentValue3 > slider2.currentValue2) {
					//do something
					//orangeCover2.visible = true;
					yellow2.visible = false;
					whiteCover2.visible = true;
		
					root.orangeCover2.x = root.slider3.pinPoint.x + 505.85;
					root.whiteCover2.x = root.slider3.pinPoint.x + 382.85;
				} else {
					//orangeCover2.visible = false;
					yellow2.visible = true;
					whiteCover2.visible = false;
				}
		
				//new code sliderNew
				if (slider3.currentValue3 > sliderNew.currentValue4) {
					//do something
					//orangeCover2.visible = true;
					yellowNew.visible = false;
					whiteCover3.visible = true;
		
					//root.orangeCover2.x = root.slider3.pinPoint.x + 505.85;
					root.whiteCover3.x = root.slider3.pinPoint.x + 134.7;
				} else {
					//orangeCover2.visible = false;
					yellowNew.visible = true;
					whiteCover3.visible = false;
				}
		
				//tmp3 range is from 0 - 366
				calcDate(popArr1[tmp3]); //left side dates
				calcDate2(popArr3[tmp3]); //right side dates
		
		
				//the fartherst x can be slid to right is x = 248		
				/*if (Math.round(slider3.pinPoint.x) == 248) {			
					console.log("tmp3 is " + tmp3)
					console.log(popArr1[364])
				}*/
			};
		
			stage.stageMouseUpHandler = function (e) {
				slider.pinPoint.gotoAndStop(0);
				slider.pinPoint.myDate.visible = false;
				//console.log("currentValue 1 is " + slider.currentValue);
				if (slider.currentValue < slider3.currentValue3) {
					yellow1.gotoAndStop(slider.currentValue - 1);
				}
		
				if (slider.currentValue == 365) {
					//console.log("you can go further");
				}
				this.off("stagemousemove", this.stageMouseMove);
				this.off("stagemouseup", this.stageMouseUp);
				//console.log("slider mouseUP");
			};
			stage.stageMouseUpHandler2 = function (e) {
				slider2.pinPoint.gotoAndStop(0);
				slider2.pinPoint.myDate.visible = false;
				//console.log("currentValue 2 is " + slider2.currentValue2);
				if (slider2.currentValue2 < slider3.currentValue3) {
					yellow2.gotoAndStop(slider2.currentValue2 - 1);
				}
				this.off("stagemousemove", this.stageMouseMove);
				this.off("stagemouseup", this.stageMouseUp);
			};
			stage.stageMouseUpHandler4 = function (e) {
				sliderNew.pinPoint.gotoAndStop(0);
				sliderNew.pinPoint.myDate.visible = false;
				//console.log("currentValue 2 is " + slider2.currentValue2);
				if (sliderNew.currentValue4 < slider3.currentValue3) {
					yellowNew.gotoAndStop(sliderNew.currentValue4 - 1);
				}
				this.off("stagemousemove", this.stageMouseMove);
				this.off("stagemouseup", this.stageMouseUp);
			};
			stage.stageMouseUpHandler3 = function (e) {
				slider3.pinPoint.gotoAndStop(0);
				//console.log("currentValue 3 is " + slider3.currentValue3);
				if (slider3.currentValue3 <= slider.currentValue) {
					yellow1.gotoAndStop(slider3.currentValue3 - 1);
				}
				if (slider3.currentValue3 <= slider2.currentValue2) {
					yellow2.gotoAndStop(slider3.currentValue3 - 1);
				}
				this.off("stagemousemove", this.stageMouseMove);
				this.off("stagemouseup", this.stageMouseUp);
		
			};
		
			createjs.Touch.enable(stage);
			stage.mouseMoveOutside = true;
			stage.preventSelection = true;
		
			slider.setSteps();
			slider2.setSteps2();
			slider3.setSteps3();
			sliderNew.setSteps4();
		
			slider.positionFromCurrentValue(slider.currentValue);
			slider2.positionFromCurrentValue2(slider2.currentValue2);
			slider3.positionFromCurrentValue3(slider3.currentValue3);
			sliderNew.positionFromCurrentValue4(sliderNew.currentValue4);
		
			slider.pinPoint.mouseChildren = false;
			slider2.pinPoint.mouseChildren = false;
			slider3.pinPoint.mouseChildren = false;
			sliderNew.pinPoint.mouseChildren = false;
		
			slider.pinPoint.cursor = "pointer";
			slider2.pinPoint.cursor = "pointer";
			slider3.pinPoint.cursor = "pointer";
			sliderNew.pinPoint.cursor = "pointer";
		
			slider.hit.cursor = "default";
			slider2.hit.cursor = "default";
			slider3.hit.cursor = "default";
			sliderNew.hit.cursor = "default";
		
			slider.setFontSize();
		
			window.addEventListener("resize", slider.setFontSize);
		
			window.addEventListener("keyup", slider.keyUpHandler);
			//slider2 jumps when enter from input field.  don't know why.  don't seem to need this anyway.
			//window.addEventListener("keyup", slider2.keyUpHandler2);
			window.addEventListener("keyup", slider3.keyUpHandler3);
		
			slider.mouseDown = slider.on("mousedown", slider.mouseDownHandler);
			slider2.mouseDown = slider2.on("mousedown", slider2.mouseDownHandler2);
			slider3.mouseDown = slider3.on("mousedown", slider3.mouseDownHandler3);
			sliderNew.mouseDown = sliderNew.on("mousedown", sliderNew.mouseDownHandler4);
		
		
		};
		
		root.clamp = function (value, min, max) {
			if (value < min)
				return min;
		
			if (value > max)
				return max;
		
			return value;
		};
		
		setTimeout(root.start, 0);
		
		
		//function for external input field
		this.myFunction = function (tmp) {
			root.txt1.text = "20" + tmp - 1;
			root.txt3.text = "20" + tmp;
			root.txt9.text = "10/1/" + "20" + tmp;
		
			var $curVal = tmp;
			//$item.attr("value", parseInt($curVal) + 1 );
			//root.txt4.text = parseInt($curVal) + 1;
			root.txt4.text = tmp - 1;
		
			//root.txt5.text = "20" + root.txt4.text;
			root.txt5.text = "20" + (parseInt(tmp) + 1);
		
			//root.txt6.text = parseInt($curVal) + 2;
			root.txt6.text = parseInt($curVal) + 1;
		
			root.txt7.text = "20" + (parseInt(tmp) + 2);
		
			root.txt8.text = "20" + (parseInt($curVal) + 5);
			root.txt10.text = "09/30/" + "20" + (parseInt($curVal) + 5);
		
			root.txt11.text = "09/30/" + "20" + (parseInt($curVal) + 5);
			root.txt13.text = "09/30/" + "20" + tmp;
		
			root.txt14.text = "20" + (parseInt($curVal) + 4) //dead money date
		
		
			//var1 needs to be -1 of the input field..need to add "20" in front so it'd look like 20XX
			//var2 need to be == to the input field..need to add "20" in front so it'd look like 20XX
			//this is where the actual updates occur.  changing the original because they moved textfields and years around
			var1 = root.txt1.text = "20" + tmp - 1;
			var2 = root.txt3.text = "20" + tmp;
		
			//right side range
			var3 = tmp;
			var4 = parseInt(tmp) + 1;
		
			startDate = new Date("10-01-" + var1);
			endDate = new Date("09-30-" + var2);
			dateArr = getDateArray(startDate, endDate);
		
		
			if (dateArr.length < 366) {
				//no leap year
		
				slider.max = 364
				slider.steps = 364
				slider2.max2 = 364
				slider2.steps2 = 364
			} else {
				//with leap year
		
				slider.max = 365
				slider.steps = 365
				slider2.max2 = 365
				slider2.steps2 = 365
			}
		
			//update the left side dates when enter
			var arrNum = dateArr.length;
			root.slider3.pinPoint.t1.text = dateArr[0] + " to " + dateArr[arrNum - 1];
		
			//update the right side dates when enter
			//update popArr3 based on the input year popRightStartDate, popRightEndDate
			popRightStartDate = new Date("10-01-" + var3);
			popRightEndDate = new Date("09-30-" + var4);
			popArr3 = getDateArray(popRightStartDate, popRightEndDate);
			var arrNum2 = popArr3.length;
			root.slider3.pinPoint.t2.text = popArr3[0] + " to " + popArr3[arrNum2 - 1];
		
		
			//////PoP////////OMGGGGG
			popVar1 = root.txt3.text = "20" + tmp - 1;
			popVar2 = root.txt3.text = "20" + tmp;
			popStartDate = new Date("10-01-" + popVar1);
			popEndDate = new Date("09-30-" + popVar2);
		
			popArr1 = getDateArray(popStartDate, popEndDate);
		}
		
		
		////function for dates on pinpoint
		var getDateArray = function (start, end) {
			var arr = new Array();
			var dt = new Date(start);
			while (dt <= end) {
				//toLocalDateString strips out all the unecessary junk
				arr.push(new Date(dt).toLocaleDateString());
				dt.setDate(dt.getDate() + 1);
			}
			return arr;
		}
		
		//runs first time to set default date
		dateArr = getDateArray(startDate, endDate);
		popArr1 = getDateArray(popStartDate, popEndDate);
		popArr2 = getDateArray(popMiddleStartDate, popMiddleEndDate);
		popArr3 = getDateArray(popRightStartDate, popRightEndDate);
		
		
		function calcDate(foo) {
		
			//var tt = document.getElementById('txtDate').value;	
			var tmp3 = Math.round(slider3.currentValue3);
			var date = new Date(foo);
			var newdate = new Date(date);
			newdate.setDate(newdate.getDate() + 364);
		
			var dd = newdate.getDate();
			var mm = newdate.getMonth() + 1;
			var y = newdate.getFullYear();
		
			var someFormattedDate = mm + '/' + dd + '/' + y;
			//console.log(popArr1[tmp3] + " to " + someFormattedDate);	
		
		
			//below updates the t12 text field when sliding the pop
			/*if (popArr1[tmp3] != undefined && someFormattedDate != "nan/nan/nan") {
				//updating the text on the left side of the pop slider
				root.slider3.pinPoint.t1.text = popArr1[tmp3] + " to " + someFormattedDate;
		
				//updated when sliding
				root.t12.text = someFormattedDate;
			} else {
				return;
			}*/
		
			////////////////////////////////////////////////
		
		
			if (Math.round(slider3.pinPoint.x) == 248) {
				//ok, this is to FORCE the final date range when dragged all the way to the right.  it doesn't update properly if dragged
				//really fast to the rar right (end)
				root.slider3.pinPoint.t1.text = "10/1/" + root.txt3.text + " to " + "9/30/" + root.txt7.text;
			} else {
				//otherwise just update normally
				root.slider3.pinPoint.t1.text = popArr1[tmp3] + " to " + someFormattedDate;
			}
		
			///////////////////////////////////////////////
		
		}
		
		function calcDate2(foo) {
			//var tt = document.getElementById('txtDate').value;
			var tmp3 = Math.round(slider3.currentValue3);
			var date = new Date(foo);
			var newdate = new Date(date);
		
			newdate.setDate(newdate.getDate() + 364);
		
			var dd = newdate.getDate();
			var mm = newdate.getMonth() + 1;
			var y = newdate.getFullYear();
		
			var someFormattedDate = mm + '/' + dd + '/' + y;
			/*if (popArr3[tmp3] != undefined && someFormattedDate != "nan/nan/nan") {
				root.slider3.pinPoint.t2.text = popArr3[tmp3] + " to " + someFormattedDate;
		
			} else {
				return;
			}*/
			if (Math.round(slider3.pinPoint.x) == 248) {
				//ok, this is to FORCE the final date range when dragged all the way to the right.  it doesn't update properly if dragged
				//really fast to the rar right (end)
				root.slider3.pinPoint.t2.text = "10/1/" + root.txt7.text + " to " + "9/30/" + (parseInt(root.txt7.text) + 1);
			} else {
				//otherwise just update normally
				root.slider3.pinPoint.t2.text = popArr3[tmp3] + " to " + someFormattedDate;
			}
		
		}
		
		this.btn_tip1.addEventListener("click", openTip1.bind(this));
		this.tip1.btn.addEventListener("click", closeTip1.bind(this));
		
		this.btn_tip2.addEventListener("click", openTip2.bind(this));
		this.tip2.btn.addEventListener("click", closeTip2.bind(this));
		
		this.btn_tip3.addEventListener("click", openTip3.bind(this));
		this.tip3.btn.addEventListener("click", closeTip3.bind(this));
		
		function openTip1() {
			this.tip1.visible = true;
			this.tip2.visible = false;
			this.tip3.visible = false;
		}
		
		function openTip2() {
			this.tip2.visible = true;
			this.tip1.visible = false;
			this.tip3.visible = false;
		}
		
		function openTip3() {
			this.tip3.visible = true;
			this.tip1.visible = false;
			this.tip2.visible = false;
		}
		
		function closeTip1() {
			this.tip1.visible = false;
		}
		
		function closeTip2() {
			this.tip2.visible = false;
		}
		
		function closeTip3() {
			this.tip3.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dummy
	this.text = new cjs.Text("txt7", "normal 400 14px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 34;
	this.text.parent = this;
	this.text.setTransform(-39.2,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.text_1 = new cjs.Text("txt6", "normal 400 14px 'Roboto'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 34;
	this.text_1.parent = this;
	this.text_1.setTransform(-170.35,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("txt5", "normal 400 14px 'Roboto'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 21;
	this.text_2.lineWidth = 34;
	this.text_2.parent = this;
	this.text_2.setTransform(-301.5,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("txt3", "normal 400 14px 'Roboto'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 21;
	this.text_3.lineWidth = 34;
	this.text_3.parent = this;
	this.text_3.setTransform(-543.1,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("txt4", "normal 400 14px 'Roboto'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 21;
	this.text_4.lineWidth = 34;
	this.text_4.parent = this;
	this.text_4.setTransform(-681.45,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("txt1", "normal 400 14px 'Roboto'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 21;
	this.text_5.lineWidth = 34;
	this.text_5.parent = this;
	this.text_5.setTransform(-786.1,253.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_5);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// tips
	this.tip3 = new lib.Symbol10();
	this.tip3.name = "tip3";
	this.tip3.setTransform(502.55,767.3,1,1,0,0,0,191.8,43.6);
	this.tip3.visible = false;

	this.tip2 = new lib.Symbol9();
	this.tip2.name = "tip2";
	this.tip2.setTransform(897.5,679.5,1,1,0,0,0,191.8,95.7);
	this.tip2.visible = false;

	this.tip1 = new lib.Symbol8();
	this.tip1.name = "tip1";
	this.tip1.setTransform(543.4,643.65,1,1,0,0,0,191.8,86.5);
	this.tip1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tip1},{t:this.tip2},{t:this.tip3}]}).wait(1));

	// instructions
	this.text_6 = new cjs.Text("Funding Availability One-Year Appropriation Estimator Tool", "normal 400 30px 'Roboto'", "#FFFFFF");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 42;
	this.text_6.lineWidth = 833;
	this.text_6.parent = this;
	this.text_6.setTransform(622.3,26.85);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_6);
	}

	this.instance = new lib.header();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(369.85,133.7);

	this.text_7 = new cjs.Text("key", "normal 700 16px 'Roboto'");
	this.text_7.lineHeight = 18;
	this.text_7.parent = this;
	this.text_7.setTransform(99.05,217.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("4. Use the        below to determing the funding's availability.", "normal 400 16px 'Roboto'");
	this.text_8.lineHeight = 18;
	this.text_8.parent = this;
	this.text_8.setTransform(24.1,217.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_8);
	}

	this.instance_2 = new lib.pinpoint();
	this.instance_2.setTransform(437,182,0.2036,0.2036);

	this.text_9 = new cjs.Text("3. Slide the obligation pin to the funding's obligation date.", "normal 400 16px 'Roboto'");
	this.text_9.lineHeight = 18;
	this.text_9.parent = this;
	this.text_9.setTransform(24.1,186.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_9);
	}

	this.instance_3 = new lib.PoP();
	this.instance_3.setTransform(374,156,0.2405,0.2405);

	this.text_10 = new cjs.Text("2. Slide the PoP tab to the PoP's starting month.", "normal 400 16px 'Roboto'");
	this.text_10.lineHeight = 18;
	this.text_10.parent = this;
	this.text_10.setTransform(24.1,157.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_10);
	}

	this.text_11 = new cjs.Text("below and press ENTER.", "normal 400 16px 'Roboto'");
	this.text_11.lineHeight = 18;
	this.text_11.parent = this;
	this.text_11.setTransform(385.5,127);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_11);
	}

	this.text_12 = new cjs.Text("FY", "normal 400 16px 'Roboto'");
	this.text_12.lineHeight = 18;
	this.text_12.parent = this;
	this.text_12.setTransform(335,127);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_12);
	}

	this.text_13 = new cjs.Text("1. Enter the funding's fiscal year in the field ", "normal 400 16px 'Roboto'");
	this.text_13.lineHeight = 18;
	this.text_13.parent = this;
	this.text_13.setTransform(24.1,127);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_13);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_13},{t:this.text_12},{t:this.text_11},{t:this.text_10},{t:this.instance_3},{t:this.text_9},{t:this.instance_2},{t:this.text_8},{t:this.text_7},{t:this.instance_1},{t:this.instance},{t:this.text_6}]}).wait(1));

	// txt_fields
	this.txt14 = new cjs.Text("2020", "normal 700 15px 'Roboto'", "#FF0000");
	this.txt14.name = "txt14";
	this.txt14.textAlign = "center";
	this.txt14.lineHeight = 22;
	this.txt14.lineWidth = 82;
	this.txt14.parent = this;
	this.txt14.setTransform(1023.4,408.1);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt14);
	}

	this.text_14 = new cjs.Text("FY", "bold 25px 'Roboto'");
	this.text_14.textAlign = "center";
	this.text_14.lineHeight = 32;
	this.text_14.lineWidth = 39;
	this.text_14.parent = this;
	this.text_14.setTransform(739.3,281.25);

	this.text_15 = new cjs.Text("FY", "bold 25px 'Roboto'");
	this.text_15.textAlign = "center";
	this.text_15.lineHeight = 32;
	this.text_15.lineWidth = 39;
	this.text_15.parent = this;
	this.text_15.setTransform(483.9,281.25);

	this.text_16 = new cjs.Text("FY", "bold 25px 'Roboto'");
	this.text_16.textAlign = "center";
	this.text_16.lineHeight = 32;
	this.text_16.lineWidth = 39;
	this.text_16.parent = this;
	this.text_16.setTransform(229.55,281.25);

	this.txt8 = new cjs.Text("2021", "normal 700 15px 'Roboto'", "#FF0000");
	this.txt8.name = "txt8";
	this.txt8.textAlign = "center";
	this.txt8.lineHeight = 22;
	this.txt8.lineWidth = 82;
	this.txt8.parent = this;
	this.txt8.setTransform(1023.4,579.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt8);
	}

	this.txt7 = new cjs.Text("2018", "normal 400 14px 'Roboto'");
	this.txt7.name = "txt7";
	this.txt7.textAlign = "center";
	this.txt7.lineHeight = 21;
	this.txt7.lineWidth = 82;
	this.txt7.parent = this;
	this.txt7.setTransform(888.55,292);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt7);
	}

	this.txt6 = new cjs.Text("18", "normal 700 25px 'Roboto'");
	this.txt6.name = "txt6";
	this.txt6.textAlign = "center";
	this.txt6.lineHeight = 35;
	this.txt6.lineWidth = 41;
	this.txt6.parent = this;
	this.txt6.setTransform(770.3,280.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt6);
	}

	this.txt5 = new cjs.Text("2017", "normal 400 14px 'Roboto'");
	this.txt5.name = "txt5";
	this.txt5.textAlign = "center";
	this.txt5.lineHeight = 21;
	this.txt5.lineWidth = 82;
	this.txt5.parent = this;
	this.txt5.setTransform(627.1,292);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt5);
	}

	this.txt4 = new cjs.Text("17", "normal 700 25px 'Roboto'");
	this.txt4.name = "txt4";
	this.txt4.textAlign = "center";
	this.txt4.lineHeight = 35;
	this.txt4.lineWidth = 41;
	this.txt4.parent = this;
	this.txt4.setTransform(259.3,280.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt4);
	}

	this.txt3 = new cjs.Text("2016", "normal 400 14px 'Roboto'");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 21;
	this.txt3.lineWidth = 82;
	this.txt3.parent = this;
	this.txt3.setTransform(380.65,292);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt3);
	}

	this.txt1 = new cjs.Text("2015", "normal 400 14px 'Roboto'");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 21;
	this.txt1.lineWidth = 82;
	this.txt1.parent = this;
	this.txt1.setTransform(135.45,291.9);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txt1},{t:this.txt3},{t:this.txt4},{t:this.txt5},{t:this.txt6},{t:this.txt7},{t:this.txt8},{t:this.text_16},{t:this.text_15},{t:this.text_14},{t:this.txt14}]}).wait(1));

	// months_labels
	this.text_17 = new cjs.Text("September, 30", "normal 700 15px 'Roboto'", "#FF0000");
	this.text_17.textAlign = "center";
	this.text_17.lineHeight = 17;
	this.text_17.parent = this;
	this.text_17.setTransform(1018.9,388.85);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_17);
	}

	this.text_18 = new cjs.Text("September, 30", "normal 700 15px 'Roboto'", "#FF0000");
	this.text_18.textAlign = "center";
	this.text_18.lineHeight = 17;
	this.text_18.parent = this;
	this.text_18.setTransform(1018.9,560.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_18);
	}

	this.text_19 = new cjs.Text("September 30,", "normal 400 14px 'Roboto'");
	this.text_19.textAlign = "center";
	this.text_19.lineHeight = 16;
	this.text_19.parent = this;
	this.text_19.setTransform(888.5,276.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_19);
	}

	this.text_20 = new cjs.Text("September 30,", "normal 400 14px 'Roboto'");
	this.text_20.textAlign = "center";
	this.text_20.lineHeight = 16;
	this.text_20.parent = this;
	this.text_20.setTransform(627.2,276.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_20);
	}

	this.text_21 = new cjs.Text("September 30,", "normal 400 14px 'Roboto'");
	this.text_21.textAlign = "center";
	this.text_21.lineHeight = 16;
	this.text_21.parent = this;
	this.text_21.setTransform(380.45,276.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_21);
	}

	this.text_22 = new cjs.Text("October 1,", "normal 400 14px 'Roboto'");
	this.text_22.textAlign = "center";
	this.text_22.lineHeight = 16;
	this.text_22.parent = this;
	this.text_22.setTransform(135.35,276.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_22);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_22},{t:this.text_21},{t:this.text_20},{t:this.text_19},{t:this.text_18},{t:this.text_17}]}).wait(1));

	// months_yearly_across
	this.instance_4 = new lib.CachedBmp_36();
	this.instance_4.setTransform(840.5,321.2,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_35();
	this.instance_5.setTransform(819,321.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_34();
	this.instance_6.setTransform(802.25,321.2,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_33();
	this.instance_7.setTransform(782.5,321.2,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_32();
	this.instance_8.setTransform(760.25,321.2,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_31();
	this.instance_9.setTransform(740.5,321.2,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_30();
	this.instance_10.setTransform(719.75,321.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_29();
	this.instance_11.setTransform(699.5,321.2,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_28();
	this.instance_12.setTransform(680,321.2,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_27();
	this.instance_13.setTransform(659,321.2,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_26();
	this.instance_14.setTransform(637.5,321.2,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_25();
	this.instance_15.setTransform(616.5,321.2,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_24();
	this.instance_16.setTransform(592.5,321.2,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_23();
	this.instance_17.setTransform(571,321.2,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_22();
	this.instance_18.setTransform(554.25,321.2,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_21();
	this.instance_19.setTransform(534.5,321.2,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_20();
	this.instance_20.setTransform(512.25,321.2,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_19();
	this.instance_21.setTransform(492.5,321.2,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_18();
	this.instance_22.setTransform(471.75,321.2,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_17();
	this.instance_23.setTransform(451.5,321.2,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_16();
	this.instance_24.setTransform(432,321.2,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_15();
	this.instance_25.setTransform(411,321.2,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_14();
	this.instance_26.setTransform(389.5,321.2,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_13();
	this.instance_27.setTransform(368.5,321.2,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_12();
	this.instance_28.setTransform(345,321.2,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_11();
	this.instance_29.setTransform(323.5,321.2,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_10();
	this.instance_30.setTransform(306.75,321.2,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_9();
	this.instance_31.setTransform(287,321.2,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_8();
	this.instance_32.setTransform(264.75,321.2,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_7();
	this.instance_33.setTransform(245,321.2,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_6();
	this.instance_34.setTransform(224.25,321.2,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_5();
	this.instance_35.setTransform(204,321.2,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_4();
	this.instance_36.setTransform(184.5,321.2,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_3();
	this.instance_37.setTransform(163.5,321.2,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_2();
	this.instance_38.setTransform(142,321.2,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_1();
	this.instance_39.setTransform(121,321.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(1));

	// temp_spacers
	this.instance_40 = new lib.CachedBmp_37();
	this.instance_40.setTransform(111.5,332.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(1));

	// end_gray_cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("ApmOxIAA9hITNAAIAAdhg");
	this.shape.setTransform(1026.55,583.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// white_covers_foos_pinpoints
	this.fooNew = new lib.Symbol5();
	this.fooNew.name = "fooNew";
	this.fooNew.setTransform(384.2,404.4,1,1.0638,0,0,0,0,0.1);

	this.foo2 = new lib.Symbol5();
	this.foo2.name = "foo2";
	this.foo2.setTransform(629.3,625.3,1,1.1362,0,0,0,0,0.2);
	this.foo2.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(100, 100, 0, 0))];
	this.foo2.cache(-4,-2,250,12);

	this.foo = new lib.Symbol5();
	this.foo.name = "foo";
	this.foo.setTransform(628.3,520.3,1,1.0638,0,0,0,0,0.1);
	this.foo.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(100, 100, 0, 0))];
	this.foo.cache(-4,-2,250,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.foo},{t:this.foo2},{t:this.fooNew}]}).wait(1));

	// white_covers_orange_bars
	this.whiteCover3 = new lib.Symbol5();
	this.whiteCover3.name = "whiteCover3";
	this.whiteCover3.setTransform(135.25,404.2,0.999,1.0642,0,0,0,0.1,0.2);

	this.whiteCover2 = new lib.Symbol5();
	this.whiteCover2.name = "whiteCover2";
	this.whiteCover2.setTransform(380.25,625.3,1,1.1967,0,0,0,0,0.1);

	this.whiteCover1 = new lib.Symbol5();
	this.whiteCover1.name = "whiteCover1";
	this.whiteCover1.setTransform(380.25,520.3,1,1.0638,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.whiteCover1},{t:this.whiteCover2},{t:this.whiteCover3}]}).wait(1));

	// slider3
	this.slider3 = new lib.PoPSliderMC();
	this.slider3.name = "slider3";
	this.slider3.setTransform(379.9,629.7);

	this.timeline.addTween(cjs.Tween.get(this.slider3).wait(1));
	this.slider3.addEventListener("tick", AdobeAn.handleFilterCache);

	// sliderNew
	this.sliderNew = new lib.Slider();
	this.sliderNew.name = "sliderNew";
	this.sliderNew.setTransform(131.3,378.75);

	this.timeline.addTween(cjs.Tween.get(this.sliderNew).wait(1));

	// slider1
	this.slider = new lib.Slider();
	this.slider.name = "slider";
	this.slider.setTransform(380.3,494.75);

	this.timeline.addTween(cjs.Tween.get(this.slider).wait(1));

	// slider2
	this.slider2 = new lib.Slider();
	this.slider2.name = "slider2";
	this.slider2.setTransform(380.3,600.75);

	this.timeline.addTween(cjs.Tween.get(this.slider2).wait(1));

	// orange_covers
	this.orangeCover2 = new lib.orangeCover_mc();
	this.orangeCover2.name = "orangeCover2";
	this.orangeCover2.setTransform(503.45,627.1,1,1,0,0,0,123.2,0);
	this.orangeCover2.visible = false;

	this.orangeCover1 = new lib.orangeCover_mc();
	this.orangeCover1.name = "orangeCover1";
	this.orangeCover1.setTransform(503.45,521.7,1,1,0,0,0,123.2,0);
	this.orangeCover1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.orangeCover1},{t:this.orangeCover2}]}).wait(1));

	// dots
	this.instance_41 = new lib.CachedBmp_38();
	this.instance_41.setTransform(131,344.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(1));

	// yellow_bar_new
	this.yellowNew = new lib.YellowBar();
	this.yellowNew.name = "yellowNew";
	this.yellowNew.setTransform(380.5,407.45);

	this.timeline.addTween(cjs.Tween.get(this.yellowNew).wait(1));

	// yellow_bar_1
	this.yellow1 = new lib.YellowBar();
	this.yellow1.name = "yellow1";
	this.yellow1.setTransform(627,523.45);

	this.timeline.addTween(cjs.Tween.get(this.yellow1).wait(1));

	// yellow_bar_2
	this.yellow2 = new lib.YellowBar();
	this.yellow2.name = "yellow2";
	this.yellow2.setTransform(627,629.75);

	this.timeline.addTween(cjs.Tween.get(this.yellow2).wait(1));

	// new_bars_background
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#019047").s().p("AzeDZIAAigMAm9AAAIAACggAzegQIAAjIMAm9AAAIAADIg");
	this.shape_1.setTransform(255.975,405.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0741A").s().p("EAn6ADFMhVoAAAIAAigMBbSAAAIALALIl1FygEgtugAkIAAjIMBVoAAAIAAi0IF1FxIgLALIkxAAIAAAAg");
	this.shape_2.setTransform(673.35,407.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// bars_background
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#71797E").s().p("AziLrIAAigMAkCAAAIAAgBIC7AAIAACeIAGAAIAAACIgTAAIAAABgAziIBIAAjIMAkCAAAIAAAAIC7AAIAADGIADAAIAAACIgQAAIAAAAgAzik4IAAigMAm9AAAIAACdIADAAIAAACIAAABgAzioiIAAjIMAm9AAAIAADGIAIAAIAAACIAAAAg");
	this.shape_3.setTransform(256.375,574.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#019047").s().p("AACSTIAAgCIgFAAIAAieMAkCAAAIAAgBIC5AAIAAABIAACeIgKAAIAAAAMglPAAAIAAACgAAAOpIAAgBIgDAAIAAjGMAkCAAAIAAgBIC5AAIAAABIAADFIgKAAIAAABMglZAAAIAAABgAC6BvIi6AAIAAgCIgDAAIAAicIAAgBMAm7AAAIAAADIAACcgAA/h6Ig7AAIAAgCIgHAAIAAjFIAAgBMAm7AAAIAAADIAADFgEgm2gOAIAAgBMAmwAAAIAAABgEgm2gSRIAAgBMAmwAAAIAAABg");
	this.shape_4.setTransform(381.05,532.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0741A").s().p("EAnYALWMhUFAAAIAAgCMAlPAAAIAAgBIAKAAIAAidMA0XAAAIALALIl2FxgEgs3AHsIAAgCMAlZAAAIAAAAIAKAAIAAjGMAusAAAIAAi1IF2FyIgLALIkxAAIAAAAgEAnYgFLMhSpAAAIAAgCMAj9AAAIAAieMA0XAAAIALALIl2FygEgtMgI0IAAgDMAl4AAAIAAjFMAusAAAIAAi1IF2FxIgLALIkxAAIAAABg");
	this.shape_5.setTransform(676.7,576.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// white
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EhBKAIzIAAiTMB+NAAAIAABRIEIAAIAABCgEhBKgHoIAAhKMCCVAAAIAABKg");
	this.shape_6.setTransform(548.4,576.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

	// grey_back
	this.instance_42 = new lib.CachedBmp_43();
	this.instance_42.setTransform(16.5,387.5,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_42();
	this.instance_43.setTransform(21.7,609.2,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_41();
	this.instance_44.setTransform(11.45,563.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_40();
	this.instance_45.setTransform(16.5,500.05,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_39();
	this.instance_46.setTransform(2.55,343.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42}]}).wait(1));

	// Keys
	this.text_23 = new cjs.Text("Past fiscal year, unavailable for obligations ", "normal 400 16px 'Roboto'", "#71797E");
	this.text_23.lineHeight = 18;
	this.text_23.parent = this;
	this.text_23.setTransform(105.15,935.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_23);
	}

	this.btn_tip3 = new lib.Symbol7();
	this.btn_tip3.name = "btn_tip3";
	this.btn_tip3.setTransform(208.5,915.05);
	new cjs.ButtonHelper(this.btn_tip3, 0, 1, 1);

	this.btn_tip2 = new lib.Symbol7();
	this.btn_tip2.name = "btn_tip2";
	this.btn_tip2.setTransform(478.5,885.05);
	new cjs.ButtonHelper(this.btn_tip2, 0, 1, 1);

	this.btn_tip1 = new lib.Symbol7();
	this.btn_tip1.name = "btn_tip1";
	this.btn_tip1.setTransform(321.5,856.1);
	new cjs.ButtonHelper(this.btn_tip1, 0, 1, 1);

	this.text_24 = new cjs.Text("to", "normal 400 16px 'Roboto'", "#C0741A");
	this.text_24.lineHeight = 18;
	this.text_24.lineWidth = 15;
	this.text_24.parent = this;
	this.text_24.setTransform(-135.5,877.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_24);
	}

	this.instance_47 = new lib.CachedBmp_46();
	this.instance_47.setTransform(6.05,775.5,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_45();
	this.instance_48.setTransform(3.45,801,0.5,0.5);

	this.text_25 = new cjs.Text("Unavailable ", "normal 400 16px 'Roboto'", "#CC0000");
	this.text_25.lineHeight = 18;
	this.text_25.parent = this;
	this.text_25.setTransform(105.15,907.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_25);
	}

	this.text_26 = new cjs.Text("Available for 5 years to pay lagging cost/expenses", "normal 400 16px 'Roboto'", "#C0741A");
	this.text_26.lineHeight = 18;
	this.text_26.parent = this;
	this.text_26.setTransform(105.15,877.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_26);
	}

	this.text_27 = new cjs.Text("Available only to incur costs", "normal 400 16px 'Roboto'", "#BBB104");
	this.text_27.lineHeight = 18;
	this.text_27.parent = this;
	this.text_27.setTransform(105.15,848.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_27);
	}

	this.text_28 = new cjs.Text("Available for obligation to task order/CLIN", "normal 400 16px 'Roboto'", "#019047");
	this.text_28.lineHeight = 18;
	this.text_28.lineWidth = 345;
	this.text_28.parent = this;
	this.text_28.setTransform(105.15,822.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_28);
	}

	this.t12 = new cjs.Text("09/30/2016", "normal 400 16px 'Roboto'", "#BBB104");
	this.t12.name = "t12";
	this.t12.lineHeight = 21;
	this.t12.lineWidth = 130;
	this.t12.parent = this;
	this.t12.setTransform(-119.4,848.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.t12);
	}

	this.txt13 = new cjs.Text("09/30/2015", "italic 500 16px 'Roboto'", "#019047");
	this.txt13.name = "txt13";
	this.txt13.lineHeight = 23;
	this.txt13.lineWidth = 92;
	this.txt13.parent = this;
	this.txt13.setTransform(-114.1,822.5);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt13);
	}

	this.txt11 = new cjs.Text("09/30/2021", "normal 400 16px 'Roboto'", "#CC0000");
	this.txt11.name = "txt11";
	this.txt11.lineHeight = 23;
	this.txt11.lineWidth = 90;
	this.txt11.parent = this;
	this.txt11.setTransform(-119.4,907.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt11);
	}

	this.txt10 = new cjs.Text("09/30/2021", "normal 400 16px 'Roboto'", "#C0741A");
	this.txt10.name = "txt10";
	this.txt10.lineHeight = 23;
	this.txt10.lineWidth = 92;
	this.txt10.parent = this;
	this.txt10.setTransform(-114.25,877.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt10);
	}

	this.txt9 = new cjs.Text("10/01/2016", "normal 400 16px 'Roboto'", "#C0741A");
	this.txt9.name = "txt9";
	this.txt9.lineHeight = 23;
	this.txt9.lineWidth = 90;
	this.txt9.parent = this;
	this.txt9.setTransform(-229.3,877.75);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.txt9);
	}

	this.instance_49 = new lib.CachedBmp_44();
	this.instance_49.setTransform(52.8,824.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.txt9},{t:this.txt10},{t:this.txt11},{t:this.txt13},{t:this.t12},{t:this.text_28},{t:this.text_27},{t:this.text_26},{t:this.text_25},{t:this.instance_48},{t:this.instance_47},{t:this.text_24},{t:this.btn_tip1},{t:this.btn_tip2},{t:this.btn_tip3},{t:this.text_23}]}).wait(1));

	// Layer_1
	this.instance_50 = new lib.Symbol3("synched",0);
	this.instance_50.setTransform(588,541.15);
	this.instance_50.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-255.2,488,1393.2,553.2);
// library properties:
lib.properties = {
	id: '0E5D06948DE2114F8538EE6E08CC1C62',
	width: 1100,
	height: 976,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_45.png?1678810644462", id:"CachedBmp_45"},
		{src:"images/CachedBmp_39.png?1678810644462", id:"CachedBmp_39"},
		{src:"images/header.png?1678810644462", id:"header"},
		{src:"images/poa_interactive_atlas_1.png?1678810644403", id:"poa_interactive_atlas_1"},
		{src:"images/poa_interactive_atlas_2.png?1678810644403", id:"poa_interactive_atlas_2"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1678810644462", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1678810644462", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1678810644462", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0E5D06948DE2114F8538EE6E08CC1C62'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;