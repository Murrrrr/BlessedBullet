const main_image_caption = document.querySelector('.main-image_caption');
const main_image = document.querySelector('.main-image');
const sort_list = document.querySelectorAll('.item_page_header_sort > span');

var item_page_list_items = document.querySelectorAll('.item_page_list_items');
var item_price = document.querySelectorAll('.item_price');
var item_name = document.querySelectorAll('.item_name');
var item_image = document.querySelectorAll('.item_page_list_items > img')
var item_info_array= [];
var popular_info_array = [];



main_image_caption.style.left = `${main_image.clientWidth / 2 - main_image_caption.clientWidth / 2}px`
main_image_caption.style.top = `${main_image.clientHeight / 2 - main_image_caption.clientHeight / 2}px`

for (let i = 0; i < sort_list.length; i++) {
    sort_list[i].addEventListener('click', () => {
        for (let j = 0; j < sort_list.length; j++)
            sort_list[j].classList.remove('active');
        sort_list[i].classList.add('active');
        if(sort_list[0].classList == "active"){
            popularSort();
        }

        else if(sort_list[1].classList == "active"){
            lowPriceSort();
        }

        else if(sort_list[2].classList == "active"){
            highPriceSort();
        }



    })

}

for (let i = 0; i < item_page_list_items.length; i++) {
    popular_info_array.push(new item_info(item_name[i].innerHTML, item_price[i].innerHTML, item_image[i].src));
    item_info_array.push(new item_info(item_name[i].innerHTML, item_price[i].innerHTML, item_image[i].src));
}




function item_info(name, price, image) {
    this.name = name;
    this.price = price;
    this.image = image;
}

function compareLowPrice(price1, price2) {
    return price1.price < price2.price ? -1 : price1.price > price2.price ? 1 : 0;
}

function compareHighPrice(price1, price2){
    return price1.price > price2.price ? -1 : price1.price < price2.price ? 1 : 0;
}

function lowPriceSort() {
    item_info_array.sort(compareLowPrice);
    for (let i = 0; i < item_info_array.length; i++) {
        item_name[i].innerHTML = item_info_array[i].name;
        item_price[i].innerHTML = item_info_array[i].price;
        item_image[i].src = item_info_array[i].image;
    }
}

function highPriceSort(){
    item_info_array.sort(compareHighPrice);
    for (let i = 0; i < item_info_array.length; i++) {
        item_name[i].innerHTML = item_info_array[i].name;
        item_price[i].innerHTML = item_info_array[i].price;
        item_image[i].src = item_info_array[i].image;
    }
}

function popularSort(){
    for (let i = 0; i < popular_info_array.length; i++) {
        item_name[i].innerHTML = popular_info_array[i].name;
        item_price[i].innerHTML = popular_info_array[i].price;
        item_image[i].src = popular_info_array[i].image;
    }
}







// 가격 추출
// 가격비교
// 가격 낮은 순으로 배열 값 push
// 옮긴 배열들을 replace