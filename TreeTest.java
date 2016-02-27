package p2;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class TreeTest {
	
	private static Map<String, Integer> terminalNodesScores = new HashMap<>();
	static {
		terminalNodesScores.put("3111", 66);
		terminalNodesScores.put("3112", 32);
		
		terminalNodesScores.put("3121", 42);
		terminalNodesScores.put("3122", 63);
		
		
		terminalNodesScores.put("221", 36);		
		
		terminalNodesScores.put("231", 36);
		terminalNodesScores.put("232", 57);
		
		terminalNodesScores.put("3411", 67);
		
		terminalNodesScores.put("3421", 69);
		terminalNodesScores.put("3422", 59);
	}
	
	private static Deque<StackArg> stack = new ArrayDeque<>();
	private static int scoredNodesCount;

	public static void main(String[] args) {
		final Node root = new Node("0");
		
		Node node11 = new Node("11");
		Node node12 = new Node("12");
		Node node13 = new Node("13");
		Node node14 = new Node("14");
		root.addChild(node11);
		root.addChild(node12);
		root.addChild(node13);
		root.addChild(node14);
		
		Node node211 = new Node("211", false);
		node11.addChild(node211);
		
		Node node212 = new Node("212", false);
		node11.addChild(node212);
		
		Node node3111 = new Node("3111", true);
		Node node3112 = new Node("3112", true);
		node211.addChild(node3111);
		node211.addChild(node3112);
		
		Node node3121 = new Node("3121", true);
		Node node3122 = new Node("3122", true);
		node212.addChild(node3121);
		node212.addChild(node3122);
		
		Node node221 = new Node("221", true);
		node12.addChild(node221);
		
		Node node231 = new Node("231", true);
		Node node232 = new Node("232", true);
		node13.addChild(node231);
		node13.addChild(node232);
		
		Node node241 = new Node("241", false);
		
		Node node3411 = new Node("3411", true);
		node241.addChild(node3411);
		
		Node node242 = new Node("242", false);
		
		Node node3421 = new Node("3421", true);
		Node node3422 = new Node("3422", true);
		node242.addChild(node3421);
		node242.addChild(node3422);
		
		node14.addChild(node241);
		node14.addChild(node242);
		
		alphabetaProcedural(root);		
//		alphaBetaRecursive(root, 3, Integer.MIN_VALUE, Integer.MAX_VALUE, true);
		testAssert(root);
	}
	
	private static void alphaBetaRecursive(Node root, int depth, int alpha, int beta, boolean maximizingPlayer) {
		System.out.println("=== Alpha beta recursive");
		alphabeta(root, 3, Integer.MIN_VALUE, Integer.MAX_VALUE, true);
	}
	
	private static int alphabeta(Node node, int depth, int alpha, int beta, boolean maximizingPlayer) {
		System.out.println(node + " -> push");
		if(depth == 0 || node.gameEnded) {
			int score = evaluateTerminalNode(node);
			node.score = score;
			scoredNodesCount++;
			dumpNode(node, depth);
			System.out.println(node + " <- pop");
			return score;
		}
		if(maximizingPlayer) {
			int v = Integer.MIN_VALUE;
			for(Node child:node.getChildNodes()) {
				int childScore = alphabeta(child, depth - 1, alpha, beta, false);				
				v = Math.max(v, childScore);
				node.score = v;
				scoredNodesCount++;
				alpha = Math.max(alpha, v);
				dumpNode(node, alpha, beta, depth, maximizingPlayer);
				if(beta <= alpha) {
					break;
				}
			}
			System.out.println(node + " <- pop");
			return v;
		} else {
			int v = Integer.MAX_VALUE;
			for(Node child:node.getChildNodes()) {
				int childScore = alphabeta(child, depth - 1, alpha, beta, true);
				v = Math.min(v, childScore);
				node.score = v;
				scoredNodesCount++;
				beta = Math.min(beta, v);
				dumpNode(node, alpha, beta, depth, maximizingPlayer);
				if(beta <= alpha) {
					break;
				}
			}
			System.out.println(node + " <- pop");
			return v;
		}
	}
	
	private static void alphabetaProcedural(Node rootNode) {
		System.out.println("=== Alpha beta procedural");
		push(new StackArg(rootNode, 4, Integer.MIN_VALUE, Integer.MAX_VALUE, true));
		while(!stack.isEmpty()) {
			StackArg arg = peek();
			if(arg.depth == 0 || arg.node.gameEnded) {
				int v = evaluateTerminalNode(arg.node);
				arg.node.score = v;
				dumpNode(arg);
				arg = pop(v);				
				continue;
			}
			
			if(arg.node.hasNextChildNode()) {
				Integer v = scoreIntermediaryNode(arg);
				if(v != null) {
					arg.node.score = v;
					dumpNode(arg);
					if(!(arg.alpha <= arg.beta)) {
						arg = pop(v);
						continue;
					}
				}
				
				arg  = new StackArg(arg.node.nextChild(), arg.depth - 1, arg.alpha, arg.beta, isMaximizing(arg.node));
				push(arg);
			} else {
				Integer v = scoreIntermediaryNode(arg);
				arg.node.score = v;
				dumpNode(arg);
				arg = pop(v);				
			}
		}
	}
	
	private static void push(StackArg arg) {
		System.out.println(arg.node + " -> push");
		stack.push(arg);
	}
	
	private static StackArg pop(Integer... returnValue) {
		StackArg arg = stack.pop();
		if(!stack.isEmpty()) {
			stack.peek().setV(returnValue == null ? null : returnValue[0]);
		}
		System.out.println(arg.node + " <- pop");
		return arg;
	}
	
	private static StackArg peek() {
		StackArg arg = stack.peek();
//		System.out.println(arg.node + " | peek");
		return arg;
	}
	
	private static void dumpNode(StackArg arg) {
		if(arg.node.gameEnded) {
			//dumpNode(arg.node, arg.depth);
		} else {
			dumpNode(arg.node, arg.alpha, arg.beta, arg.depth, isMaximizing(arg.node));
		}
	}
	
	private static void dumpNode(Node node, int alpha, int beta, int depth, boolean maximizingPlayer) {
		if(maximizingPlayer) {
			System.out.print(node + String.format("%-25s", "  beta = " + beta) + String.format("%-25s", "(alpha = " + alpha + ")" ));
		} else {
			System.out.print(node + String.format("%-25s", "  alpha = " + alpha) + String.format("%-25s", "(beta = " + beta + ")"));
		}
		if(beta <= alpha) {
			System.out.print(" [[CUTOFF (remaining children for this node)]]");
		}
		System.out.println();
	}
	
	private static void dumpNode(Node node, int depth) {
		System.out.println(node);	
	}
	
	private static int evaluateTerminalNode(Node terminalNode) {
		return terminalNodesScores.get(terminalNode.id);
	}
	
	private static Integer scoreIntermediaryNode(StackArg arg) {
		if(arg.getV() == null) {
			return null;
		}
		
		int childScore = arg.getV();
		int v;
		
		if(isMaximizing(arg.node)) {			
			if(arg.node.score == null) {
				arg.node.score = Integer.MIN_VALUE;
			}
			v = Math.max(arg.node.score, childScore);
			
			arg.setAlpha(Math.max(arg.alpha, v));
		} else {
			if(arg.node.score == null) {
				arg.node.score = Integer.MAX_VALUE;
			}
			v = Math.min(arg.node.score, childScore);					
			arg.setBeta(Math.min(arg.beta, v));
		}
		return v;
	}
	
	private static boolean isMaximizing(Node node) {
		return Integer.parseInt(node.id.substring(0, 1)) % 2 == 0;
	}
	
	private static void testAssert(Node root) {
		if(root.score != 67) {
			throwAssertionException("root.score != 67 (is actually " + root.score + ")");
		}
		Node bestMove = null;
		for(Node child:root.getChildNodes()) {
			if(child.id.equals("14")) {
				bestMove = child;
				break;
			}
		}
		if(bestMove == null) {
			throwAssertionException("best move node 14 not found");
		}
		if(bestMove.score != 67) {
			throwAssertionException("bestMove.score != 67");
		}
		if(scoredNodesCount != 24) {
			throwAssertionException("scoredNodesCount != 24 (is actually " + scoredNodesCount + ")");
		}
		System.out.println("--------------------- ALL ASSERTIONS OK --------------------");
	}

	private static void throwAssertionException(String message) {
		throw new RuntimeException(message);
	}
	
	private static class Node {
		
		public final String id;
		public final boolean gameEnded;
		private List<Node> childNodes = new ArrayList<>();
		private int curChildIdx = 0;
		public Integer score;
		
		public Node(String id) {
			this.id = id;
			this.gameEnded = false;
		}
		
		public Node(String id, boolean gameEnded) {
			this.id = id;
			this.gameEnded = gameEnded;
		}
		
		@Override
		public String toString() {
			return String.format("%10s", id + " " + score);
		}
		
		public void addChild(Node node) {
			childNodes.add(node);
		}
		
		public Node nextChild() {
			if(childNodes.isEmpty()) {
				return null;
			}
			Node nextChild = null;
			if(hasNextChildNode()) {
				nextChild = childNodes.get(curChildIdx);
				curChildIdx++;
			}
			return nextChild;
		}
		
		public boolean hasNextChildNode() {
			return curChildIdx < childNodes.size();
		}
		
		public List<Node> getChildNodes() {
			return childNodes;
		}
	}

	private static class StackArg {

		public final Node node;
		public final int depth;
		private int alpha;
		private int beta;
		public final boolean maximizingPlayer;
		private Integer v;

		public StackArg(Node node, int depth, int alpha, int beta, boolean maximizingPlayer) {
			this.node = node;
			this.depth = depth;
			this.alpha = alpha;
			this.beta = beta;
			this.maximizingPlayer = maximizingPlayer;
		}
		
		public String toString() {
			return node.toString() + " -> " + v;
		}

		public int getAlpha() {
			return alpha;
		}

		public void setAlpha(int alpha) {
			this.alpha = alpha;
		}

		public int getBeta() {
			return beta;
		}

		public void setBeta(int beta) {
			this.beta = beta;
		}

		public Integer getV() {
			return v;
		}

		public void setV(int v) {
			this.v = v;
		}
	}
}