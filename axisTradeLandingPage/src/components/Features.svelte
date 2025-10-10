
<script>
    import '../styles/components/aboutus.css'
    import BlurButton from '../elements/blurButton.svelte'

    // 1. Define the content for your buttons
    const button1 = {
        heading: "Shortened transaction cycles",
        information: "In weeks, buyers and sellers are able to interact with each other. Fast tracking the vetting process for mining",
        imgSrc: "/path/to/your/clock-icon.png" // Replace with the actual path to your clock icon
    };

    const button2 = {
        heading: "Next Button Heading",
        information: "Information for the second button goes here.",
        imgSrc: "/path/to/another-icon.png"
    };

    const button3 = {
        heading: "Final Button Feature",
        information: "This explains the third feature in detail.",
        imgSrc: "/path/to/last-icon.png"
    };
</script>

<section>
<div class="container"> 
    <h3> A <span>new way</span> of <span>buying</span> and <span>selling</span></h3>
    <p>
        Through AI-powered verification, smart contracts, and real-time reputation scoring, we create an environment where physical commodities like iron ore, copper,and gold can be traded securely, efficiently, and transparently. At Axistrade, trust isn’t an add-on—it’s the foundation of every transaction.
    </p>
    
    <div class="aboutUsPointsContainer">
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button1.heading}
            information={button1.information}
            imgSrc={button1.imgSrc}
        />
        
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button2.heading}
            information={button2.information}
            imgSrc={button2.imgSrc}
        />
        
        <BlurButton 
            extraClassName="aboutUsPointsItem"
            heading={button3.heading}
            information={button3.information}
            imgSrc={button3.imgSrc}
        />
         
    </div>
</div>
</section>