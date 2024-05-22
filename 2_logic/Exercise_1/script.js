//Cuantas manzanas tengo en mi arreglo
// Algoritmo
// 1 my variable to numbers of apples (my_counter)
// 2 iterate over an array
// 3 ask if it is an apple
// 4 increace my counter
// 5 end the Iterator
// 6 return my counter

const fruitsNames = ['apple', 'banana','pear','apple', 'apple', 'apple'] ;

let my_counter = 0;
for (let i =0; i < fruitsNames.length; i++) {
    if(fruitsNames[i] == 'apple'){
        my_counter++;
    }

    document.getElementById('result').innerText = 'I have ' + my_counter + ' apples';
}


