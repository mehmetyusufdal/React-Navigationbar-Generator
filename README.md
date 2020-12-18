# Preview
> ### Normal Navbar
> ![Normal Navbar](https://drive.google.com/uc?export=view&id=16rI5G3b8MMZuS-no9Ow6k7Wm-Q92AqBu)

> ### Small Navbar
> ![Small Navbar](https://drive.google.com/uc?export=view&id=1jbUvC9fJFHuG6Q1UA7qoz2V3EbHW9QYi)

> ### Small Navbar Expanded
> ![Small Navbar Expanded](https://drive.google.com/uc?export=view&id=1TrpE3WJr5ZAVq_HELbPRO6gY8FLDsLWH)

<br />
<br />

# Requirements
> - React Router Dom
>https://reactrouter.com/web/guides/quick-start

> - Bootstrap
> https://getbootstrap.com/docs/4.4/getting-started/introduction/

> - Font Awesome
>https://fontawesome.com/how-to-use/customizing-wordpress/snippets/setup-cdn-webfont

<br />
<br />

# Installation
### React Router Dom
Run this command:
``` bash
npm install react-router-dom
```
<br />

### Bootstrap
Copy and paste this, into your index.html file's head section.
```HTML
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
```
<br />

### Font Awesome
Copy and paste this, into your index.html file's head section.
``` HTML
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
```

<br />

### React-Navigationbar-Generator
Download navbar-generator folder and move it into your project folder.

<br />
<br />

# Usage

Create your pages and configure your router.
Then create a navlink array. It should be like this:
``` JS
const  navlinks = [
	{
		title:  "HOME",
		path:  "/",
	},
	{
		title:  "ABOUT",
		path:  "/about",
	},
	{
		title:  "PROJECTS",
		path:  "/projects",
	},
	{
		title:  "BLOG",
		path:  "/blog",
	},
	{
		title:  "CONTACT",
		path:  "/contact",
	}
]
```

Add ```<Navbargenerator> ``` on top of your page and add navlinks as prop.
ex:
``` JSX
<Navbargenerator  navitems={navitems}/>
```

<br />
<br />

# Props

> - navitems (array)
>   -Navlink array.

> - isFixedTop (bool)
>   -Determines whether the navbar is fixed to the top or not.
>   -Default valuse is ```false```.

> - TextClass (Bottstrap text color class (string) )
>  -Changes navigation links color. Default value is ```"text-light"```.
>  -Must be a Bootstrap text color class.
>   -For more information visit: https://getbootstrap.com/docs/4.0/utilities/colors/

<br />
<br />

# Styling
To style navbar, change css classes in navbar.css.
