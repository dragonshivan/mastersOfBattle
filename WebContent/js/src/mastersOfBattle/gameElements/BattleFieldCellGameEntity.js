var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.BattleFieldCellGameEntity = function() {
	GAME_LOOP.GameEntity.call(this, 0, 0, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, 
			-1);
};

MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype = Object.create(GAME_LOOP.GameEntity.prototype);
MASTERS_OF_BATTLE.BattleFieldCellGameEntity.prototype.constructor = MASTERS_OF_BATTLE.BattleFieldCellGameEntity;