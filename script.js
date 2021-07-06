// Collection Of Quote
const quotes = [{
    quote: `Mrs Green: Has your baby learned to speak yet?</br>Mrs White: Yes. We are now teaching her to be quiet!`,   
	
}, {
    quote: `Jake: This match won't light.</br> 
	Joel: That's funny. It did a moment ago!`,
    
}, {
    quote: `Teacher: Now tell me, what comes after O? </br> Me: Yeah!`,
   
}, {
    quote: `My Father : What do you have to do to open the door? </br> Me: Lock it probably. `,
   
}, {
    quote: `Karthik: What is your baby brother's name? </br> Joel: I don't know, he won't tell me!`,
    
}, {
    quote: `Me: Mummy, how can I button my dress when the button is at the back and I am in front.`,
  
}, {
    quote: `Jake: Why are you running Joel? </br> Joel: I am trying to keep two people from fighting.</br>Jake: Which two people?</br> Joel: The shopkeeper and me! `,
    
}, {
    quote: `Mrs Smith: Children have a lot of will power. </br> Mr Brown: They also have a lot of won't power.`,
    
}, {
    quote: `Teacher: Joel, name two pronouns.</br> Joel: Who? Me? </br>Teacher: Correct!`,
    
}, {
    quote: `Lia: Why do you want to work in a bank?</br> Riley: I'm told there's money in it!`,
   
},{
    quote: `Rat: Daddy, I don't like to eat cheese with holes. </br> Daddy Rat: Eat the cheese and leave the holes in plate kiddo!`,
	
}, ]


// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    
})