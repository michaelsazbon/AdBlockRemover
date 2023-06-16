# AdBlockRemover

> Detect if an ad blocker extension is active and ask the user to disable it in a nice modal popup


[ ![](demo.gif) ](demo.gif)


# Features

- No dependency
- Tested on AdBlock and AdBlockPlus

# Installation

Add the below code in the HTML page inside the \<head\>\</head\> tag. 

```html
<script src="adblockremover.js"></script>
<link href="adblockremover.css" rel="stylesheet">
```

## CDN 

```html
<script src="https://cdn.jsdelivr.net/gh/michaelsazbon/AdBlockRemover@main/adblockremover.js"></script>
<link href="https://cdn.jsdelivr.net/gh/michaelsazbon/AdBlockRemover@main/adblockremover.css" rel="stylesheet">
```

# Usage

Add the below code in the HTML page before the \</body\> tag. 

```javascript
<script>

    AdBlockRemover({
        button_text: "I'm OK the ad blocker is disabled !"
        // other options if needed
    })

</script>
```

# Default options

```javascript
// The title of the modal window
title: 'We see you’re using an ad blocker'

// The text of the modal window
text: 'This website relies on advertising to bring you rich content. <br />To continue using this website, please add it to the safe sites in your ad blocker or disable your ad blocker'

// The css class of the modal window
modal_class: ''

// The css class of the overlay
overlay_class: ''

// The css class of the button
button_class : ''

// The text of the button
button_text: 'I disabled my ad blocker'

//The time in ms between each check if an ad blocker is enabled
loop_check_time: 5000,

//The max number of checks
loop_max_check: 10,

//The Time in ms before the first check
wait_to_check_time: 3000
```