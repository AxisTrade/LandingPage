<script>
    import '../styles/elements/blurButton.css'
    export let heading;
    export let information;
    export let imgSrc;
    export let extraClassName = "";
</script>

<div class="blurButton"> 
  <img src={imgSrc} alt="Button Image" class="blurButtonImage" />
  <div class="blurButtonText">
    <h4 class="blurButtonHeading">{heading}</h4>
    <p class="blurButtonParagraph">{information}</p>
  </div>
</div>
