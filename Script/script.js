var x = document.getElementById("para1");
var history_text = "In 1910, a skilled ronin with a passion for culinary arts embarked on a journey across Japan,immersing himself in the diverse regional cuisines of the country.Inspired by his travels, he founded a ramen restaurant named ERamen, initially known as 'Hinode Ramen-ya,''which captured the essence of the rising sun in its flavors.With meticulous attention to detail and a masterful understanding of the art of ramen, the restaurant gainedimmense popularity over the years.In 2015, recognizing the growing appreciation for authentic Japanese cuisine, the owners of ERamen decided toexpand their culinary venture to Indonesia, bringing their exceptional ramen and culinary mastery to a newaudience, delighting Indonesian food enthusiasts with their exquisite flavors and the rich history behind eachbowl of ramen."
var vision = "Vision:<br>ERamen's vision is to share the rich and authentic flavors of Japanese cuisine, specifically the art of ramen, with food enthusiasts worldwide. They aim to be recognized as a global culinary brand, delivering exceptional dining experiences and upholding the legacy of their humble beginnings."
var mission = "Mission:<br>ERamen's mission is to deliver the highest quality ramen with a meticulous attention to detail, combining traditional techniques to achieve culinary excellence. They strive to preserve the authentic flavors of regional ramen from Japan, using the finest ingredients and staying true to traditional recipes. Customer satisfaction is of utmost importance to ERamen, as they aim to create a welcoming environment and provide exceptional service to ensure a memorable dining experience. With a focus on expansion and global presence, ERamen seeks to introduce their exceptional ramen and culinary mastery to international locations, including Indonesia. Upholding tradition is a core value for ERamen, as they value the rich history and cultural significance of ramen, preserving and promoting the traditions and techniques associated with its creation."

var y = document.getElementById("text1")
var vision_label = "Next (Vision)"
var mission_label = "Next (Mission)"
var history_label = "Next (History)"

function changeText() {
  if (x.innerHTML === history_text) {
    y.innerHTML = mission_label
    x.innerHTML = vision;
  } else if (x.innerHTML === vision) {
    y.innerHTML = history_label
    x.innerHTML = mission;
  } else {
    y.innerHTML = vision_label
    x.innerHTML = history_text;
  }
}






