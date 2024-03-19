//menu repilet


let menu = 
  {
    burger: 5.00,
    pizza: 3.50,
    salad: 1.11,
    smoothie: 4.25,
    wine: 5.00, 
    beer: 3.50, 
    liquor: 1.11, 
    margarita: 4.25,
    oldfashion: 4.25,
    order: (placeOrder) => {
      const orderArray = placeOrder.split(" ")
        let sum = 0;
      
      for (const element of orderArray){
        sum = sum + menu[element]
      };
      const copiedMenu = [...menu]

persons.push({ name: 'Anna', age: 29 })
      menu.push({tequila: 5.00,
          chardonnay: 10.00,
          calamari: 15.00,
          Fish: 8.00,
      
      });      
        console.log(`Your order total is $${sum}`);
        // burger + smoothie
        //console.log(menu[orderArray[0]]+menu[orderArray[1]]+menu[orderArray[2]])
      
      // console.log(placeOrder.split(" "))
      
    }
  };
/*let drinkMenu = { wine: 5.00, 
    beer: 3.50, 
    liquor: 1.11, 
    margarita: 4.25,
    oldfashion: 4.25,
    

    order: (placeOrder) => { 
      const orderArray = placeOrder.split(" ")
        let sum = 0;
      
      for (const element of orderArray){
        sum = sum + drinkMenu[element]
      }
        console.log(`Your order drink total is ${sum}`);      
      
      
    }
    
};*/


menu.order("burger pizza salad oldfashion wine");
menu.order("fish chardonnay calamari beer wine");


    