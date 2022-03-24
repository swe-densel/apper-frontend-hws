class Stack {
    #mapStack

    //used Map instead of Array based on instructions given
    constructor(){
        this.#mapStack = new Map()  
    }

    //push() places the item at the top of the stack
    push(item){
        if(typeof(item) !== 'string')
        return console.log(`${item} is not a string.`)
        
        this.#mapStack.set(
            this.#mapStack.size + 1, 
            item
        )
        console.log(`Pushed: ${item}`)
    }

    //pop() releases the item at the top of the stack
    pop(){
        if (this.#mapStack.size > 0){
            let lastItem = this.#mapStack.get(
                this.#mapStack.size
            )

            console.log(
                `Popped: ${lastItem}`
            )

            this.#mapStack.delete(
                this.#mapStack.size
            )
        }
        
        else
            console.log('Stack is empty.')
    }

    //check() lists all of the items in the stack
    check(){
        console.log('Items:')
        this.#mapStack.forEach(
            function(value){
                console.log(value)
            }
        )
    }

    //peek() looks at the item at the top of the stack
    peek(){
        return this.#mapStack.get(
            this.#mapStack.size
        )
    }

    //automate() - does peek() first, then pop(), and lastly check() 
    automate(){
        let item

        while(this.#mapStack.size > 0){
            item = this.peek()
            console.log(`Peeked: ${item}`)
            this.pop()
            this.check()
        }
    }
}

const stack = new Stack()
stack.push('Milk')
stack.push('Eggs')
stack.push('Bread')
stack.push(123)
stack.check()

stack.automate()
stack.pop()


