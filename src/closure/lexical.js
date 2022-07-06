const myGlobal = 0;

function myFunction() {
    const myLocal = 1;
    console.log(myGlobal);

    function parent() { // Internal function... it's a closure
        const inner = 2;
        console.log(myLocal, myGlobal);

        function child() {
            console.log(inner, myLocal, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();