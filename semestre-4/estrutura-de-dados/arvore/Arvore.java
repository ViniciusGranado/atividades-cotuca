public class Main
{
	public static void main(String[] args) {
		System.out.println("Arvore");
	}
	
	public class Arvore<T extends Comparable<T>> {
	    private Node root;
	    
	    public void Arvore() {
	        this.root = null;
	    }
	    
	    public void include(T newContent) throws Exception {
	        if (newContent == null) {
	            throw new Exception("Non existing content");
	        }
	        
	        if (this.root == null) {
	            this.root = newContent;
	        }
	        
	        Node prev = null;
	        Node current = root;
	        int comp;
	        
	        do {
    	        comp = newContent.compareTo(current.getContent());
    	        
    	        if (comp == 0) throw new Exception("Already existing item");
    	        
	            prev = current;

    	        if (comp < 0) {
    	            current = current.getLeft;
    	        } else {
	                current = current.getRight;
    	        }
	        } while(current != null);
	        
	        if (comp < 0) {
                prev.setLeft(new Node(newContent));
            } else {
                prev.setRight(new Node(newContent));
            }
	    }
	    
	    private static String preOrder(Node node) {
	        if (node == null) return "";
	        
	        return node.getContent() + " " +
	        Arvore.preOrder(node.getLeft()) + " " +
	        Arvore.preOrder(node.getRight());
	    }
	    
	    private static String inOrder(Node node) {
	        if (node == null) return "";
	        
	        return Arvore.preOrder(node.inLeft()) + " " +
	        node.getContent() + " " +
	        Arvore.inOrder(node.getRight());
	    }
	    
	    private static String postOrder(Node node) {
	        if (node == null) return "";
	        
	        return Arvore.postOrder(node.getLeft()) + " " +
	        Arvore.postOrder(node.getRight()) + " " +
	        node.getContent();
	    }
	    
	    public String toString() {
	        String pre = Arvore.preOrder(this.root);
	        String in = Arvore.inOrder(this.root);
	        String post = Arvore.postOrder(this.root);
	        
	        return "Pré-ordem: " + (pre.equals("") ? "árvore vazia" : pre) +
                   "In-ordem: " + (in.equals("") ? "árvore vazia" : in) +
                   "Pós-ordem: " + (post.equals("") ? "árvore vazia" : post);
	    }
	    
	    private class Node {
	        private T content;
	        private Node left, right;
	        
            public Node(T content) {
                this.left = null;
                this.right = null;
                this.content = content;
            }
            
            public Node(Node left, Node right, T content) {
                this.left = left;
                this.right = right;
                this.content = content;
            }
            
            public Node getLeft() {
                return left;
            }
            
            public Node getRight() {
                return right;
            }
            
            public T getContent() {
                return content;
            }
            
            public void setLeft(Node left) {
                this.left = left;
            }
            
            public void setRight(Node right) {
                this.right = right;
            }
            
            public void setContent(T content) {
                this.content = content;
            }
	    }
	}
}
