var MINIMAX = MINIMAX = MINIMAX || {};

/**
 * @constructor
 * @returns {MINIMAX.TreePrinter}
 */
MINIMAX.TreePrinter = function() {
	
};

/**
 * 
 * @param rootNode
 * @returns {String}
 */
MINIMAX.TreePrinter.prototype.print = function(rootNode) {
	var nodesCount = 0;
	var curParents = [rootNode];
	nodesCount++;
	console.log(rootNode.toString());
	while(curParents.length != 0) {
		var nextParents = new Array();
		for(var i = 0; i < curParents.length; i++) {
			console.log("|||||||||||||||||||||||||||||||||||||||||||||||");
			for(var j = 0; j < curParents[i].childNodes.length; j++) {
				console.log("___________________");
				console.log("Parent: " + curParents[i].gameState.lastMove.toString());
				console.log(curParents[i].childNodes[j].gameState.toString());
				nodesCount++;
				nextParents.push(curParents[i].childNodes[j]);
			}
		}
		curParents = nextParents;
	}
	console.log("nodesCount="+nodesCount);
}