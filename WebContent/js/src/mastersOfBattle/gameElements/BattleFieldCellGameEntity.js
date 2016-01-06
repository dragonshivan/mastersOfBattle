var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

/**
 * @constructor
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity = function(cellX, cellY) {
	GAME_LOOP.GameEntity.call(this, 
			cellX * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			cellY * MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.ZINDEX_BATTLE_FIELD_CELL);
	this.blackHexImg = MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_BLACK_IMG;
	this.whiteHexImg = MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_WHITE_IMG;
	this.img = this.whiteHexImg;
	this.selected = false;
};

MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.constructor = MASTERS_OF_BATTLE.BattleFieldCellGameEntity;

/**
 * @public
 * @param inputEvent
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.processInput = function(inputEvent) {
	this.selected = this.isMouseOver(inputEvent);
};

/**
 * @public
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.updateState = function() {
	if(this.selected) {
		this.img = this.blackHexImg;
	} else {
		this.img = this.whiteHexImg;
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.updateGraphics =  function(context) {
	context.drawImage(this.img, this.x, this.y, this.width, this.height);
};