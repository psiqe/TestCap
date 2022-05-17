import { Api } from "../models/Api.js" 
const produtos = await Api.getProducts()

function renderProducts(arr) {
  arr.forEach(element => {
    const main = document.querySelector('.container--cards')

    const card = document.createElement('div');
    const img = document.createElement('img')
    const name = document.createElement('h2')
    const description = document.createElement('p')
    const category = document.createElement('h3')
    const priceIcon = document.createElement('div')
    const price = document.createElement('p')
    const icon = document.createElement('img')
    
    card.classList= "product--card"
    img.classList = "product--img"
    name.classList = 'product--name'
    description.classList = 'product--description'
    category.classList = 'product--category'
    priceIcon.classList = 'product--priceIcon'
    price.classList = 'product--price'
    icon.classList = 'product--icon'
    
    img.src = element.imagem
    name.innerText = element.nome
    description.innerText = element.descricao
    category.innerText = element.categoria
    price.innerText = `R$${element.preco}`
    icon.src = "../../src/img/shoppingCart.png"

    priceIcon.append(price, icon)
    card.append(img, name, description, category, priceIcon)
    main.append(card)

  });
}
renderProducts(produtos)