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
      this.root = new Node(newContent);
      return;
    }

    Node prev = null;
    Node current = root;
    int comp;

    do {
      comp = newContent.compareTo(current.getContent());

      if (comp == 0) throw new Exception("Already existing item");

      prev = current;

      if (comp < 0) {
        current = current.getLeft();
      } else {
        current = current.getRight();
      }
    } while (current != null);

    if (comp < 0) {
      prev.setLeft(new Node(newContent));
    } else {
      prev.setRight(new Node(newContent));
    }
  }

  private String preOrder(Node node) {
    if (node == null) return "";

    return (
      node.getContent() +
      " " +
      this.preOrder(node.getLeft()) +
      " " +
      this.preOrder(node.getRight())
    );
  }

  private String inOrder(Node node) {
    if (node == null) return "";

    return (
      this.preOrder(node.getLeft()) +
      " " +
      node.getContent() +
      " " +
      this.inOrder(node.getRight())
    );
  }

  private String postOrder(Node node) {
    if (node == null) return "";

    return (
      this.postOrder(node.getLeft()) +
      " " +
      this.postOrder(node.getRight()) +
      " " +
      node.getContent()
    );
  }

  public String toString() {
    String pre = this.preOrder(this.root);
    String in = this.inOrder(this.root);
    String post = this.postOrder(this.root);

    return (
      "Pré-ordem: " +
      (pre.equals("") ? "árvore vazia" : pre) +
      "\nIn-ordem: " +
      (in.equals("") ? "árvore vazia" : in) +
      "\nPós-ordem: " +
      (post.equals("") ? "árvore vazia" : post)
    );
  }

  private int getQtNodes(Node root) {
    if (root == null) {
      return 0;
    }

    int cont = 1;

    if (root.getLeft() != null) {
      cont += getQtNodes(root.getLeft());
    }

    if (root.getRight() != null) {
      cont += getQtNodes(root.getRight());
    }

    return cont;
  }

  public int getQtNodes() {
    return this.getQtNodes(this.root);
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
  