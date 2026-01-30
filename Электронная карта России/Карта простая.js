(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Карта простая_atlas_1", frames: [[0,1345,622,178],[624,1345,47,77],[0,0,2006,1343]]}
];


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



(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_8 = function() {
	this.initialize(img.CachedBmp_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_5 = function() {
	this.initialize(img.CachedBmp_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4016,2686);


(lib.CachedBmp_13 = function() {
	this.initialize(ss["Карта простая_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Карта простая_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ФизическаякартаРоссии = function() {
	this.initialize(ss["Карта простая_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.sssrbtmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("СССР", "20px 'Times New Roman'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 60;
	this.text.parent = this;
	this.text.setTransform(32.95,19.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap6kwIT1AAIAAJhIz1AAg");
	this.shape.setTransform(63.475,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC33").s().p("Ap6ExIAAphIT1AAIAAJhg");
	this.shape_1.setTransform(63.475,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sssrbtmove, new cjs.Rectangle(-1,-1,129,63), null);


(lib.sssr_railwaybt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Железные дороги СССР", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(4.5,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sssr_railwaybt, new cjs.Rectangle(-0.2,0.8,81.2,48.900000000000006), null);


(lib.sssr_border_19451991bt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text(" Граница СССР\n     1945-1991\n         годы ", "11px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 14;
	this.text.lineWidth = 75;
	this.text.parent = this;
	this.text.setTransform(2.8,3.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sssr_border_19451991bt, new cjs.Rectangle(-0.2,0.8,81.2,48.900000000000006), null);


(lib.sssr_border_1941bt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Граница СССР\n1941 год", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 77;
	this.text.parent = this;
	this.text.setTransform(2,7.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sssr_border_1941bt, new cjs.Rectangle(-0.2,0.8,81.3,49.400000000000006), null);


(lib.sssr_border_1939bt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Граница СССР\n1939 год", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 77;
	this.text.parent = this;
	this.text.setTransform(2,7.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sssr_border_1939bt, new cjs.Rectangle(-0.2,0.8,81.3,49.400000000000006), null);


(lib.ribtmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("", "20px 'TimesNewRomanPSMT'", "#663399");
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(9.35,13.95);

	this.text_1 = new cjs.Text("Росcийская Империя", "20px 'Times New Roman'");
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 98;
	this.text_1.parent = this;
	this.text_1.setTransform(12.85,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap6kwIT1AAIAAJhIz1AAg");
	this.shape.setTransform(63.475,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC33").s().p("Ap6ExIAAphIT1AAIAAJhg");
	this.shape_1.setTransform(63.475,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ribtmove, new cjs.Rectangle(-1,-1,129,63), null);


(lib.ri_railwaybt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Железные дороги РИ", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 61;
	this.text.parent = this;
	this.text.setTransform(11.15,9.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ri_railwaybt, new cjs.Rectangle(-0.2,0.8,81.2,48.900000000000006), null);


(lib.ri_border_1914bt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Граница РИ\n1914 год", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(4.5,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC3300").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ri_border_1914bt, new cjs.Rectangle(-0.2,0.8,81.2,48.900000000000006), null);


(lib.rfbtmove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Российская Федерация", "20px 'Times New Roman'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(13.6,8.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap6kwIT1AAIAAJhIz1AAg");
	this.shape.setTransform(63.475,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC33").s().p("Ap6ExIAAphIT1AAIAAJhg");
	this.shape_1.setTransform(63.475,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rfbtmove, new cjs.Rectangle(-1,-1,129,63), null);


(lib.rf_railwaybt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Железные дороги РФ", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(4.5,6.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AlBjqIKDAAQBKAAAABKIAAFBQAABKhKAAIqDAAQhKAAAAhKIAAlBQAAhKBKAAg");
	this.shape.setTransform(40.375,25.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("AlBDrQhKAAAAhKIAAlBQAAhKBKABIKDAAQBKgBAABKIAAFBQAABKhKAAg");
	this.shape_1.setTransform(40.375,25.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rf_railwaybt, new cjs.Rectangle(-0.2,0.8,81.2,48.900000000000006), null);


(lib.new_menubt_close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(3,1,1).p("AhNBIIBNhIIBOBJAAAAAIBOhIAhNhIIBNBI");
	this.shape.setTransform(10.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhihcIDFgBIAAC7IjFAAg");
	this.shape_1.setTransform(10.625,10.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF66").s().p("AhiBeIAAi6IDFgBIAAC7gABOBJIhOhJIBNhHIhNBHIhNhIIBNBIIhNBIIBNhIgAAAAAgAAAAAg");
	this.shape_2.setTransform(10.625,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_menubt_close, new cjs.Rectangle(-0.3,0.1,21.900000000000002,20.799999999999997), null);


(lib.new_menubt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Меню\n  ЖД", "12px 'Times New Roman'");
	this.text.lineHeight = 15;
	this.text.lineWidth = 33;
	this.text.parent = this;
	this.text.setTransform(5.9,7.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiHjRIEPAAQBKAAAABKIAAEPQAABKhKAAIkPAAQhKAAAAhKIAAkPQAAhKBKAAg");
	this.shape.setTransform(22.525,21.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AiHDSQhKAAAAhKIAAkPQAAhKBKAAIEPAAQBKAAAABKIAAEPQAABKhKAAg");
	this.shape_1.setTransform(22.525,21.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_menubt, new cjs.Rectangle(0.6,-0.3,43.9,43.9), null);


(lib.new_border_menubt_close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAAAIBOhIAhNBIIBNhIAhNhIIBNBIIBOBJ");
	this.shape.setTransform(10.6,10.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhihcIDFgBIAAC7IjFAAg");
	this.shape_1.setTransform(10.625,10.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0033").s().p("AhiBeIAAi6IDFgBIAAC7gAAAAAIBOBJIhOhJIBNhHIhNBHIhNhIIBNBIIhNBIIBNhIgAAAAAg");
	this.shape_2.setTransform(10.625,10.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_border_menubt_close, new cjs.Rectangle(-0.3,0.1,21.900000000000002,20.799999999999997), null);


(lib.new_border_menubt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Меню границ", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 36;
	this.text.parent = this;
	this.text.setTransform(5.15,5.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AiHjRIEPAAQBKAAAABKIAAEPQAABKhKAAIkPAAQhKAAAAhKIAAkPQAAhKBKAAg");
	this.shape.setTransform(22.525,21.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0033").s().p("AiHDSQhKAAAAhKIAAkPQAAhKBKAAIEPAAQBKAAAABKIAAEPQAABKhKAAg");
	this.shape_1.setTransform(22.525,21.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.new_border_menubt, new cjs.Rectangle(0.6,-0.3,43.9,43.9), null);


(lib.физ_карта_кнопка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text(" Физ\nКарта", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 32;
	this.text.parent = this;
	this.text.setTransform(22.1,21.35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgslNIBZAAQB4AABVBUQBVBVAAB4IAABZQAAB4hVBVQhVBUh4AAIhZAAQh4AAhVhUQhVhVAAh4IAAhZQAAh4BVhVQBVhUB4AAg");
	this.shape.setTransform(37.55,37.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669900").s().p("AgsFPQh4AAhVhWQhUhUgBh4IAAhZQABh4BUhVQBVhVB4AAIBZAAQB4AABUBVQBVBVABB4IAABZQgBB4hVBUQhUBWh4AAg");
	this.shape_1.setTransform(37.55,37.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.физ_карта_кнопка, new cjs.Rectangle(3.1,2.8,68.9,68.9), null);


(lib.debugbt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("     Новые\n   регионы", "20px 'Times New Roman'");
	this.text.lineHeight = 24;
	this.text.lineWidth = 106;
	this.text.parent = this;
	this.text.setTransform(9.95,6.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap6kwIT1AAIAAJhIz1AAg");
	this.shape.setTransform(63.475,30.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCC33").s().p("Ap6ExIAAphIT1AAIAAJhg");
	this.shape_1.setTransform(63.475,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.debugbt, new cjs.Rectangle(-1,-1,129,63), null);


(lib.слойФ_ФИЗ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ФизическаякартаРоссии();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойФ_ФИЗ, new cjs.Rectangle(0,0,2006,1343), null);


(lib.слойК_РФ = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EASrg3QMglVAAAIAAGtEgAwArWQAaAFAZAXQAhAcAHAAQAzAFAMgpQAGgVAGgGQALgMAaACQAeADAtBBQAtBAgDAhQgCASgJAJQgJAJgBAPQgCAVATANQAIAFANAHQAKgRAmADQALABAKAJQAKAJAOACQAcACANggQAJgWgBgbQAWALAIgOQAEgUACgHQgJgLgHgIQAQgBAYgGQAXACAUAYQATAYAUACQAOABAXgEIABgWIBhAJQACARACAQQAjgXA5giQAxgeAZgUQAEgDAJgHIAhADQgUAyA1AIQgOAdAUAqQANAeAFASQAEAOgBAIQAagEAEAVQACAKgFAiQgEAeAGAKQAKAPAhgKQABAAABAAQAAAAAAABQgIAUgDAQQgCAKgDASQgegCgyAPQgpAMgqgMQAAAGAEALQAGABAVAMIgDAiIgLgBQgEgXgmgDIgYAJQgYAOgGAQQAXAIgIAVQgDAhgwAjQguAjgggDQgGgBgJgLQgKgPgBgUQgBgLgVgKQgdgPgCgBQgEgEgFgEQgagTgpgOQgkgNgQgCQgSgBhYA1QgIgPgJgMQg2hFh6AOIAAgjIgMAAIghAAIgPAZIgZAAIAFgFIAAgZQglgPgSAAQgFAAgKAKIgeAAIAZgPQgFgRgVgMQgcgLgOgGQgzgVAFgvQgZAGgmAMQgDABgkAAQgGAAgHAAQgOAAgLAAQgLgIgHgFIAAAAQgCgBAAAAQgCgBgCgBQgSgJgSAFQgBgIgBgGIgIgBQAAhJgCgJQgKgugzANQgPgHgHgCIAAAAQgDgEgFgCQgCgBgBgBQgLgLgHgDQgBAAgCgBQgZgCgDgXQAAgagFgHQgIgKgZgKQgbgKgFgFIgKAAIAAAoQgfg+gsgXQAaACAIgDQALgEAAgPQAAgIgKgOQgNgSgCgFIAyAAQAAgMgUgZQgUgZAAgPQAAgUAUgJQALgEATgFQBLgTBBAbQANAFAHAfQAGAZASADQACAAABABQATABAGgFQAMgEAIgJQAPgRA4AKQAIgZAFgGQAJgLAXACQAEAAADABIAAAAQAnAHAcAtQAJAQAlBWQACAAABAAQAAABAAAAgEgFPAp5QAQABAMgEEgC/AwlIAJhNQAJg2ALgUQAXgnAwAbQAKhgAAgBQAJgzAXgXQABgBAAAAEAEhAvLQgCAEgBAEQgLA/gOAZIAhACIgFA9Qg5ANgFABQgVAJgIAPIgWAAIgIANEgSqArTIAAL+EALIAuQQADAaAFAZQgOACgLAQQgLATAFAZQgVASguAbQgEAngRBJQgDAfAKAVQAJAUgTAo");
	this.shape.setTransform(119.45,353.7125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AHJGgQgGAAgJgLQgLgPgBgUQAAgMgVgKIgfgQIgJgHQgbgUgpgOQgjgNgRgBQgRgChZA2QgHgPgKgNQg1hEh5AOIAAgjIgMAAIAIgNIAWAAQAIgPAUgJIA9gPIAFg8IghgDQAPgZALg+IADgIIgDAIQgLA+gPAZIAhADIgFA8Ig9APQgUAJgIAPIgWAAIgIANIghAAIgPAZIgZAAIAFgFIAAgZQglgPgSAAQgFAAgKAKIgeAAIAZgPQgFgSgWgLIgqgRQgzgVAEgwQgYAGgmANQgDABgkAAIgNAAIgagBIgRgNIAAAAIgDAAIgDgCQgSgKgSAGIgDgPIgHAAQAAhIgCgJQgLgvgzAOQgPgIgGgBIAAgBQgEgDgFgCIgCgDQgLgKgHgEIgDAAQgZgDgDgWQAAgbgFgGQgIgKgZgKQgbgLgFgEIgKAAIAAAoQgfg/gsgWQAaABAIgCQALgEAAgPQAAgJgKgOQgNgSgCgEIAyAAQAAgMgUgZQgUgZAAgQQAAgTAUgJQALgFATgEQBLgUBAAbQAOAGAHAeQAGAZASAEIADAAQATACAGgGQAMgEAHgJQAPgRA5ALQAIgZAEgGQAKgMAXADIAHABIAAAAQAnAGAcAuQAJAPAlBWIACABIABAAIgBABQgYAXgJAzIgJBhIgBAAQgSgKgPgBIgBAAIAAAAQgWABgNAVIgBAAIAAABIAAABQgMAUgIA0IgJBOIAJhOQAIg0AMgUIAAgBIAAgBIABAAQANgVAWgBIAAAAIABAAQAPABASAKIABAAIAJhhQAJgzAYgXIABgBQAZAGAbAWQAgAcAIABQAzAEAMgoQAGgVAGgHQALgMAaADQAdACAtBBQAsBBgCAhQgCASgJAJQgJAJgCAOQgCAWATAMIAWAMQAJgRAnAEQALAAAKAKQAKAIAOABQAcACAMgeQAKgXgBgbQAWALAHgOIAHgbIgQgSQAQgBAYgGQAXACATAYQAUAXAUACQAOABAWgDIACgWIBhAIIAEAiQADAaAFAYQgPACgLAQQgHAMAAAPQAAAHACAIIAAACQgVARgvAcQgDAmgRBJIgBAOQAAAWAHAQQADAHAAAIQAAASgMAcQAMgcAAgSQAAgIgDgHQgHgQAAgWIABgOQARhJADgmQAvgcAVgRIAAgCQgCgIAAgHQAAgPAHgMQALgQAPgCQgFgYgDgaQAjgXA4gjQAygeAZgUIAMgKIAhADQgTAyA1AJQgOAcAUArQANAdAFASQADANAAAIQAagDADAUQADAKgFAjQgFAeAHAKQAJAOAigJIACgBIgBABQgIAUgDARIgFAbQgdgCgyAPQgpANgqgMQgBAFAFAMQAFAAAWANIgDAhIgLgBQgFgXgmgDIgXAKQgZANgFARQAXAHgJAWQgDAggvAkQgrAggeAAIgFgBg");
	this.shape_1.setTransform(142.3875,655.4695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_РФ, new cjs.Rectangle(-1,-1,240.9,709.5), null);


(lib.слойК_ЖД_СССР = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_ЖД_СССР, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_ЖД_РФ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_ЖД_РФ, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_ЖД_РИ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_ЖД_РИ, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_Г_СССР_1945_1991 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_Г_СССР_1945_1991, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_Г_СССР_1941 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_Г_СССР_1941, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_Г_СССР_1939 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_Г_СССР_1939, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.About_programmbt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("О программе", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 69;
	this.text.parent = this;
	this.text.setTransform(47.5,8.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArciaIW5AAQBFAAAABGIAACqQAABFhFAAI25AAQhFAAAAhFIAAiqQAAhGBFAAg");
	this.shape.setTransform(82.05,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#669900").s().p("ArbCbQhGAAAAhGIAAiqQAAhFBGAAIW4AAQBFAAAABFIAACqQAABGhFAAg");
	this.shape_1.setTransform(82.05,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.About_programmbt, new cjs.Rectangle(0.9,-0.1,162.4,33), null);


(lib.слойФ_2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойФ_2, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойФ_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойФ_1, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойФ_РИ = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойФ_РИ, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.слойК_Г_РИ_1914 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.слойК_Г_РИ_1914, new cjs.Rectangle(-0.5,-0.5,2008,1343), null);


(lib.About_programm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.text = new cjs.Text("Сделано на HTML5", "12px 'Times New Roman'", "#FFFFFF");
	this.text.lineHeight = 15;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(219.2,49.6);

	this.text_1 = new cjs.Text("Версия - 1906", "12px 'Times New Roman'", "#FFFFFF");
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 72;
	this.text_1.parent = this;
	this.text_1.setTransform(252.15,67.05);

	this.text_2 = new cjs.Text("Подготовили:\n   Панкратов К.А.\n   Панкратов С.К.", "12px 'Times New Roman'", "#FFFFFF");
	this.text_2.lineHeight = 15;
	this.text_2.lineWidth = 92;
	this.text_2.parent = this;
	this.text_2.setTransform(32.35,23.6);

	this.text_3 = new cjs.Text("Интерактивная электронная карта России", "12px 'Times New Roman'", "#FFFFFF");
	this.text_3.lineHeight = 15;
	this.text_3.lineWidth = 214;
	this.text_3.parent = this;
	this.text_3.setTransform(68.55,6.15);

	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(20.85,-0.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-0.5,1.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.About_programm, new cjs.Rectangle(-0.5,-0.5,332.4,89), null);


// stage content:
(lib.Картапростая = function(mode,startPosition,loop,reversed) {
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
		var _this = this;
		
		function onAppStart() { //работает
		  console.log("Приложение запущено. Выполняется начальная настройка.");
		  //Тест функции запуска: сперва всё скрываем
			_this.Ф_РИ.visible = true; //работает
			_this.Ф_1.visible = false; //работает
			_this.Ф_2.visible = false; //работает
			_this.new_regions.visible = false; //работает
			_this.about_programm.visible = false; //работает
			_this.Ф_ФИЗ.visible = false; //работает
			_this.ri_railwaybt.visible = false; //работает
			_this.ri_railway.visible = false; //работает
			_this.sssr_railwaybt.visible = false; //работает
			_this.sssr_railway.visible = false; //работает
			_this.rf_railwaybt.visible = false; //работает
			_this.rf_railway.visible = false; //работает
			_this.new_menubt_close.visible = false; //работает
			_this.new_border_menubt_close.visible = false; //работает
			_this.ri_border.visible = false;
			_this.К_Г_СССР_1945_1991.visible = false; //работает
			_this.К_Г_СССР_1941.visible = false; //работает
			_this.К_Г_СССР_1939.visible = false; //работает
			_this.ri_border_1914bt.visible = false; //работает
			_this.sssr_border_1939bt.visible = false; //работает
			_this.sssr_border_1941bt.visible = false; //работает
			_this.sssr_border_1945_1991bt.visible = false; //работает
			_this.new_border_menubt_close.visible = false; //работает
		};
		
		onAppStart();
		
		//_this.bug.on('click', function () {
		//_this.mycheckbox.on('change', function () {
		_this.ribt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.Ф_РИ.visible = true; //работает
			_this.Ф_1.visible = false; //работает
			_this.Ф_2.visible = false; //работает
			_this.about_programm.visible = false; //работает
			_this.Ф_ФИЗ.visible = false; //работает
			//_this.pryamoug.rotation += 30;
			console.log('Фон РИ активирован');
		});
		
		
		//добавить настройку интерфейса при старте приложения - работает
		
		//addEventListener(Event.ACTIVATE, zapusk); //запуск приложения - так было сделано ранее
		
		
		_this.sssrbt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.Ф_РИ.visible = false; //работает
			_this.Ф_1.visible = true; //работает
			_this.Ф_2.visible = false; //работает
			_this.new_regions.visible = false; //работает
			_this.Ф_ФИЗ.visible = false; //работает
			//_this.treug.rotation += 30;
			console.log('Фон СССР активирован');
		});
		
		_this.rfbt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.Ф_РИ.visible = false; //работает
			_this.Ф_1.visible = false; //работает
			_this.Ф_2.visible = true; //работает
			_this.new_regions.visible = false; //работает
			_this.Ф_ФИЗ.visible = false; //работает
			//_this.treug.rotation += 30;
			console.log('Фон РФ активирован');
		});
		
		_this.new_regionsbt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.Ф_РИ.visible = false; //работает
			_this.Ф_1.visible = false; //работает
			_this.new_regions.visible = true; //работает
			_this.Ф_2.visible = true; //работает
			_this.Ф_ФИЗ.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Новые регионы после событий 20-х годов показаны');
		});
		
		_this.Ф_ФИЗbt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.Ф_РИ.visible = false; //работает
			_this.Ф_1.visible = false; //работает
			_this.new_regions.visible = false; //работает
			_this.Ф_2.visible = true; //работает
			_this.Ф_ФИЗ.visible = true; //работает
			//_this.oval.rotation += 30;
			console.log('Новые регионы после событий 20-х годов показаны');
		});
		
		_this.sssr_railwaybt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.sssr_railway.visible = true; //работает
			_this.ri_railway.visible = false; //работает
			_this.rf_railway.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Новые регионы после событий 20-х годов показаны');
		});
		
		_this.ri_railwaybt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.sssr_railway.visible = false; //работает
			_this.ri_railway.visible = true; //работает
			_this.rf_railway.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Новые регионы после событий 20-х годов показаны');
		});
		
		_this.rf_railwaybt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.sssr_railway.visible = false; //работает
			_this.ri_railway.visible = false; //работает
			_this.rf_railway.visible = true; //работает
			//_this.oval.rotation += 30;
			console.log('Новые регионы после событий 20-х годов показаны');
		});
		
		_this.new_menubt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.ri_railwaybt.visible = true; //работает
			_this.sssr_railwaybt.visible = true; //работает
			_this.rf_railwaybt.visible = true; //работает
			_this.new_menubt_close.visible = true; //работает
			//_this.oval.rotation += 30;
			console.log('Меню ЖД показано');
		});
		
		_this.new_menubt_close.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.ri_railwaybt.visible = false; //работает
			_this.sssr_railwaybt.visible = false; //работает
			_this.rf_railwaybt.visible = false; //работает
			_this.sssr_railway.visible = false; //работает
			_this.ri_railway.visible = false; //работает
			_this.rf_railway.visible = false; //работает
			_this.new_menubt_close.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню ЖД и соответствующие слои скрыты');
		});
		
		
		_this.ri_border_1914bt.on('click', function () { 
			_this.ri_border.visible = true; //работает
			_this.К_Г_СССР_1945_1991.visible = false; //работает
			_this.К_Г_СССР_1941.visible = false; //работает
			_this.К_Г_СССР_1939.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ показано');
		});
		
		_this.sssr_border_1939bt.on('click', function () { 
			_this.К_Г_СССР_1945_1991.visible = false; //работает
			_this.К_Г_СССР_1941.visible = false; //работает
			_this.К_Г_СССР_1939.visible = true; //работает
			_this.ri_border.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ показано');
		});
		
		_this.sssr_border_1941bt.on('click', function () { 
			_this.К_Г_СССР_1945_1991.visible = false; //работает
			_this.К_Г_СССР_1941.visible = true; //работает
			_this.К_Г_СССР_1939.visible = false; //работает
			_this.ri_border.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ показано');
		});
		
		_this.sssr_border_1945_1991bt.on('click', function () { 
			_this.К_Г_СССР_1945_1991.visible = true; //работает
			_this.К_Г_СССР_1941.visible = false; //работает
			_this.К_Г_СССР_1939.visible = false; //работает
			_this.ri_border.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ показано');
		});
		
		_this.new_border_menubt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.ri_border_1914bt.visible = true; //работает
			_this.sssr_border_1939bt.visible = true; //работает
			_this.sssr_border_1941bt.visible = true; //работает
			_this.sssr_border_1945_1991bt.visible = true; //работает
			_this.new_border_menubt_close.visible = true; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ показано');
		});
		
		_this.new_border_menubt_close.on('click', function () { //работает
			_this.ri_border.visible = false; //работает
			_this.К_Г_СССР_1945_1991.visible = false; //работает
			_this.К_Г_СССР_1941.visible = false; //работает
			_this.К_Г_СССР_1939.visible = false; //работает
			_this.ri_border_1914bt.visible = false; //работает
			_this.sssr_border_1939bt.visible = false; //работает
			_this.sssr_border_1941bt.visible = false; //работает
			_this.sssr_border_1945_1991bt.visible = false; //работает
			_this.new_border_menubt_close.visible = false; //работает
			//_this.oval.rotation += 30;
			console.log('Меню границ и соответствующие слои закрыты');
		});
		
		
		
		
		_this.about_programmbt.on('click', function () { //работает
			//_this.getChildByName('mysymbolname').addEventListener('click', function() {	  //работает
			//_this.chboxbug.on('check', function () {
			//_this.nazvanie.text = '1111111111111111';
			//блок с видимостью символа/области работает
			_this.about_programmbt.on('click', function () {
		    // Эта строка меняет значение на противоположное: 
		    // если было true, станет false, и наоборот
		    _this.about_programm.visible = !_this.about_programm.visible;
		
		    // Вывод в консоль для проверки состояния
		    if (_this.about_programm.visible) {
		        console.log("Окно открыто");
		    } else {
		        console.log("Окно закрыто");
		    }
		});
			//_this.oval.rotation += 30;
			console.log('Сообщение о программе выведено');
		});
		
		
		//добавить настройку интерфейса при старте приложения
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// выпадающее_меню1
	this.sssr_border_1945_1991bt = new lib.sssr_border_19451991bt();
	this.sssr_border_1945_1991bt.name = "sssr_border_1945_1991bt";
	this.sssr_border_1945_1991bt.setTransform(1037.65,26.9,0.976,0.97,0,0,0,40.6,25.2);

	this.sssr_border_1941bt = new lib.sssr_border_1941bt();
	this.sssr_border_1941bt.name = "sssr_border_1941bt";
	this.sssr_border_1941bt.setTransform(955.65,27.35,0.976,0.969,0,0,0,40.6,25.8);

	this.sssr_border_1939bt = new lib.sssr_border_1939bt();
	this.sssr_border_1939bt.name = "sssr_border_1939bt";
	this.sssr_border_1939bt.setTransform(872.65,27.55,0.976,0.969,0,0,0,40.6,25.9);

	this.ri_border_1914bt = new lib.ri_border_1914bt();
	this.ri_border_1914bt.name = "ri_border_1914bt";
	this.ri_border_1914bt.setTransform(788.9,27.6,1,1,0,0,0,40.4,25.3);

	this.rf_railwaybt = new lib.rf_railwaybt();
	this.rf_railwaybt.name = "rf_railwaybt";
	this.rf_railwaybt.setTransform(956.85,79.65,1,1,0,0,0,40.4,25.3);

	this.sssr_railwaybt = new lib.sssr_railwaybt();
	this.sssr_railwaybt.name = "sssr_railwaybt";
	this.sssr_railwaybt.setTransform(872.65,79.65,1,1,0,0,0,40.4,25.3);

	this.ri_railwaybt = new lib.ri_railwaybt();
	this.ri_railwaybt.name = "ri_railwaybt";
	this.ri_railwaybt.setTransform(789.9,82.75,1,1,0,0,0,41.4,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ri_railwaybt},{t:this.sssr_railwaybt},{t:this.rf_railwaybt},{t:this.ri_border_1914bt},{t:this.sssr_border_1939bt},{t:this.sssr_border_1941bt},{t:this.sssr_border_1945_1991bt}]}).wait(1));

	// меню
	this.new_border_menubt_close = new lib.new_border_menubt_close();
	this.new_border_menubt_close.name = "new_border_menubt_close";
	this.new_border_menubt_close.setTransform(332.45,176.5,2.267,2.3873,0,0,0,10.7,10.5);

	this.new_border_menubt = new lib.new_border_menubt();
	this.new_border_menubt.name = "new_border_menubt";
	this.new_border_menubt.setTransform(332.3,128.3,1.0727,1.0727,0,0,0,22.5,21.7);

	this.new_menubt_close = new lib.new_menubt_close();
	this.new_menubt_close.name = "new_menubt_close";
	this.new_menubt_close.setTransform(384.4,176.75,2.267,2.3873,0,0,0,10.4,10.6);

	this.new_menubt = new lib.new_menubt();
	this.new_menubt.name = "new_menubt";
	this.new_menubt.setTransform(384.9,128.3,1.0727,1.0727,0,0,0,22.5,21.7);

	this.Ф_ФИЗbt = new lib.физ_карта_кнопка();
	this.Ф_ФИЗbt.name = "Ф_ФИЗbt";
	this.Ф_ФИЗbt.setTransform(185.95,147.1,1,1,0,0,0,37.6,37.2);

	this.about_programmbt = new lib.About_programmbt();
	this.about_programmbt.name = "about_programmbt";
	this.about_programmbt.setTransform(327.15,19.7,1,1,0,0,0,82,16.4);

	this.new_regionsbt = new lib.debugbt();
	this.new_regionsbt.name = "new_regionsbt";
	this.new_regionsbt.setTransform(72.65,150.05,1,1,0,0,0,63.5,30.5);

	this.rfbt = new lib.rfbtmove();
	this.rfbt.name = "rfbt";
	this.rfbt.setTransform(343.95,72.55,1,1,0,0,0,63.5,30.5);

	this.sssrbt = new lib.sssrbtmove();
	this.sssrbt.name = "sssrbt";
	this.sssrbt.setTransform(207.85,72.55,1,1,0,0,0,63.5,30.5);

	this.ribt = new lib.ribtmove();
	this.ribt.name = "ribt";
	this.ribt.setTransform(72.65,72.55,1,1,0,0,0,63.5,30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ribt},{t:this.sssrbt},{t:this.rfbt},{t:this.new_regionsbt},{t:this.about_programmbt},{t:this.Ф_ФИЗbt},{t:this.new_menubt},{t:this.new_menubt_close},{t:this.new_border_menubt},{t:this.new_border_menubt_close}]}).wait(1));

	// К_Г_СССР_1939
	this.К_Г_СССР_1939 = new lib.слойК_Г_СССР_1939();
	this.К_Г_СССР_1939.name = "К_Г_СССР_1939";
	this.К_Г_СССР_1939.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.К_Г_СССР_1939).wait(1));

	// К_Г_СССР_1941
	this.К_Г_СССР_1941 = new lib.слойК_Г_СССР_1941();
	this.К_Г_СССР_1941.name = "К_Г_СССР_1941";
	this.К_Г_СССР_1941.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.К_Г_СССР_1941).wait(1));

	// К_Г_СССР_1945_1991
	this.К_Г_СССР_1945_1991 = new lib.слойК_Г_СССР_1945_1991();
	this.К_Г_СССР_1945_1991.name = "К_Г_СССР_1945_1991";
	this.К_Г_СССР_1945_1991.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.К_Г_СССР_1945_1991).wait(1));

	// К_Г_РИ_1914
	this.ri_border = new lib.слойК_Г_РИ_1914();
	this.ri_border.name = "ri_border";
	this.ri_border.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.ri_border).wait(1));

	// К_ЖД_РФ___РЖД_и_планы_строительства
	this.rf_railway = new lib.слойК_ЖД_РФ();
	this.rf_railway.name = "rf_railway";
	this.rf_railway.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.rf_railway).wait(1));

	// К_ЖД_СССР
	this.sssr_railway = new lib.слойК_ЖД_СССР();
	this.sssr_railway.name = "sssr_railway";
	this.sssr_railway.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.sssr_railway).wait(1));

	// К_ЖД_РИ
	this.ri_railway = new lib.слойК_ЖД_РИ();
	this.ri_railway.name = "ri_railway";
	this.ri_railway.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.ri_railway).wait(1));

	// О_программе
	this.about_programm = new lib.About_programm();
	this.about_programm.name = "about_programm";
	this.about_programm.setTransform(581.15,48.3,1,1,0,0,0,165.8,44.1);

	this.timeline.addTween(cjs.Tween.get(this.about_programm).wait(1));

	// Ф_ФИЗ_Физическая_карта
	this.Ф_ФИЗ = new lib.слойФ_ФИЗ();
	this.Ф_ФИЗ.name = "Ф_ФИЗ";
	this.Ф_ФИЗ.setTransform(1003,671.5,1,1,0,0,0,1003,671.5);

	this.timeline.addTween(cjs.Tween.get(this.Ф_ФИЗ).wait(1));

	// Ф_РИ_Единый_розовый_фон
	this.Ф_РИ = new lib.слойФ_РИ();
	this.Ф_РИ.name = "Ф_РИ";
	this.Ф_РИ.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.Ф_РИ).wait(1));

	// Ф_1_Единый_розовый_фон___СССР
	this.Ф_1 = new lib.слойФ_1();
	this.Ф_1.name = "Ф_1";
	this.Ф_1.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.Ф_1).wait(1));

	// Новые_регионы
	this.new_regions = new lib.слойК_РФ();
	this.new_regions.name = "new_regions";
	this.new_regions.setTransform(1003.5,671,1,1,0,0,0,1003.5,671);

	this.timeline.addTween(cjs.Tween.get(this.new_regions).wait(1));

	// Ф_2_Союз_республики_и_СНГ
	this.Ф_2 = new lib.слойФ_2();
	this.Ф_2.name = "Ф_2";
	this.Ф_2.setTransform(878.8,587.6,1,1,0,0,0,878.8,587.6);

	this.timeline.addTween(cjs.Tween.get(this.Ф_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1003,670.5,1004.5,672.5);
// library properties:
lib.properties = {
	id: 'FD5F6769AD43944DB15EB6A61868F7DE',
	width: 2007,
	height: 1342,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_12.png?1769790971392", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1769790971392", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png?1769790971392", id:"CachedBmp_10"},
		{src:"images/CachedBmp_9.png?1769790971392", id:"CachedBmp_9"},
		{src:"images/CachedBmp_8.png?1769790971392", id:"CachedBmp_8"},
		{src:"images/CachedBmp_7.png?1769790971392", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png?1769790971392", id:"CachedBmp_6"},
		{src:"images/CachedBmp_5.png?1769790971392", id:"CachedBmp_5"},
		{src:"images/CachedBmp_4.png?1769790971392", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png?1769790971392", id:"CachedBmp_3"},
		{src:"images/Карта простая_atlas_1.png?1769790971339", id:"Карта простая_atlas_1"}
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
an.compositions['FD5F6769AD43944DB15EB6A61868F7DE'] = {
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