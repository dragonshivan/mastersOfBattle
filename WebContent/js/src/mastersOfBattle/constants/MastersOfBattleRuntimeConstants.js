var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

function initMastersOfBattleRuntimeConstants() {
	
	/*
	 * 
	 */
	MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_BLACK_IMG = function() {
		var tokenImageAtlas = new Image();
		tokenImageAtlas.src = "img/hex_black.png";
		return tokenImageAtlas;
	}();

	MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_WHITE_IMG = function() {
		var tokenImageAtlas = new Image();
		tokenImageAtlas.src = "img/hex_white.png";
		return tokenImageAtlas;
	}();

	
	/*
	 * constants dummy
	 */
	MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_RED_IMG = function() {
		var tokenImageAtlas = new Image();
		tokenImageAtlas.src = "img/dummy_animation_red.png";
		return tokenImageAtlas;
	}();

	MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_GREEN_IMG = function() {
		var tokenImageAtlas = new Image();
		tokenImageAtlas.src = "img/dummy_animation_green.png";
		return tokenImageAtlas;
	}();

	MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_BLUE_IMG = function() {
		var tokenImageAtlas = new Image();
		tokenImageAtlas.src = "img/dummy_animation_blue.png";
		return tokenImageAtlas;
	}();

	MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_FRAME_CROPS = 
		[new GAME_LOOP.ImageCrop(0, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(100, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(200, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
		 new GAME_LOOP.ImageCrop(100, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];
	
	/*
	 * unit
	 */
	MASTERS_OF_BATTLE.Constants.Unit.GAME_STATE_FACTORY = new MASTERS_OF_BATTLE.UnitGameStateFactory();
	MASTERS_OF_BATTLE.Constants.Unit.GAME_ENTITY_FACTORY = new MASTERS_OF_BATTLE.UnitGameEntityFactory(MASTERS_OF_BATTLE.Constants.Unit.GAME_STATE_FACTORY);
	
	/*
	 * utils
	 */
	MASTERS_OF_BATTLE.Constants.Utils = [];
	MASTERS_OF_BATTLE.Constants.Utils.ARRAY_UTILS = new MASTERS_OF_BATTLE.ArrayUtils();

};