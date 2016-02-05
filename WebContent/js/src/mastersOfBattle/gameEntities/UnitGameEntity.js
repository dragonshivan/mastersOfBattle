var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntity = function(
		imageAtlasesStanding,
		imageAtlasesWalking,
		imageAtlasesPerformingAction,
		imageAtlasesTakingDamage,
		imageAtlasesActionEffect,
		unitGameState,
		startingOrienation) {
	
	GAME_LOOP.GameEntity.call(this, 
			unitGameState.unitStats.startCellX * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitStats.startCellY * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitCharacteristics.sizeColumns * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitCharacteristics.sizeRows * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT);
	
	this.imageAtlasesByState = [];
	this.imageAtlasesByState[MASTERS_OF_BATTLE.Constants.Unit.State.Standing] = imageAtlasesStanding;
	this.imageAtlasesByState[MASTERS_OF_BATTLE.Constants.Unit.State.Walking] = imageAtlasesWalking;
	this.imageAtlasesByState[MASTERS_OF_BATTLE.Constants.Unit.State.PerformingAction] = imageAtlasesPerformingAction;
	this.imageAtlasesByState[MASTERS_OF_BATTLE.Constants.Unit.State.TakingDamage] = imageAtlasesTakingDamage;

	this.imageAtlasesActionEffect = imageAtlasesActionEffect;
	
	this.unitGameState = unitGameState;
	
	this.state = MASTERS_OF_BATTLE.Constants.Unit.State.Standing;
	this.orientation = startingOrienation;
	
	this.animationsByStateAndOrientation = [];
	this.initAnimationsByStateAndOrientation();
		
	this.currentAnimation = this.animationsByStateAndOrientation[this.state][this.orientation];
	this.currentAnimation.start();
};

MASTERS_OF_BATTLE.UnitGameEntity.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.UnitGameEntity.prototype.constructor = MASTERS_OF_BATTLE.UnitGameEntity;

/**
 * @public
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.updateState = function() {
	this.currentAnimation.onGameStateUpdate();
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.updateGraphics = function(context) {
	if(this.unitGameState.unitStats.isUnitToMove) {
		context.strokeStyle = "grey";
		context.rect(this.x, this.y, this.width, this.height);
		context.stroke();
	}
	
	this.currentAnimation.onGraphicsUpdate(context, this.x, this.y);
	
//	context.strokeStyle = "grey";
//	context.rect(this.x, this.y, this.width, this.height);
//	context.stroke();
//	
//	context.fillStyle = "white";	
//	context.font = "10px Arial Narrow";
//	var unitDescription = this.unitGameState.unitStats.unitId.substring(0, 8);
//	context.fillText(this.unitGameState.unitStats.membersCount + "x " + unitDescription, this.x + 2, this.y + 15);
//	context.fillText(this.unitGameState.unitStats.topUnitHitPoints + "/" + this.unitGameState.unitStats.currentTopUnitHitPoints + " Hp", this.x + 2, this.y + 25);
//	context.fillText(this.unitGameState.unitStats.owningPlayer, this.x + 2, this.y + 35);
//	context.fillText("Standing", this.x + 2, this.y + 45);
};

/**
 * @public
 * 
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.updateUnitStats = function(unitStats) {
	MASTERS_OF_BATTLE.Constants.Utils.ObjectUtils.updateNonEmptyFields(unitStats,
			this.unitGameState.unitStats);
};

/**
 * @public
 * 
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.getUnitGameState = function() {
	return this.unitGameState;
};

/**
 * @private
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.initAnimationsByStateAndOrientation = function() {
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Standing] = [];
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Standing, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up, 1, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Standing, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down, 1, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Standing, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left, 1, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Standing][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Standing, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right, 1, true);
	//TODO Standing diagonals
	
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Walking] = [];
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Walking, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Up, 12, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Walking, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Down, 12, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Walking, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left, 12, true);
	this.animationsByStateAndOrientation[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right] = 
		this.initAnimationByStateAndOrientation(MASTERS_OF_BATTLE.Constants.Unit.State.Walking, MASTERS_OF_BATTLE.Constants.Unit.Orientation.Right, 12, true);
	//TODO Walking diagonals
	
	//TODO other states

};

/**
 * @private
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.initAnimationByStateAndOrientation = function(state, orientation, fps, wrapAround) {
	return this.animationsByStateAndOrientation[state][orientation] = 
		new GAME_LOOP.AtlasAnimation(
				this.imageAtlasesByState[state], 
				MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[state][orientation], 
				fps,
				wrapAround);
};