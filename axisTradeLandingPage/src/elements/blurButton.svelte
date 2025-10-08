<script>
    export let heading;
    export let information;
    export let imgSrc;
    export let extraClassName = "";
</script>

<div class="blurButton {extraClassName}"> 
    <img src={imgSrc} alt="Button Image"  class="blurButtonImage"/>
    <h1 class="blurButtonHeading">{heading}</h1>
    <p class="blurButtonParagraph">{information}</p>
</div>