const URLAPI = 'https://api-kenzie-food.herokuapp.com'

class Api {
  static async getProducts() {
    const response = await fetch(`${URLAPI}/products`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    console.log(data)
    return data
  }
}

export { Api }
    
/*let t = await Api.getProducts()

t.forEach(element => {
  console.log(element) 
});*/
