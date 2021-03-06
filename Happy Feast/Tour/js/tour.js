/*This script facilitates the displaying of information provided in the array called paragraph and images in te image array.
Function showText displays the information and image, while hide function reset the display area */


let paragraph=["<p>The <b> Home Page </b>provides a Welcoming Interface to Happy Feast website. This is our main page which allows navigation to the other webpages</p>",
"<p>The <b> About Us Page </b>Navigates to Our About Us Page, which give customers more insight about our business. It gives a brief history of Happy Feast Restaurant and any special events being held by the restaurant along with their date</p>",
"<p> The <b>Order Meals </b> page allows cutomers to view the variety of meals offered by Happy Feast. Customers can search and order their meals online</p>",
"<p> Happy Feast ensures our customers are well informed during their experience with us. The <b>Track Page </b> allows customers to track their orders from preparation to delivery</p>",
"<p>Happy Feast always wants to hear from its customers. The <b>Contact Us Page</b> facilitates the customers contacting HappyFeast 24/7</p>",
"<p>The <b>Feedback Page</b> allows customers to give their feedback to HappyFeast when it is convenient them. </p>",
"<p>HappyFeast believes in perfection and customers opinion of the restaurant is critical in achieving this. The <b> Reviews and Ratings Page </b> allows us to know our customers opinion and how we can improve their experiences</p>",
"<p>HappyFeast ensures that customers get value for their money. All discounts are advertised, calculated and displayed on The <b>Discount Page</b></p>",
"<p>The <b>Tour Page</b> provides information bout each page within this site. An overview of each page is provided along with their links</p>",
"<p>The <b>Filter Page </b>allows customers to filters by rate, timing, location and other means</p>",
"<p>The <b> Game Page </b> provides games for our customers to enjoy and earn prizes</p>",
"<p>Customers may become members of HappyFeast and be awarded special discounts and offers. The <b> Membership Page</b> facilitates customer becoming members of HappyFeast</p>",
"<p>The <b>Career Page </b> advertise all vacancies within the organization </p>"
];

let image=["<img src=../images/tour/homePic.jpg>","<img src=../images/tour/aboutPic.jpg>",
"<img src=../images/tour/orderPic.jpg>","<img src=../images/tour/trackPic.jpg>",
"<img src=../images/tour/contactPic.jpg>","<img src=../images/tour/Feedback.jpg>",
"<img src=../images/tour/Review.jpg>","<img src=../images/tour/discountPic.jpg>",
"<img src=../images/tour/tourPic.jpg>","<img src=../images/tour/filterPic.jpg>",
"<img src=../images/tour/gamePic.jpg>","<img src=../images/tour/Membership.jpg>",
"<img src=../images/tour/CareerPic.jpg>"];

/////////////display informtion and image/////////////////////////////////////////////////////////////////
function showText(i){
    document.getElementById("display").innerHTML="<div class=disformat>"+paragraph[i]+image[i]+"</div>";
}

//////////////reset information//////////////////////////////////////////////////////////////////////////
function hide(){
    document.getElementById("display").innerHTML="";
}