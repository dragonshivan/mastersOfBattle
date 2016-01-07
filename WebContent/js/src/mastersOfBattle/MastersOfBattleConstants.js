var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

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

MASTERS_OF_BATTLE.Constants.Dummy = [];

MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_01_IMG = function() {
	var tokenImageAtlas = new Image();
	tokenImageAtlas.src = "img/dummy_animation_01.png";
	return tokenImageAtlas;
}();

MASTERS_OF_BATTLE.Constants.Dummy.ANIMATION_01_FRAME_CROPS = 
	[new GAME_LOOP.ImageCrop(0, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
	 new GAME_LOOP.ImageCrop(100, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE),
	 new GAME_LOOP.ImageCrop(200, 0, 0, 0, 100, 100, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE, MASTERS_OF_BATTLE.Constants.BATTLE_FIELD_CELL_SIZE)];