
export async function* LinkedListInfo(val) {
    push(val); {
        let newNode = new Node(val);
        if (this.head === null) {
          this.head = newNode;
          this.tail = this.head;
        } else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        this.length++;
        return this;
      }
      pop(); {
        if (this.head === null) return undefined;
        let temp = this.head;
        let prev = temp;
        while (temp.next) {
          prev = temp;
          temp = temp.next;
        }
        this.tail = prev;
        prev.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return temp;
      }
  }
