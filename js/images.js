
var images = [
    'images/high_tech_earth-wallpaper-1920x1080.jpg',
    'images/armenia_syunik_khustup_hayk_photography-wallpaper-1920x1080.jpg',
    'images/country_road_hill-wallpaper-1920x1080.jpg',
    'images/moscow_international_business_center_russia-wallpaper-1920x1080.jpg',
    'images/world_manipulation_by_pacolix-wallpaper-1920x1080.jpg'
];

let randomImageUrl = function(shown){
    let oldUrl = $(shown).css("background-image");
    let splitOldUrl = oldUrl.split("/");
    let oldimageUrl = splitOldUrl[9] + "/" + splitOldUrl[10].replace('")', '');
    
    let newImageUrl = images[Math.floor(Math.random() * images.length)];
    while(oldimageUrl === newImageUrl){
        newImageUrl = images[Math.floor(Math.random() * images.length)];
    }

    return newImageUrl;
}