/*
    Assignment 05
*/

$(document).ready(function () {

    class ContentItem {
        id;
        name;
        description;
        categoryGenre;

        constructor(id, name, description, categoryGenre) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
        }

    
        updateContentItem(id, name, description, categoryGenre) {
            if (this.id === id) {
                if (name !== null) {
                    this.name = name;
                }
                if (description !== null) {
                    this.description = description;
                }
                if (categoryGenre !== null) {
                    this.categoryGenre = categoryGenre;
                }
            }
        }

        toString() {
            return `
                <div class="content-item-wrapper" id="content-item-${this.id}">
                    <h2>${this.name}</h2>
                    <p>${this.description}</p>
                    <div>${this.categoryGenre}</div>
                </div>
            `;
        }
    }

    const allBrands = [
        new ContentItem(1, 'Adidas', 'A very famous company', 'Sports'),
        new ContentItem(2, 'Gucci', 'Very luxurious but expensive', 'Luxury'),
        new ContentItem(3, 'Nike', 'One of the best sports brands', 'Sports'),
        new ContentItem(4, 'CK', 'Affordable and daily use', 'Lifestyle'),
    ];

    allBrands.forEach((brand) => {
        $('#content-item-list').append(brand.toString());
    });

    $('.content-item-wrapper').css({
        border: '2px solid #ccc',
        width: '300px',
        padding: '10px',
        margin: '10px auto',
    });

    $('#updateSuccessButton').click(function () {
        allBrands[0].updateContentItem(1, 'Updated Adidas', null, 'Updated Sports');
        $('#content-item-1').replaceWith(allBrands[0].toString());
    });

    $('#updateUnsuccessfulButton').click(function () {
        allBrands[1].updateContentItem(1, 'Updated Gucci', null, 'Updated Luxury');
        $('#content-item-2').replaceWith(allBrands[1].toString());
    });
});

