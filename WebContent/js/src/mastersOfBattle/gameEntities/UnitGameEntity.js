var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntity = function(
		imageAtlasesStanding,
		imageAtlasesWalking,
		imageAtlasesPerformingAction,
		imageAtlasesTakingDamage,
		imageAtlasesActionEffect,
		unitGameState) {
	GAME_LOOP.GameEntity.call(this, 
			unitGameState.unitStats.startCellX * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitStats.startCellY * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitCharacteristics.sizeColumns * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitGameState.unitCharacteristics.sizeColumns * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT);
	
	this.imageAtlasesStanding = imageAtlasesStanding;
	this.imageAtlasesWalking = imageAtlasesWalking;
	this.imageAtlasesPerformingAction = imageAtlasesPerformingAction;
	this.imageAtlasesTakingDamage = imageAtlasesTakingDamage;
	this.imageAtlasesActionEffect = imageAtlasesActionEffect;
	this.unitGameState = unitGameState;
	
	this.currentAnimation = new GAME_LOOP.AtlasAnimation(
			this.imageAtlasesWalking, 
			MASTERS_OF_BATTLE.Constants.Unit.FrameCrops[MASTERS_OF_BATTLE.Constants.Unit.State.Walking][MASTERS_OF_BATTLE.Constants.Unit.Orientation.Left], 
			12,
			true);
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