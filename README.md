# Meteor.js Polling App

http://wdipolls.meteor.com/

Team Meteor Shower = Erica Andersen + Paul Doulatshahi

To run the local version of this app:

1. Clone the repo
2. Install Meteor on your machine
  * Windows: https://install.meteor.com/windows
  * OSX/Linux: ``` curl https://install.meteor.com/ | sh ```

3. Install MongoDB ``` $ brew install mongodb ```
4. ```cd``` into your cloned repo

5. Run the application with ```meteor``` - the app will be running on ``` http://localhost:3000 ```

##### 1. Why did you choose this subject?
We chose to learn about Meteor.js because we are interested in JavaScript frameworks.

* How were you first made aware of it?

Erica - A few weeks ago, my friend in the development industry asked me if I had ever used or heard of Meteor.js. Their opinion of Meteor is that it's a powerful JS framework that makes building prototypes a simple and efficient process.

Paul - I hadn't heard of it until today!

##### 2. What problem does it solve?
With nothing but JavaScript, you’re able to build modern, real-time web applications for both desktop and mobile platforms.

> Writing software is too hard and it takes too long. It's time for a new way to write software — this new way should be radically simple. It should make it possible to build a prototype in a day or two, and a real production app in a few weeks. It should make everyday things easy, even when those everyday things involve hundreds of servers, millions of users, and integration with dozens of other systems.

* How does it solve the problem (conceptually)?

> There are many big problems to tackle, such as: How do we transition the web from a "dumb terminal" model that is based on serving HTML, to a client/server model that is based on exchanging data? How do we design software to run in a radically distributed environment, where even everyday database apps are spread over multiple data centers and hundreds of intelligent client devices, and must integrate with other software at dozens of other organizations? How do we prepare for a world where most web APIs will be push-based (realtime), rather than polling-driven? In the face of escalating complexity, how can we simplify software engineering so that more people can do it? How will software developers collaborate and share components in this new world?

> Meteor is our audacious attempt to solve all of these big problems, at least for a certain large class of everyday applications. We think that success will come from hard work, respect for history and "classically beautiful" engineering patterns, and a philosophy of generally open and collaborative development.

##### 3. Why does one use it?
There are so many reasons! So far, my favorite reason (sourced from http://www.sitepoint.com/7-reasons-develop-next-web-app-meteor/) is that:

* You can develop with just one language.

> One of the frustrating parts of being a web developer is the need to wear a variety of hats. You need to think about the front-end, the back-end, and the database, and then there’s another million details that squeeze out the last inch of your mental capacity. Meteor simplifies this process by shrinking the scope of what you need to consider, allowing you to build and manage the front-end, the back-end, and the database with nothing but JavaScript.

> There’s another benefit to writing an entire application with one language. One line of code can run on both the client and the sever and do different things in either environment. So when the statement to create a collection runs on the server it, predictably enough, creates a collection. But when that same statement runs on the client (which it will do by default), it creates a purely local collection within the user’s browser. The user then interfacts with the local collection directly, which is why the data on their screen can change instantaneously, while the local and server-side collections are seamlessly synced in the background.

* What are the alternatives?
  Other alternatives to Meteor.js are:

  1. Mojito; a model-view-controller (MVC) application framework built on YUI 3 that enables agile development of Web applications. Mojito allows developers to use a combination of configuration and an MVC architecture to create applications. Because client and server components are both written in JavaScript, Mojito can run on the client (browser) or the server (Node.js).

  2. Derby; a MVC framework making it easy to write realtime, collaborative applications that run in both Node.js and browsers.

  3. Compound; a MVC framework. Built on Node.JS. Works on server and browser.

* What is it similar to, if anything?
  I thought the source http://www.sitepoint.com/7-reasons-develop-next-web-app-meteor/ explained this really well:
  > “Meteor is to Node.js as Rails is to Ruby”. A few years ago, Rails was the hot new thing on the web, sprinkling some useful “magic” through the development process to make programming on the web more approachable and pleasant. Out of the countless new frameworks that have spawned as of late though, none have made me feel the way Rails did as much as Meteor.

##### 4. What is the history of this technology?

* Who built it and why?
Meteor (which was originally called Skybreak) was co-created by Geoff Schmidt and Matt Debergalisis who started their team, the Meteor Development Group. The startup was incubated by Y Combinator and received $11.2MM in funding from Andreessen Horowitz in July 2012.

* Who is maintaining it?
Meteor is maintained by the Meteor Development Group. This their team and the members can be seen here: https://www.meteor.com/people

##### 5. What is your opinion on the technology after having built something with it?

We really liked using it. It's very user-friendly, especially as beginners. It almost completely eliminates the back-end setup needed in other frameworks, and the front-end setup is similar to other JS frameworks.

##### 6. What are the biggest conceptual hurdles (if any) you encountered when researching this?

We had minor difficulty in creating template files instead of putting them directly in the body HTML. However, with some Stack Overflow research, we resolved the issue in our code.

##### 7. What resources do you recommend for interested students?
  1. Meteor Docs: http://docs.meteor.com/#/full/

  Also, get started by following well documented Meteor.js tutorials:
  * https://scotch.io/tutorials/learn-meteor-js-from-scratch-build-a-polling-app
  * https://www.meteor.com/tutorials/blaze/creating-an-app

* What article or forum was most helpful to you in learning this?

Helpful articles for troubleshooting/adding functionality:

http://stackoverflow.com/questions/29399249/meteor-each-loop-within-template
https://teamgaslight.com/blog/how-to-remove-all-elements-from-a-meteor-collection

##### 8. What are 3 interview questions one might be asked about this technology?
  1. When setting up a new Meteor App, how would you create your database?

  By default, every Meteor project comes with its own database. There’s no setup or configuration required. Whenever you create a project, a database is automatically created for that project, and whenever the local server is running, so is that database. This database, however, is not an SQL database. Instead, it’s what’s known as a MongoDB database.

  2. What are some advantages of using Meteor.js?

  There is no back-end setup needed as long as you have MongoDB. The entire framework is in Javascript, so your back-end won't be in Ruby (for example). The packages (see http://atmospherejs.com) are easier to install than in other frameworks. All in all, you can build and deploy an MVP a lot more quickly with Meteor.js than with other popular frameworks.

  3. How would you go about finding an element to delete in your Meteor Collection?
  Meteor has a remove() method but the catch is that you’re not allowed to call Collection.remove({}) from the console. The solution here is that you can call methods defined on the Meteor server from the client using the `Meteor.call` method. Therefore, this will work in the console:

  `Meteor.call('removeAllPosts')`

  Assuming you define `removeAllPosts on` the server like so

  ```javascript
  if (Meteor.isServer) {
    Meteor.startup(function() {
      return Meteor.methods({
        removeAllPosts: function() {
          return Posts.remove({});
        }
      });
    });
  }
  ```
