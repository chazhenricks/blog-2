var blogPosts = [
{
  title: "Week 1",
  date: "April 8, 2017",
  copy:
    "I feel like I have acomplished a lot this week. I have gone from a <em> very </em> limited use of the terminal to doing most of the work at school from the command line. I have realized that I retained far more of the pre-work in HTML and CSS than I thought I did. I have successfually been able to help some fellow classmates with problems that further cemented some of the concepts in memory. On Friday I joind a group of 5 other people to try and tackle one of the first group projects, probably a bit ambitiously. Even though we did not get the Tic Tac Toe game operational, we did learn a tremendous ammount about integrating Git and Github in a team setting. After a few accidental push-to-masters, some confusion with merge conflits, and realizing that you havent been working from the current master I think we learned more about planning and team work than we did getting a functioning product, which I dont think is a bad thing at all. All in all I think week 1 at NSS has pushed me to learn to ask help from peers and realize that even though I know more than I thought I did, there is <em> a lot </em> I dont know. And that the community here is more helpful and inviting than I had expected.",
  author: "Chaz Henricks"

},
{
  title: "Week 2",
  date: "April 15, 2017",
  copy:
  "This week help me solidify some more knowledge of CSS styling with flexbox as well as learning more about how to work in groups. My very limited knowledge of Flexbox turned into teaching classmates how to used my limited knowledge of flexbox. Because I was helping others I was constantly having to look up the documentation to find answers to questions and problems which further solidified the different properties and values and how to use them. I went from being very vaguely familiar to having a pretty good grasp on how to do layouts using flexbox. This week also served as more good experience with working in groups. I'm still figuring out how to best handle GihHub, tickets and merge issues, but I know I am in a much better place at the end of this week than I was last week.",
  author: "Chaz Henricks",
},

];

var container = document.getElementById("container");

for (potato in blogPosts){
  var posts =
    `<article class ="blog-entry">
      <header class="blog-header">
        <h3 class="blog-date"> -- ${blogPosts[potato].date} --</h3>
        <h2 class="blog-title">${blogPosts[potato].title} </h2>
      </header>
      <section class="blog-copy">
        ${blogPosts[potato].copy}
      </section>
      <footer class="blog-footer">
        <p class="blog-author">Written By - ${blogPosts[potato].author}
      </footer>
    </article>`;

container.innerHTML += posts;

};








