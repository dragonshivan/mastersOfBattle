var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntity = function(unitId, owningPlayer,
		unitCharacteristics,
		unitStats) {
	GAME_LOOP.GameEntity.call(this, 
			unitStats.startCellX * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitStats.startCellY * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitCharacteristics.sizeColumns * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			unitCharacteristics.sizeColumns * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT);
	this.unitId = unitId;
	this.owningPlayer = owningPlayer;
	this.unitCharacteristics = unitCharacteristics;
	this.unitStats = unitStats;
	
	this.currentAnimation = new GAME_LOOP.AtlasAnimation(
			unitCharacteristics.standRightImageAndFrames.image, 
			unitCharacteristics.standRightImageAndFrames.crops, 
			6,
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
	context.strokeStyle = "grey";
	context.rect(this.x, this.y, this.width, this.height);
	context.stroke();
	
	context.fillStyle = "black";	
	context.font = "10px Arial Narrow";
	var unitDescription = this.unitId.substring(0, 8);
	context.fillText(this.unitStats.membersCount + "x " + unitDescription, this.x + 2, this.y + 15);
	context.fillText(this.unitStats.topUnitHitPoints + "/" + this.unitStats.currentHitPointsTopUnit + " Hp", this.x + 2, this.y + 25);
	context.fillText(this.owningPlayer, this.x + 2, this.y + 35);
	context.fillText("Standing", this.x + 2, this.y + 45);

	this.currentAnimation.onGraphicsUpdate(context, this.x, this.y);
};