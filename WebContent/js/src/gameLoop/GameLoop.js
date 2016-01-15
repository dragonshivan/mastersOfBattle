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
	this.FPSLocal = 0;
	
	this.UPSLocalIntervalSeconds = 2;
	this.updatesCountLocal = 0;
	this.updatesCountLocalStartTimeMs = 0;
	this.UPSLocal = 0;
};

/**
 * @public
 */
GAME_LOOP.GameLoop.prototype.start = function() {
	this.initFPSMeasurement();
	this.initUPSMeasurement();
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
	this.updateUPS();
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
	
	this.updateFPS();
	if(this.showFPS) {
		this.displayFPS();
		this.displayUPS();
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
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.initUPSMeasurement = function() {
	this.updatesCountLocalStartTimeMs = this.getCurrentTimeMs();
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
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.updateUPS = function() {
	var currentTimeMs = this.getCurrentTimeMs();
	
	var passedTimeLocalSeconds = (currentTimeMs - this.updatesCountLocalStartTimeMs) / 1000;
	if(passedTimeLocalSeconds >= this.UPSLocalIntervalSeconds) {
		this.UPSLocal = this.updatesCountLocal / passedTimeLocalSeconds;
		this.updatesCountLocal = 0;
		this.updatesCountLocalStartTimeMs = currentTimeMs;
	}
	this.updatesCountLocal++;
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayFPS = function() {
	this.context.fillStyle = 'rgba(225,225,225,0.75)';
	this.context.fillRect(0,0,53,15);
	
	this.context.fillStyle = "black";	
	this.context.font = "11px Arial";
	this.context.fillText("FPS: " + this.round1Decimal(this.FPSLocal), 2, 12);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayUPS = function() {
	this.context.fillStyle = 'rgba(225,225,225,0.75)';
	this.context.fillRect(0,15,53,15);
	
	this.context.fillStyle = "black";	
	this.context.font = "11px Arial";
	this.context.fillText("UPS: " + this.round1Decimal(this.UPSLocal), 2, 27);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.round1Decimal = function(number) {
	return parseFloat(Math.round(number * 100) / 100).toFixed(1);
};
