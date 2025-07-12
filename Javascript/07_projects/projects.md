# Basic Javascript Projects using DOM 

## 1. Background Color Changer
- The background color of the page  will change according to the user's choice 
###  Code logic here : 
 
```javascript 
    <script>
    const buttons =  document.querySelectorAll('.button');
    const body = document.querySelector('body');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            if (e.target.id == 'grey'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == 'blue'){
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == 'white'){
                body.style.backgroundColor = e.target.id;
            }
        })
    })
</script>
```