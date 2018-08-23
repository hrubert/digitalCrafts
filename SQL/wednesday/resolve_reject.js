function addNumbers(x, y) {
    new Promise((resolve, reject) => {
        try {
           if(!isNaN(x) && !isNaN(y)) {
               console.log(x + y);
           }
        } catch (error) {
            console.log(error);
        }
    })
};

addNumbers(3, 'meow');