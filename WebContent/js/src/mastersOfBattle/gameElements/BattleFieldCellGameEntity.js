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
			10);
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
	
};

/**
 * @public
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.updateState = function() {
	//TODO
	if(this.selected) {
//		this.img = this.whiteHexImg;
	} else {
//		this.img = this.blackHexImg;
	}
};

/**
 * @public
 * @param {CanvasRenderingContext2D} context
 */
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.updateGraphics =  function(context) {
	context.drawImage(this.img, this.x, this.y, this.width, this.height);
};