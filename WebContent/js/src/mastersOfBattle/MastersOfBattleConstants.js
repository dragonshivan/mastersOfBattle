var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

/**
 * constants
 */
MASTERS_OF_BATTLE.Constants = {};

MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE = 50;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_COLUMNS = 10;
MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELLS_ROWS = 12;


MASTERS_OF_BATTLE.Constants.ZINDEX_BATTLE_FIELD = -1;
MASTERS_OF_BATTLE.Constants.ZINDEX_BATTLE_FIELD_CELL = 10;
MASTERS_OF_BATTLE.Constants.ZINDEX_UNIT = 100;

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

/**
 * dummy
 */
MASTERS_OF_BATTLE.Constants.Dummy = {};

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

/**
 * unit
 */
MASTERS_OF_BATTLE.Constants.Unit = {};
MASTERS_OF_BATTLE.Constants.Unit.FACTORY = new MASTERS_OF_BATTLE.UnitFactory();

/**
 * unit action
 */
MASTERS_OF_BATTLE.Constants.Unit.Action = {};
MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT = new MASTERS_OF_BATTLE.UnitAction("Sword hit", 1, 1, 1, null, null);

/**
 * faction
 */
MASTERS_OF_BATTLE.Constants.Faction = {};
MASTERS_OF_BATTLE.Constants.Faction.HUMAN = 1;
MASTERS_OF_BATTLE.Constants.Faction.UNDEAD = 0;

/**
 * unit characteristcs
 */
MASTERS_OF_BATTLE.Constants.Unit.Characteristics = {};
MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human = {};
MASTERS_OF_BATTLE.Constants.Unit.Characteristics.Human.SWORDSMAN = new MASTERS_OF_BATTLE.UnitCharacteristics("Human swordsman", 
		MASTERS_OF_BATTLE.Constants.Faction.HUMAN, 
		1, 1, 
		50, 4, 
		50, 50, 
		MASTERS_OF_BATTLE.Constants.Unit.Action.SWORD_HIT, 
		MASTERS_OF_BATTLE.Constants.Dummy.IMAGE_AND_FRAMES_RED)



