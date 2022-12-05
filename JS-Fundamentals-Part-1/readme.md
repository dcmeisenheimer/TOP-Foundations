Lesson Overview for TOP Fundamentals Pt. 1
- How do you declare a variable?
    Variables are storage containers.
        Previously (var) was common but now its (let) and (const).
        https://javascript.info/variables 
        
- What are three different ways to declare a variable?
    1. let message = 'hello';
    2. let user = 'John', age = 25, message = 'Hello';
    3. let user = 'John';
        let age = 25;
        let message = 'Hello';
    4. let user = 'John',
        age = 25,
        message = 'Hello';

- Which one should you use when?
    1. let = if you plan to assign different values.
    2. const = if you know the variable will never change.
- What are the rules for naming variables?
    1. name must only contain only letters, digits, or the symbols $ and _.
    2. The first character cannot be a digit.

- What are operators, operands, and operations?
    1. Operand =  is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.
    2. Operators can be either unary or binary depending on how many operands are used. Unary = 1.
    3. Operation = are math: Addition +,
                            Subtraction -,
                            Multiplication *,
                            Division /,
                            Remainder %,
                            Exponentiation **

- What is concatenation and what happens when you add numbers and strings together?
    1. It will append the string or number together. It will not do any math but combine them into one statement.

- What are the different types of operators in JavaScript?
    1. Unary
    2. Binary
    3. Operand

- What is the difference between == and ===?
    1. When using the == operator, x and y are equal:
    2. When using the === operator, x and y are not equal. 

- What are operator precedence values?
    1. If an expression has more than one operator, the execution order is defined by their precedence, or, in other words, the default priority order of operators.
    2. 1 + 2 * 2 should be calculated before the addition. That’s exactly the precedence thing. The multiplication is said to have a higher precedence than the addition. 
    3. (PEMDAS)

- What are the increment/decrement operators?
    1. Increment ++ increases a variable by 1:
    2. Decrement -- decreases a variable by 1:

- What is the difference between prefixing and postfixing them?
    1. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement)
    2. let counter = 1;
        let a = ++counter; // (*)
        'a would = 2'
    3. let counter = 1;
        let a = counter++; // (*) changed ++counter to counter++
        'a would = 1'

- What are assignment operators?
    1. Let’s note that an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.
    2. That’s why, when we assign a variable, like x = 2 * 2 + 1, the calculations are done first and then the = is evaluated, storing the result in x.    

- What is the Unary Plus Operator?
    1. The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
    2. // No effect on numbers
        let x = 1;
        alert( +x ); // 1

        let y = -2;
        alert( +y ); // -2

        // Converts non-numbers
        alert( +true ); // 1
        alert( +"" );   // 0

