// fetch("https://dummyjson.com/quotes")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     const wrapper = document.querySelector(".wrapper");
//     // console.log(data);
//     data.quotes.map((item) => {
//       const template = `
//         <div>
//         <h2>${item.author}</h2>
//         <p>${item.text}</p>
//         </div>
//         `;
//       //   console.log(item);
//       wrapper.insertAdjacentHTML("beforeend", template);
//     });
//   });

// fetch("https://dummyjson.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((products) => {
//     console.log(products);
//     const catalog = document.querySelector(".catalog");
//     products.products.map((phone) => {
//       const card = `
//       <div class="col-4">
//         <div class="product-card">
//             <div class="product-card__img">
//                 <img src="${phone.thumbnail}" alt="" />
//             </div>
//             <h2 class="product-card__title">${phone.title}</h2>
//             <p class="product-card__price">${phone.price} $</p>
//             <a href="https://dummyjson.com/products/${phone.id}" class="product-card__btn"> Купить</a>
//         </div>
//       </div>

//         `;
//       catalog.insertAdjacentHTML("beforeend", card);
//     });
//   });

fetch("https://dummyjson.com/products/24")
  .then((response) => {
    return response.json();
  })
  .then((product) => {
    console.log(product);
    const productList = document.querySelector(".product-list");
    const productImg = document.querySelector(".product-card__img");
    const galleryList = document.querySelector(".gallery-list");
    const card = `
    <li class="product-list__item" data-title=""><span class="product-list__title">Title: </span>${product.title}</li>
    <li class="product-list__item" data-title=""><span class="product-list__title">Price: </span>${product.price} $</li>
    <li class="product-list__item" data-title=""><span class="product-list__title">Rating: </span>${product.rating}</li>
    <li class="product-list__item" data-title=""><span class="product-list__title">Caategory: </span>${product.category}</li>
    <li class="product-list__item" data-title=""><span class="product-list__title">Description: </span>${product.description}</li>
        `;

    const img = `
    <img src="${product.thumbnail}" alt="" />`;
    productList.insertAdjacentHTML("beforeend", card);
    productImg.insertAdjacentHTML("beforeend", img);

    product.images.map((data) => {
      console.log(data);
      const img = `
              <li class="gallery-list__item"><img src="${data}" alt=""></li>
                `;

      galleryList.insertAdjacentHTML("beforeend", img);
    });
  });
