class Stack<T> {
  private array: T[];

  constructor() {
    this.array = [];
  }

  push(x: T): void {
    this.array.push(x);
  }

  pop(): void {
    this.array.pop();
  }

  top(): T {
    return this.array[this.array.length - 1];
  }

  display(): void {
    console.log(this.array);
  }
}

const st = new Stack<number>();
st.push(1);
st.push(3);
st.push(4);
st.display();
st.pop();
st.display();
