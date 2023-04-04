// Get all the images
image_array = [
  'hunter.png',
  'warlock.png',
  'titan.png'
]

function get_random_image(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array.length);

  // Get an image at the random_index
  selected_image = image_array[random_index]

  // Display the image
  document.getElementById('image_shower').src = `./class/${selected_image}`
}

image_array2 = [
  'arc.png',
  'solar.png',
  'void.png',
  'stasis.png',
  'strand.png'
]

function get_random_image2(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array2.length);

  // Get an image at the random_index
  selected_image = image_array2[random_index]

  // Display the image
  document.getElementById('image_shower2').src = `./subclass/${selected_image}`
}

image_array3 = [
  'izi.png',
  'succesion.png',
  'wishender.png'
]

function get_random_image3(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array3.length);

  // Get an image at the random_index
  selected_image = image_array3[random_index]

  // Display the image
  document.getElementById('image_shower3').src = `./kinetic/${selected_image}`
}

image_array4 = [
  'bxr.png',
  'shay.png',
  'tarnished.png'
]

function get_random_image4(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array4.length);

  // Get an image at the random_index
  selected_image = image_array4[random_index]

  // Display the image
  document.getElementById('image_shower4').src = `./energy/${selected_image}`
}

image_array5 = [
  'bear.png',
  'fox.png',
  'grand.png'
]

function get_random_image5(){
  // Get a random index
  random_index = Math.floor(Math.random() * image_array5.length);

  // Get an image at the random_index
  selected_image = image_array5[random_index]

  // Display the image
  document.getElementById('image_shower5').src = `./heavy/${selected_image}`
}
