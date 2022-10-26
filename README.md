# Order Summary Card

 Make It Real - This is a solution to the Order Summary Card Project of the Make It Real course.


## Table of contents
 1. [The challenge](#the-challenge)
 2. [Screenshot](#screenshot)
 3. [My process](#my-process)
 4. [Built with](#built-with)
 5. [What I learned](#what-i-learned)
 6. [Author](#author)
 7. [Acknowledgments](#acknowledgments)


### The challenge
 Users should be able to:
 Watch the different display depending on the size of the device (mobile or desktop) and the change of the color in some items when someone hover the mouse over them.


### Screenshot

#### Mobile design
![Mobile design](https://github.com/dcquinche/OrderSummaryCard/blob/main/design/Mobile.png)

#### Desktop design
![Desktop design](https://github.com/dcquinche/OrderSummaryCard/blob/main/design/Desktop.png)

#### Active Mode Items (Link and Buttons)

![Active link](https://github.com/dcquinche/OrderSummaryCard/blob/main/design/ActiveModeLink.png)

![Active button 1](https://github.com/dcquinche/OrderSummaryCard/blob/main/design/ActiveModeBtn1.png)

![Active button 2](https://github.com/dcquinche/OrderSummaryCard/blob/main/design/ActiveModeBtn2.png)


### My process
First we organized the component structure for the mobile design and we added the layouts including the hover selector on the items. Then, we put a @media to change the size of the component for a better display on the desktop design. At the end, we added some properties to the index css file to center the component and put the image on the background.


### Built with
- React
- HTML
- CSS
- JavaScript
- Mobile-first workflow
- Media Query


### What I learned

- To use an image on the component with jsx extension, you must import it.

```
    import music from './images/icon-music.svg';

```

```
    <img id='music' alt='music' src={music}/>

```


### Author
Diana Carolina Quinche Velez -
[Linkedin](https://www.linkedin.com/in/diana-carolina-quinche-v%C3%A9lez-06b9791b3/)


### Acknowledgments
Special acknowledgments to my team partners Yulany Munevar - Juan Lorza and our mentor Cristian Moreno.

