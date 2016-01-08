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

	MASTERS_OF_BATTLE.Constants.Dummy.IMAGE_AND_FRAMES_RED = new MASTERS_OF_BATTLE.AtlasImageAndFrames(MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_RED_IMG, 
			MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_FRAME_CROPS);
	
	/*
	 * unit
	 */
	MASTERS_OF_BATTLE.Constants.Unit.FACTORY = new MASTERS_OF_BATTLE.UnitFactory();
	
	/*
	 * unit action effect
	 */
	MASTERS_OF_BATTLE.Constants.Unit.Action.Effect.SWORD_HIT_DAMAGE_100 = new MASTERS_OF_BATTLE.UnitDamageEffect(100);
	
	MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT = new MASTERS_OF_BATTLE.UnitAction("Sword hit", 1, 1, 1, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.Restriction.ENEMY_UNIT_ONLY, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.Effect.SWORD_HIT_DAMAGE_100);
	
	/*
	 * unit characteristcs
	 */
	MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN = new MASTERS_OF_BATTLE.UnitCharacteristics("Human swordsman", 
			MASTERS_OF_BATTLE.Constants.Faction.HUMAN, 
			1, 1, 
			50, 4, 
			50, 50, 
			MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT, 
			MASTERS_OF_BATTLE.Constants.Dummy.IMAGE_AND_FRAMES_RED)
};