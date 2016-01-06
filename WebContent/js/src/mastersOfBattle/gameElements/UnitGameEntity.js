var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.UnitGameEntity = function(startCellX, startCellY) {
	GAME_LOOP.GameEntity.call(this, 
			startCellX * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			startCellY * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT);
	this.currentCellX = startCellX;
	this.currentCellY = startCellY;
};

MASTERS_OF_BATTLE.UnitGameEntity.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.UnitGameEntity.prototype.constructor = MASTERS_OF_BATTLE.UnitGameEntity;

/**
 * @public
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.updateState = function() {
	
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.UnitGameEntity.prototype.updateGraphics = function(context) {
	context.fillStyle = "black";
	context.rect(this.x, this.y, this.width, this.height);
	context.stroke();
	context.font = "10px Arial Narrow";
	context.fillText("23x Archer", this.x + 2, this.y + 15);
	context.fillText("10 Hp", this.x + 2, this.y + 25);
	context.fillText("red player", this.x + 2, this.y + 35);
	context.fillText("Standing", this.x + 2, this.y + 45);
};