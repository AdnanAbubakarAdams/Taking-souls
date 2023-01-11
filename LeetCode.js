// 832. FLIPPING AN IMAGE 
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i].reverse();
        image[i] = image[i].map(img => img === 0 ? 1 : 0)
    }
    return image;
};

// 56. MERGE INTERVALS
