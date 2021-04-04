
Vue.component('mycomponent1',{
    template : `<p>Sections</p>`
    });

var vm1 = new Vue({
    el: '#component1'
});

Vue.component('block', {
    props: ['post'],
    template: `<div class="block">
                <div class=item>
                    <div class="imgDiscrpt">
                        <div class="img"><img src={{post.image}} alt={{ post.name}} width="275" height="245"></div>
                        <div class="imgName">{{post.name}}</div>
                        <div class="subheading"> {{post.subheading}}</div>
                        <button type="butto" class="btn">Add to cart</button>
                    </div>    
                </div>    
              </div>`
  })

var aap = new Vue ({
    el:'#vue',
    data: {
        objs: [{
            itemNum:'item1',
            name: 'Pasta',
            subheading: 'Healthy pasta',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Spaghetti_aglio%2C_olio_e_peperoncino_%2816284859030%29.jpg'
        },
        {
            itemNum:'item2',
            name: 'Red Crab',
            subheading: 'Fresh from Alaska',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jacques_Lameloise%2C_escab%C3%A8che_d%27%C3%A9crevisses_sur_gaspacho_d%27asperge_et_cresson.jpg'
        },
        {
            itemNum:'item3',
            name: 'Breakfast Special',
            subheading: 'Good for the soul',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Breakfast_at_Irving_Street_Kitchen.jpg'
        },
        {
            itemNum:'item4',
            name: 'Sea shells Mix',
            subheading: 'For the shell lovers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Seafood_linguine.jpg'
        },
        {
            itemNum:'item5',
            name: 'Ultimate Keebab',
            subheading: 'The best from Middle East',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Various_kebab.jpg'
        },
        {
            itemNum:'item6',
            name: 'Chicken Steak',
            subheading: 'Grilled to perfection',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Chicken_steak_with_pepper_sauce.jpg'
        },
        {
            itemNum:'item7',
            name: 'Filet Mignon',
            subheading: 'Juicy steak served with patatos and garlic',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/.Filet_mignon_et_foie_gras_au_muscat_de_Beaumes-de-Venise%2C_Pastis_Bistro%2C_Palo_Alto.jpg'
        },
        {
            itemNum:'item8',
            name: 'Bistro Brunch',
            subheading: 'A touch of Australia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Dishes_at_Bistro_C%2C_Hastings_Street%2C_Noosa_Heads%2C_Queensland_02.jpg'
        },
        {
            itemNum:'item9',
            name: 'California crepe',
            subheading: 'Stuffed with grilled shrimp',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/32/2011-04-09_17.02.43%2C_Whispers_Cafe_and_Creperie%2C_Belmont%2C_CA_%285982715933%29.jpg'
        },
        {
            itemNum:'item10',
            name: 'Top Burger',
            subheading: 'The tallest hamburger from Peru',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Hamburguesa_de_carne.jpg'
        },
        {
            itemNum:'item11',
            name: 'Chicken Garlic Pizza',
            subheading: 'Our specialty pizza',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Round_Table_chicken_%26_garlic_pizza.JPG'
        },
        {
            itemNum:'item12',
            name: 'Wok away healthy',
            subheading: 'Healthy blend of noodles and vegies',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Stir_Fry_Wok_-_Free_For_Commercial_Use_-_FFCU_%2827159057131%29.jpg'
        }
        ]
    }
})