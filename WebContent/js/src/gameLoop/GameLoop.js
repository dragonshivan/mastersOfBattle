var GAME_LOOP = GAME_LOOP = GAME_LOOP || {};

/**
 * @public
 * @param {GAME_LOOP.GameEntity[]} gameEntities
 * @param {GAME_LOOP.Queue} inputEventQueue
 * @param {Number} canvasWidth
 * @param {Number} canvasHeight
 * @param {Boolean} displayFPS
 * @constructor
 */
GAME_LOOP.GameLoop = function(gameEntities, inputEventQueue, canvasWidth, canvasHeight, showFPS) {
	
	window.requestAnimationFrame = 
			window.requestAnimationFrame || /* Firefox 23 / IE 10 / Chrome */
			window.mozRequestAnimationFrame || /* Firefox < 23 */
			window.webkitRequestAnimationFrame || /* Safari */
			window.msRequestAnimationFrame || /* IE  */
			window.oRequestAnimationFrame; /* Opera */
	
	if(!window.requestAnimationFrame) {
		throw "Failed to get requestAnimationFrame function";
	}
	
	this.canvas = document.getElementById(GAME_LOOP.CANVAS_ID);
	
	this.gameEntities = gameEntities;
	this.inputEventQueue = inputEventQueue;
	this.canvas.width=canvasWidth;
	this.canvas.height=canvasHeight;
	
	this.showFPS = showFPS === undefined ? false: showFPS;
	
	this.context = this.canvas.getContext('2d');
	
	this.lastLoopCallTime = 0;
	this.accumulatedTimeMs = 0;
	
	this.FPSLocalIntervalSeconds = 2;
	this.framesCountLocal = 0;
	this.framesCountLocalStartTimeMs = 0;
	this.framesCountGlobal = 0;
	this.framesCountGlobalStartTimeMs = 0;
	this.FPSLocal = GAME_LOOP.DESIRED_FPS;
	this.FPSGlobal = GAME_LOOP.DESIRED_FPS
};

/**
 * @public
 */
GAME_LOOP.GameLoop.prototype.start = function() {
	this.initFPSMeasurement();
	this.lastLoopCallTime = this.getCurrentTimeMs();
	this.update();
};

/**
 * @rivate
 */
GAME_LOOP.GameLoop.prototype.update = function() {
	var self = this;
	
	var actualLoopDurationMs = self.getCurrentTimeMs() - self.lastLoopCallTime;
	self.lastLoopCallTime = self.getCurrentTimeMs();
	self.accumulatedTimeMs += actualLoopDurationMs;
	while(self.accumulatedTimeMs >= GAME_LOOP.FIXED_STEP_IDEAL_DURATION_MS) {
		self.processInput();
		self.updateState();
		self.accumulatedTimeMs -= GAME_LOOP.FIXED_STEP_IDEAL_DURATION_MS;
	}
	
	self.updateGraphics();	
	
	window.requestAnimationFrame(function() {self.update();});
};

/**
 * @rivate
 */
GAME_LOOP.GameLoop.prototype.processInput = function() {
	while(!this.inputEventQueue.isEmpty()) {
		var event = this.inputEventQueue.pop();
		for(var i = 0; i < this.gameEntities.length; i++) {
			this.gameEntities[i].processInput(event);
		}
	}
};

/**
 * @rivate
 */
GAME_LOOP.GameLoop.prototype.updateState = function() {		
	for(var i = 0; i < this.gameEntities.length; i++) {
		this.gameEntities[i].updateState();
	}	
	this.updateFPS();
};

/**
 * @rivate
 */
GAME_LOOP.GameLoop.prototype.updateGraphics = function() {
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	
	this.gameEntities.sort(this.gameEntityZIndexSort);
	for(var i=0; i<this.gameEntities.length; i++) {
		this.gameEntities[i].updateGraphics(this.context);
	}
	
	if(this.showFPS) {
		this.displayFPS();
	}
};	

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.getCurrentTimeMs = function() {
	return new Date().getTime();
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.gameEntityZIndexSort = function(gameEntity1, gameEntity2) {
	var val = gameEntity1.zIndex - gameEntity2.zIndex;;
	if(val == 0) {
		return gameEntity1.y - gameEntity2.y;
	}
	return val;
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.initFPSMeasurement = function() {
	this.framesCountLocalStartTimeMs = this.getCurrentTimeMs();
	this.framesCountGlobalStartTimeMs = this.getCurrentTimeMs();
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.updateFPS = function() {
	var currentTimeMs = this.getCurrentTimeMs();
	
	var passedTimeLocalSeconds = (currentTimeMs - this.framesCountLocalStartTimeMs) / 1000;
	if(passedTimeLocalSeconds >= this.FPSLocalIntervalSeconds) {
		this.FPSLocal = this.framesCountLocal / passedTimeLocalSeconds;
		this.framesCountLocal = 0;
		this.framesCountLocalStartTimeMs = currentTimeMs;
	}
	this.framesCountLocal++;
	
	var passedTimeGlobalSeconds = (currentTimeMs - this.framesCountGlobalStartTimeMs) / 1000;
	if(passedTimeGlobalSeconds != 0) {
		this.FPSGlobal =this.framesCountGlobal / passedTimeGlobalSeconds;
	}
	this.framesCountGlobal++;
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayFPS = function() {
	this.context.fillStyle = 'rgba(225,225,225,0.75)';
	this.context.fillRect(0,0,83,15);
	
	this.context.fillStyle = "black";	
	this.context.font = "11px Arial";
	this.context.fillText("FPS: " + this.round1Decimal(this.FPSLocal) + " | " + this.round1Decimal(this.FPSGlobal), 2, 12);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.round1Decimal = function(number) {
	return parseFloat(Math.round(number * 100) / 100).toFixed(1);
};
