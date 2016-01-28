var MASTERS_OF_BATTLE = MASTERS_OF_BATTLE || {};

MASTERS_OF_BATTLE.ArrayUtils = function() {
	
};


/**
 * @public
 */
MASTERS_OF_BATTLE.ArrayUtils.prototype.appendArray = function(arrayToAppendTo, arrayToAppend) {
	if(arrayToAppendTo === undefined || arrayToAppendTo == null) {
		throw "arrayToAppendTo is undefined/null";
	}
	if(arrayToAppend === undefined || arrayToAppend == null || arrayToAppend.length == 0) {
		return arrayToAppendTo;
	}
	var shift = arrayToAppendTo.length;
	for(var i = 0; i < arrayToAppend.length; i++) {
		arrayToAppendTo[shift + i] = arrayToAppend[i];
	}
	return arrayToAppendTo;
};