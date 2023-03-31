WELCOME TO POWERLIFTINGHUBBD

*Intro: Is is a web platform i have developed using Next.js, React.js, Typescript and MongoDB. The Deployment of the website is on a AWS ec2 EBS ( medium size 8 gb) and using port 3000. Many functionalities of the website are made as dummy like the side menu in mobile view to keep the functionalities of this specific project precise. 

*Tech Stack : Next.js, React.js, Typescript, Bootstrap, JS, CSS, MongoDB, AWS, AWS ec2, vercel.

*Code Base : The code base is really Neat and easy to understand. the format is of any next project. in pages i have both tsx and js files which are used for different purposes. in API i used react.js. inside model folder i have 3 schemas for user registration, specific item and specific order. Although a user can register and login , i have not made it inevitable for users to login for ordering to simplify order process. inside lib, i have connect() file for my mongodb. i have a components folder inside which are many components for functionalities like header, footer and cart. Overall the codebase is a simple next.js codebase and code is neat and easy to unserstand.

*Functionalities :
Display of gadgets and items.
registration
Login
Cart - Order Multiple items.
Cart Functionalities like any professional website
Payment
MongoDB order panel to see orders(there is no admin panel yet to see users but orders are seen manually from mongodb only)

*Codebase :
components : has all front-end and functionality components. Headers, Footers and Menus that are consistent. _app.js , _document.js has stardadized Next.js Format where rendering of components are explained. The model and shema file explains schema of data that is keot in the database. Initially here are 3 formats of data, registration for username, password, a user,phone-no and email model for basic info. while making an order these models are not required as this is done using customer ease of use. only the model of usr phone number and adress is needed. for the deployment as it is just a VM is working as host of App, the .env.local file is created using nano on a 8GB ec2 machine. 

*To use this code :

locally :

do git clone <adress> - @afifmansib123 github repos are made public and has no private files.
do yarn install
yarn install mongoose 
create .env.local and ut your MONGODB URI and connect useing application.
do yarn dev to run at port 3000.

Deployment:

As i have not done deployment on vercel, i prefer to test on a ec2 machine. make ec2 linux (prefer ubuntu v > 18) do initial installation of node and other packages. make sure port 3000 security rules have been added and run yarn dev from CLI. it should be accessable at ec2 adress of the app.

![0585E513-5F31-417C-8721-E9B998A72AC7](https://user-images.githubusercontent.com/87470689/229075898-0942ab6e-d5ef-4f4b-bc49-41afe7ea1fb1.jpeg)
![44D7FCF4-C732-4A43-8052-AD9FE4444F23](https://user-im![74419394-290F-4E25-81EC-528A5701B0A5]



![74419394-290F-4E25-81EC-528A5701B0A5](https://user-images.githubusercontent.com/87470689/229076245-1a7e900e-22d0-4231-b8ce-de7662136362.jpeg)
