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
GAME_LOOP.GameLoop = function(gameEntities, inputEventQueue, canvasWidth, canvasHeight, debugMode) {
	
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
	
	this.debugMode = debugMode === undefined ? false: debugMode;
	
	this.context = this.canvas.getContext('2d');
	
	this.lastLoopCallTime = 0;
	this.accumulatedTimeMs = 0;
	
	this.updateMetricsIntervalSeconds = 2;
	
	this.framesCount = 0;
	this.framesCountStartTimeMs = 0;
	this.FPS = 0;
	
	this.updatesCount = 0;
	this.updatesCountStartTimeMs = 0;
	this.UPS = 0;
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
	if(this.debugMode) {
		this.displayFPS();
		this.displayUPS();
		this.displayIPS();
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
	this.framesCountStartTimeMs = this.getCurrentTimeMs();
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.initUPSMeasurement = function() {
	this.updatesCountStartTimeMs = this.getCurrentTimeMs();
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.updateFPS = function() {
	var currentTimeMs = this.getCurrentTimeMs();
	
	var passedTimeSeconds = (currentTimeMs - this.framesCountStartTimeMs) / 1000;
	if(passedTimeSeconds >= this.updateMetricsIntervalSeconds) {
		this.FPS = this.framesCount / passedTimeSeconds;
		this.framesCount = 0;
		this.framesCountStartTimeMs = currentTimeMs;
	}
	this.framesCount++;
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.updateUPS = function() {
	var currentTimeMs = this.getCurrentTimeMs();
	
	var passedTimeSeconds = (currentTimeMs - this.updatesCountStartTimeMs) / 1000;
	if(passedTimeSeconds >= this.updateMetricsIntervalSeconds) {
		this.UPS = this.updatesCount / passedTimeSeconds;
		this.updatesCount = 0;
		this.updatesCountStartTimeMs = currentTimeMs;
	}
	this.updatesCount++;
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayFPS = function() {
	this.displayUpdateMetric("FPS", this.round1Decimal(this.FPS), 0);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayUPS = function() {
	this.displayUpdateMetric("UPS", this.round1Decimal(this.UPS), 1);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayIPS = function() {
	this.displayUpdateMetric("I", this.inputEventQueue.getSize(), 2);
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.displayUpdateMetric = function(metricLabel, metricValue, rowIndex) {
	this.context.fillStyle = 'rgba(225, 225, 225, 0.75)';
	this.context.fillRect(0, rowIndex * 15, 83, 15);
	
	this.context.fillStyle = "black";	
	this.context.font = "11px Arial";
	this.context.fillText(metricLabel + ": " + this.round1Decimal(metricValue), 2, 12 + (rowIndex * 15));
};

/**
 * @private
 */
GAME_LOOP.GameLoop.prototype.round1Decimal = function(number) {
	return parseFloat(Math.round(number * 100) / 100).toFixed(1);
};
